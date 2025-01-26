import React from "react";
import { Helmet } from "react-helmet";
import useReqContact from "../../../hooks/useReqContact";
import { Table, Button } from "antd";
import useAllBioData from "../../../hooks/useAllBioData";

const MyContactRequest = () => {
  const { allReqContact } = useReqContact();
  const [biodatas] = useAllBioData();

  // Log the data for debugging purposes
  console.log("All Contact Requests:", allReqContact);

  // Define the columns for the table
  const columns = [
    {
      title: "Requested ID No",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title:  <div className="bg-gray-300 p-2 text-center text-indigo-900 font-bold">Requested ID Name</div>,
      dataIndex: "reqName",
      key: "reqName",
      align: "center",
    },
    {
      title: "Your Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title:  <div className="bg-gray-300 p-2 text-center text-indigo-900 font-bold">Price (USD)</div>,
      dataIndex: "price",
      key: "price",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      render: (_,record) => (
        <Button
        disabled={record.status === "approved"}
          type="default"
          className="bg-lime-200 text-indigo-800 rounded-lg px-4 py-2 font-medium hover:bg-yellow-300"
          onClick={() => console.log("Action button clicked!")}
        >
          {record.status === "approved" ? "Approved" : "Pending"}
        </Button>
      ),
      align: "center",
    },
    {
      title: (
        <div className="bg-lime-300 p-2 text-center text-indigo-900 font-bold">
          Biodata Details
        </div>
      ),
      key: "biodataDetails",
      render: (_, record) => {
        // Find the corresponding biodata record
        const matchingBiodata = biodatas.find((biodata) => biodata.id === record.id);
  
        // Check the status and render the details conditionally
        if (record.status === "approved" && matchingBiodata) {
          return (
            <div>
              <p>Email: {matchingBiodata.email}</p>
              <p>Phone: {matchingBiodata.phone}</p>
            </div>
          );
        } else {
          return <p>N/A</p>; // Show "N/A" if no match or status is not approved
        }
      },
      align: "center",
    },
  ];

  return (
    <div className="mt-10 mx-auto p-4 max-w-6xl">
      {/* Helmet for dynamic title */}
      <Helmet>
        <title>Perfect Pair || Contact Request Page</title>
      </Helmet>

      {/* Header */}
      <h1 className="text-xl font-bold mb-4 text-indigo-900 border-double border-y-2 md:w-1/4 w-2/4 text-center border-lime-400 py-1">
        My Contact Request
      </h1>

      {/* Table */}
      {allReqContact && allReqContact.length > 0 ? (
        <Table
          columns={columns}
          dataSource={allReqContact}
          pagination={{ pageSize: 5 }}
          bordered
          rowKey="_id"
          className="rounded-lg shadow-lg"
        />
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No contact requests available at the moment.
        </p>
      )}
    </div>
  );
};

export default MyContactRequest;
