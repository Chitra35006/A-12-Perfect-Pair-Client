import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Table, Button, Input } from "antd";
import Swal from "sweetalert2";
import useTheme from "../../../hooks/useTheme";
import './AdminManagaeUser.css';

const AdminManageUser = () => {
  const { theme } = useTheme();
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState("");
  const [disableButtons, setDisableButtons] = useState(false);

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
      setDisableButtons(true);
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
        .finally(() => setDisableButtons(false));
    }
  };

  const handleMakePremium = (userId, userName, currentRole) => {
    if (userId && currentRole !== "premium") {
      setDisableButtons(true);
      axiosSecure
        .patch(`/users/premium/${userId}`)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${userName} is now a PREMIUM user!`,
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
        .finally(() => setDisableButtons(false));
    }
  };

  const columns = [
    {
      title: (
        <span
          style={{
            color: theme === "dark" ? "#fff" : "#000", // Dark mode title color
          }}
        >
          Name
        </span>
      ),
      dataIndex: "name",
      key: "name",
      align: "center",
      render: (text) => (
        <span
          className={`font-bold ${theme === "dark" ? "text-white" : "text-indigo-900"}`}
        >
          {text}
        </span>
      ),
    },
    {
      title: (
        <span
          style={{
            color: theme === "dark" ? "#fff" : "#000", // Dark mode title color
          }}
        >
          Email
        </span>
      ),
      dataIndex: "email",
      key: "email",
      align: "center",
      render: (text) => (
        <span
          className={`${theme === "dark" ? "text-white" : "text-indigo-900"}`}
        >
          {text}
        </span>
      ),
    },
    {
      title: (
        <span
          style={{
            color: theme === "dark" ? "#fff" : "#000", // Dark mode title color
          }}
        >
          Actions
        </span>
      ),
      key: "actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Button
            className="bg-indigo-900"
            type="primary"
            onClick={() => handleMakeAdmin(record._id, record.name, record.role)}
            disabled={record.role === "admin" || disableButtons}
          >
            {record.role === "admin" ? "Admin" : "Make Admin"}
          </Button>
          <Button
            className="border-lime-400"
            type="default"
            onClick={() => handleMakePremium(record._id, record.name, record.role)}
            disabled={record.role === "premium" || disableButtons}
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
        columns={columns.map((col) => ({
          ...col,
          title: (
            <span
              className={theme === "dark" ? "dark-text" : "light-text"}
            >
              {col.title}
            </span>
          ),
        }))}
        rowKey={(record) => record._id}
        pagination={{
          pageSize: 8,
          showSizeChanger: true,
        }}
        bordered
        rowClassName={(record, index) => (theme === "dark" ? "dark-row" : "light-row")}
        style={{
          backgroundColor: theme === "dark" ? "#0f172a" : "#ffffff",
          color: theme === "dark" ? "#fff" : "#000",
        }}
      />
    </div>
  );
};

export default AdminManageUser;
