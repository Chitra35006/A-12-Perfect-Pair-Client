import React from "react";
import { Table, Button, message } from "antd";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MakePremium = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch premium users data
  const { data: prUsers = [], refetch } = useQuery({
    queryKey: ["prUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/approvePremium");
      return res.data;
    },
  });

  // Handle Make Admin button click
  const handleMakePremium = async (email,name,currentRole) => {
    if(email && currentRole !== "premium"){
        
        axiosSecure.patch(`/prUsers/premium/${email}`)
        .then(res => {
          console.log("Patch Response:", res.data); // Log the entire response
          console.log("Modified Count:", res.data.modifiedCount);
          if (res.data.success) {
            // Refetch to update users list and reflect the change in UI
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} now is a PREMIUM user!`, // Use the passed userName
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch(error => {
          console.error('Error making user PREMIUM :', error);
          Swal.fire({
            icon: "error",
            title: "Failed to make user PREMIUM !",
            text: error.message,
          });
        });
    }
  };

  // Ant Design Table Columns
  const columns = [
    {
      title: "Index",
      dataIndex: "index",
      key: "index",
      render: (_, __, index) => <span>{index + 1}</span>, // Display index
      responsive: ["xs", "sm", "md", "lg", "xl"], // Responsive for all screens
    },
    {
      title: "Username",
      dataIndex: "name",
      key: "name",
      render: (name) => <span>{name || "N/A"}</span>, // Fallback if name is missing
      responsive: ["sm", "md", "lg", "xl"], // Show from small screens and up
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      responsive: ["md", "lg", "xl"], // Show from medium screens and up
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button className="font-bold bg-indigo-900"
          type="primary"
          onClick={() => handleMakePremium(record.email,record.name,record.status)} // Pass user email
          disabled={record.status === "premium"} // Disable if already an admin
        >
          {record.status === "premium" ? "Premium User" : "Make Premium"}
        </Button>
      ),
      responsive: ["sm", "md", "lg", "xl"], // Show from small screens and up
    },
  ];

  return (
    <div className="mx-10">
      <h2 className="text-lg font-bold mb-4">
        Premium Users ({prUsers.length})
      </h2>
      <Table
        dataSource={prUsers}
        columns={columns}
        rowKey="email" // Unique key for each row
        pagination={{ pageSize: 5 }} // Pagination with 5 rows per page
        bordered
        scroll={{ x: "100%" }} // Enable horizontal scroll for responsiveness
      />
    </div>
  );
};

export default MakePremium;
