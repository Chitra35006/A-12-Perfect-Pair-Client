import React from "react";
import { Table, Avatar } from "antd";
import useFavPage from "../../../hooks/useFavPage";
import { Helmet } from "react-helmet";

const FavouriteBioData = () => {
  const { allFavData } = useFavPage();
  console.log("All Favorite Data:", allFavData);

  // Define columns for the table
  const columns = [
    {
      title: <div className="bg-gray-300 p-2 text-center text-indigo-900 font-bold">Photo</div>,
      dataIndex: "photo",
      key: "photo",
      align: "center",
      render: (photo) => (
        <Avatar
          src={photo || "https://via.placeholder.com/64"}
          size={64}
        />
      ),
    },
    {
      title: <div className="bg-gray-200 p-2 text-center text-indigo-900 font-bold">Name</div>,
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: <div className="bg-gray-300 p-2 text-center text-indigo-900 font-bold">Occupation</div>,
      dataIndex: "occupation",
      key: "occupation",
      align: "center",
    },
    {
      title: <div className="bg-gray-200 p-2 text-center text-indigo-900 font-bold">ID</div>,
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
      <h1 className="text-xl font-bold mb-4 text-indigo-900 border-double border-y-2 md:w-1/4 w-2/4 text-center border-lime-400 py-1">
        Favorite Data
      </h1>
      <Table
        columns={columns}
        dataSource={Array.isArray(allFavData) ? allFavData : []}
        rowKey={(record) => record.id}
        bordered
        pagination={{ pageSize: 5 }}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "bg-gray-100" : "bg-white"
        }
      />
    </div>
  );
};

export default FavouriteBioData;
