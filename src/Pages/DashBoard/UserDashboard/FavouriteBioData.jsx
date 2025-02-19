import React from "react";
import { Table, Avatar } from "antd";
import useFavPage from "../../../hooks/useFavPage";
import { Helmet } from "react-helmet";
import useTheme from "../../../hooks/useTheme";

const FavouriteBioData = () => {
  const { allFavData } = useFavPage();
  const { theme } = useTheme();
  console.log("All Favorite Data:", allFavData);

  // Define columns for the table
  const columns = [
    {
      title: (
        <div
          className={`p-2 text-center font-bold ${
            theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-300 text-indigo-900"
          }`}
        >
          Photo
        </div>
      ),
      dataIndex: "photo",
      key: "photo",
      align: "center",
      render: (photo) => (
        <Avatar src={photo || "https://via.placeholder.com/64"} size={64} />
      ),
    },
    {
      title: (
        <div
          className={`p-2 text-center font-bold ${
            theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-indigo-900"
          }`}
        >
          Name
        </div>
      ),
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: (
        <div
          className={`p-2 text-center font-bold ${
            theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-300 text-indigo-900"
          }`}
        >
          Occupation
        </div>
      ),
      dataIndex: "occupation",
      key: "occupation",
      align: "center",
    },
    {
      title: (
        <div
          className={`p-2 text-center font-bold ${
            theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-indigo-900"
          }`}
        >
          ID
        </div>
      ),
      dataIndex: "id",
      key: "id",
      align: "center",
    },
  ];

  return (
    <div className="mt-10 mx-auto p-4 max-w-6xl">
      <Helmet>
        <title>Perfect Pair || Favourite Page</title>
      </Helmet>
      <h1
        className={`text-xl font-bold mb-4 border-double border-y-2 md:w-1/4 w-2/4 text-center border-lime-400 py-1 ${
          theme === "dark" ? "text-teal-400" : "text-indigo-900"
        }`}
      >
        Favorite Data
      </h1>
      <Table
        columns={columns}
        dataSource={Array.isArray(allFavData) ? allFavData : []}
        rowKey={(record) => record.id}
        bordered
        pagination={{ pageSize: 5 }}
        className={`rounded-lg shadow-lg ${
          theme === "dark" ? "bg-gray-900 text-gray-300 border-gray-700" : "bg-white"
        }`}
        rowClassName={(record, index) =>
          theme === "dark"
            ? index % 2 === 0
              ? "bg-gray-800 text-gray-300 hover:bg-lime-400 hover:text-gray-900"
              : "bg-gray-700 text-gray-300 hover:bg-lime-400 hover:text-gray-900"
            : index % 2 === 0
            ? "bg-gray-100"
            : "bg-white"
        }
      />
    </div>
  );
};

export default FavouriteBioData;
