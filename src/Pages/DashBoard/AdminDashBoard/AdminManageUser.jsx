import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Table, Button, Input } from "antd";
import Swal from "sweetalert2";

const AdminManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState("");
  const [disableButtons, setDisableButtons] = useState(false); // Add disableButtons state

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMakeAdmin = (userId, userName, currentRole) => {
    if (userId && currentRole !== "admin") {
      setDisableButtons(true); // Disable both buttons when making the user admin
      axiosSecure
        .patch(`/users/admin/${userId}`)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${userName} is an Admin Now!`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Failed to make user admin!",
            text: error.message,
          });
        })
        .finally(() => setDisableButtons(false)); // Re-enable buttons after refetch
    }
  };

  const handleMakePremium = (userId, userName, currentRole) => {
    if (userId && currentRole !== "premium") {
      setDisableButtons(true); // Disable both buttons when making the user premium
      axiosSecure
        .patch(`/users/premium/${userId}`)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${userName} now is a PREMIUM user!`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Failed to make user PREMIUM!",
            text: error.message,
          });
        })
        .finally(() => setDisableButtons(false)); // Re-enable buttons after refetch
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text) => <span className="font-bold text-indigo-900">{text}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Button className="bg-indigo-900"
            type="primary"
            onClick={() =>
              handleMakeAdmin(record._id, record.name, record.role)
            }
            disabled={record.role === "admin" || disableButtons} // Disable if user is admin or if buttons are globally disabled
          >
            {record.role === "admin" ? "Admin" : "Make Admin"}
          </Button>
          <Button className="border-lime-400"
            type="default"
            onClick={() =>
              handleMakePremium(record._id, record.name, record.role)
            }
            disabled={record.role === "premium" || disableButtons} // Disable if user is premium or if buttons are globally disabled
          >
            Make Premium
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold text-indigo-900 border-double border-y-2 md:w-1/4 w-2/4 text-center border-lime-400 py-1 mx-auto mb-4">
        All Users
      </h1>

      {/* Search Input */}
      <div className="mb-5 text-center">
        <Input
          placeholder="Search users by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "50%", margin: "0 auto" }}
        />
      </div>

      <h2 className="text-center text-indigo-900 font-bold mb-5">
        Total Users: {filteredUsers.length}
      </h2>

      <Table
        dataSource={filteredUsers}
        columns={columns}
        rowKey={(record) => record._id}
        pagination={{
          pageSize: 8, // Adjust as needed
          showSizeChanger: true,
        }}
        bordered
        style={{ backgroundColor: "#f9f9f9" }}
      />
    </div>
  );
};

export default AdminManageUser;
