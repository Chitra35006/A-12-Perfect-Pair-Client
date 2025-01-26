import React, { useState } from "react";
import { Table, Button, message } from "antd";
import { useQuery, useQueryClient } from "@tanstack/react-query"; // Import Query Client
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MakePremium = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient(); // Access the Query Client
  const [updateTrigger, setUpdateTrigger] = useState(false);

  const forceUpdate = () => setUpdateTrigger((prev) => !prev);

  // Fetch premium users data
  const { data: prUsers = [], refetch } = useQuery({
    queryKey: ["prUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/approvePremium");
      console.log("Fetched Users Data:", res.data); // Log fetched data
      return res.data;
    },
    refetchOnWindowFocus: false, // Prevent unwanted refetch
  });

  // Handle Make Premium button click
  const handleMakePremium = async (email, name, currentRole) => {
    console.log("Clicked User Data:", { email, name, currentRole });
    if (email) {
      try {
        const res = await axiosSecure.patch(`/prUsers/premium/${email}`);
        console.log("Backend Response:", res.data);

        if (res.data.success) {
          // Show success notification
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} is now a PREMIUM user!`,
            showConfirmButton: false,
            timer: 1500,
          });

          // Refetch data and invalidate cache
          queryClient.invalidateQueries(["prUsers"]); // Ensure fresh data
          forceUpdate(); // Force table re-render
        }
      } catch (error) {
        console.error("Error making user PREMIUM:", error);
        Swal.fire({
          icon: "error",
          title: "Failed to make user PREMIUM!",
          text: error.message,
        });
      }
    }
  };

  // Ant Design Table Columns
  const columns = [
    {
      title: "Index",
      dataIndex: "index",
      key: "index",
      render: (_, __, index) => <span>{index + 1}</span>, // Display index
    },
    {
      title: "Username",
      dataIndex: "name",
      key: "name",
      render: (name) => <span>{name || "N/A"}</span>, // Fallback if name is missing
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          className="font-bold bg-indigo-900"
          onClick={() => handleMakePremium(record.email, record.name, record.status)} // Pass user email
          disabled={record.status === "premium"} // Disable if already a premium user
        >
          {record.status === "premium" ? "Premium User" : "Make Premium"}
        </Button>
      ),
    },
  ];

  return (
    <div className="mx-10">
      <h2 className="text-lg font-bold mb-4">
        Premium Users ({prUsers.length})
      </h2>
      <Table
        key={updateTrigger} // Force re-render on state change
        dataSource={prUsers}
        columns={columns}
        rowKey={(record) => record.email}
        pagination={false}
        bordered
        scroll={{ x: "100%" }}
      />
    </div>
  );
};

export default MakePremium;
