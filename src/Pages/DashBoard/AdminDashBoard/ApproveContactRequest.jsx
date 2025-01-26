import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import usePayments from '../../../hooks/usePayments';
import { Table, Button, Spin } from "antd";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ApproveContactRequest = () => {
  const [allPaymentData, refetch] = usePayments();
  const [localData, setLocalData] = useState([]); // Local state for payments
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // Sync local state with the data from React Query
    setLocalData(allPaymentData);
  }, [allPaymentData]);

  const handleContactApprove = (paymentId) => {
    axiosSecure
      .patch(`/approve/${paymentId}`)
      .then((res) => {
        if (res.data.message) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Contact Request Approved",
            showConfirmButton: false,
            timer: 1500,
          });

          // Optimistically update the local state
          setLocalData((prevData) =>
            prevData.map((item) =>
              item._id === paymentId ? { ...item, status: "approved" } : item
            )
          );
        }
      })
      .catch((error) => {
        console.error("Error approving contact request:", error);
        Swal.fire({
          icon: "error",
          title: "Approval Failed!",
          text: error.message,
        });
      });
  };

  const columns = [
    {
      title: <div className="bg-gray-300 p-2 text-center text-indigo-900 font-bold">User Email</div>,
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: <div className="bg-gray-300 p-2 text-center text-indigo-900 font-bold">Requested Contact for ID</div>,
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: <div className="bg-lime-300 p-2 text-center text-indigo-900 font-bold">Paid (USD)</div>,
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (price) => `$${price}`,
    },
    {
      title: <div className="bg-gray-300 p-2 text-center text-indigo-900 font-bold">Transaction ID</div>,
      dataIndex: "tId",
      key: "tId",
      align: "center",
    },
    {
      title: <div className="bg-gray-300 p-2 text-center text-indigo-900 font-bold">Date</div>,
      dataIndex: "date",
      key: "date",
      align: "center",
      render: (date) => new Date(date).toLocaleString(),
    },
    {
      title: <div className="bg-lime-300 p-2 text-center text-indigo-900 font-bold">Action</div>,
      key: "status",
      render: (_, record) => (
        <Button
          onClick={() => handleContactApprove(record._id)}
          disabled={record.status === "approved"}
          type="default"
          className="bg-lime-200 text-indigo-800 rounded-lg px-4 py-2 font-medium hover:bg-yellow-300"
        >
          {record.status === "approved" ? "Approved" : "Pending"}
        </Button>
      ),
      align: "center",
    },
  ];

  return (
    <div className="mt-10 mx-auto p-4 max-w-6xl">
      <Helmet>
        <title>Perfect Pair || Approve Request Contact</title>
      </Helmet>

      {/* Header */}
      <h1 className="text-xl font-bold mb-4 text-indigo-900 border-double border-y-2 md:w-1/4 w-2/4 text-center border-lime-400 py-1">
        Approve Contact Request
      </h1>

      {/* Table */}
      {localData.length === 0 ? (
        <Spin size="large" className="flex justify-center items-center h-screen" />
      ) : (
        <Table
          columns={columns}
          dataSource={localData}
          pagination={{ pageSize: 5 }}
          bordered
          rowKey="_id"
          className="rounded-lg shadow-lg"
        />
      )}
    </div>
  );
};

export default ApproveContactRequest;
