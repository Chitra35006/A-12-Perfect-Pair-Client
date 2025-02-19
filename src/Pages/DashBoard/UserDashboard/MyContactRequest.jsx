import React from "react";
import { Helmet } from "react-helmet";
import useReqContact from "../../../hooks/useReqContact";
import { Table, Button } from "antd";
import useAllBioData from "../../../hooks/useAllBioData";
import useTheme from "../../../hooks/useTheme";

const MyContactRequest = () => {
  const { allReqContact } = useReqContact();
  const { theme } = useTheme();
  const [biodatas] = useAllBioData();

  console.log("All Contact Requests:", allReqContact);

  const columns = [
    {
      title: "Requested ID No",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: (
        <div
          className={`p-2 text-center font-bold ${
            theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-300 text-indigo-900"
          }`}
        >
          Requested ID Name
        </div>
      ),
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
      title: (
        <div
          className={`p-2 text-center font-bold ${
            theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-300 text-indigo-900"
          }`}
        >
          Price (USD)
        </div>
      ),
      dataIndex: "price",
      key: "price",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          disabled={record.status === "approved"}
          type="default"
          className={`rounded-lg px-4 py-2 font-medium transition duration-300 ${
            record.status === "approved"
              ? "bg-gray-300 text-gray-300 !important"
              : theme === "dark"
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
              : "bg-lime-400 text-indigo-800 hover:bg-yellow-300"
          }`}
          onClick={() => console.log("Action button clicked!")}
        >
          {record.status === "approved" ? "Approved" : "Pending"}
        </Button>
      ),
      align: "center",
    },
    {
      title: (
        <div
          className={`p-2 text-center font-bold ${
            theme === "dark" ? "bg-lime-600 text-gray-200" : "bg-lime-300 text-indigo-900"
          }`}
        >
          Biodata Details
        </div>
      ),
      key: "biodataDetails",
      render: (_, record) => {
        const matchingBiodata = biodatas.find((biodata) => biodata.id === record.id);
        if (record.status === "approved" && matchingBiodata) {
          return (
            <div>
              <p>Email: {matchingBiodata.email}</p>
              <p>Phone: {matchingBiodata.phone}</p>
            </div>
          );
        } else {
          return <p>N/A</p>;
        }
      },
      align: "center",
    },
  ];

  return (
    <div className="mt-10 mx-auto p-4 max-w-6xl">
      <Helmet>
        <title>Perfect Pair || Contact Request Page</title>
      </Helmet>

      <h1
        className={`text-xl font-bold mb-4 border-double border-y-2 md:w-1/4 w-2/4 text-center border-lime-400 py-1 ${
          theme === "dark" ? "text-teal-500" : "text-indigo-900"
        }`}
      >
        My Contact Request
      </h1>

      {allReqContact && allReqContact.length > 0 ? (
        <div className="overflow-hidden rounded-lg bg-gray-900 p-4">
          <Table
            columns={columns}
            dataSource={allReqContact}
            pagination={{ pageSize: 5 }}
            bordered
            rowKey="_id"
            className="rounded-lg shadow-lg bg-gray-900 text-gray-300 border-gray-700"
            rowClassName={(record, index) =>
              theme === "dark"
                ? index % 2 === 0
                  ? "bg-gray-800 text-gray-300 hover:bg-lime-400 hover:text-gray-900 !important"
                  : "bg-gray-700 text-gray-300 hover:bg-lime-400 hover:text-gray-900 !important"
                : "hover:bg-lime-400 hover:text-gray-900 !important"
            }
          />
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No contact requests available at the moment.
        </p>
      )}
    </div>
  );
};

export default MyContactRequest;
