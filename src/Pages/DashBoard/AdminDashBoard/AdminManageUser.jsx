import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Table, Button } from "antd";
import Swal from "sweetalert2";

const AdminManageUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (userId, userName, currentRole) => {
    console.log(`/users/admin/${userId}`);
    if (userId && currentRole !== "admin") {
      axiosSecure.patch(`/users/admin/${userId}`)
        .then(res => {
          console.log("Patch Response:", res.data); // Log the entire response
          console.log("Modified Count:", res.data.modifiedCount);
          if (res.data.modifiedCount > 0) {
            // Refetch to update users list and reflect the change in UI
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${userName} is an Admin Now!`, // Use the passed userName
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        })
        .catch(error => {
          console.error('Error making user admin:', error);
          Swal.fire({
            icon: "error",
            title: "Failed to make user admin!",
            text: error.message,
          });
        });
    }
  };
  

  const handleMakePremium = (userId,userName, currentRole) => {
    console.log(`/users/premium/${userId}`);
    if (userId && currentRole !== "premium") {
      axiosSecure.patch(`/users/premium/${userId}`)
        .then(res => {
          console.log("Patch Response:", res.data); // Log the entire response
          console.log("Modified Count:", res.data.modifiedCount);
          if (res.data.modifiedCount > 0) {
            // Refetch to update users list and reflect the change in UI
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${userName} now is a PREMIUM user!`, // Use the passed userName
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

  const columns = [
    {
      title: <div className="bg-gray-300  p-2 text-center text-indigo-900 font-bold">Name</div>,
      dataIndex: "name",
      key: "name",
      align:"center",
      
      render: (text) => <span className="font-bold text-indigo-900">{text}</span>,
    },
    {
      title: <div className="bg-gray-300 p-2 text-center text-indigo-900 font-bold">Email</div>,
      dataIndex: "email",
      key: "email",
      align:"center",
    },
    {
      title: <div className="bg-lime-300 p-2 text-center text-indigo-900 font-bold">Actions</div>,
      key: "actions",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <Button
            className="bg-indigo-900 font-bold"
            type="primary"
            onClick={() => handleMakeAdmin(record._id, record.name,record.role,)} // Pass the current role to check
            disabled={record.role === 'admin'} // Disable button if already admin
          >
            {record.role === 'admin' ? 'Admin' : 'Make Admin'}
          </Button>
          <Button
            className="border-lime-500 font-semibold"
            type="default"
            onClick={() => handleMakePremium(record._id, record.name,record.role,)}
            disabled={record.role === 'premium'} 
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
      <h2 className="text-center text-indigo-900 font-bold mb-5">
        Total Users: {users.length}
      </h2>
      <Table
        dataSource={users}
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
