import React, { useState } from "react";
import { Table, Button, Modal, Rate } from "antd";
import { Helmet } from "react-helmet";
import useMarriageList from "../../../hooks/useMarriageList";
import useTheme from "../../../hooks/useTheme"; // Import custom hook for theme

const SuccessStory = () => {
  const { theme } = useTheme(); // Get current theme (light/dark)
  const marriageListsData = useMarriageList(); // Fetch the data
  const marriageLists = marriageListsData?.[0] || []; // Extract the first array (handle null gracefully)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const handleViewStory = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  const columns = [
    {
      title: (
        <div
          style={{ color: theme === "dark" ? "#fff" : "#000" }}
          className="bg-lime-600 p-2"
        >
          Self ID
        </div>
      ),
      dataIndex: "selfId",
      key: "selfId",
      align: "center",
    },
    {
      title: (
        <div
          style={{ color: theme === "dark" ? "#fff" : "#000" }}
          className="bg-indigo-900 p-2"
        >
          Partner ID
        </div>
      ),
      dataIndex: "partnerId",
      key: "partnerId",
      align: "center",
    },
    {
      title: (
        <div
          style={{ color: theme === "dark" ? "#fff" : "#000" }}
          className="bg-slate-500 p-2 text-center"
        >
          Action
        </div>
      ),
      key: "action",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center">
          <Button
            className={`${
              theme === "dark" ? "bg-indigo-800" : "bg-indigo-900"
            } text-white border-none hover:bg-indigo-700`}
            onClick={() => handleViewStory(record)}
          >
            View Story
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div
      className={`p-4 min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Helmet>
        <title>Perfect Pair || Success Story</title>
      </Helmet>

      <h1 className="text-2xl font-semibold mb-4">Success Stories</h1>

      {marriageLists.length > 0 ? (
        <Table
          columns={columns}
          dataSource={marriageLists.map((story) => ({
            ...story,
            key: story._id, // Use _id as the unique key
          }))}
          pagination={false} // Disable pagination
          className={theme === "dark" ? "bg-gray-800" : "bg-white"}
        />
      ) : (
        <p>No success stories available at the moment.</p>
      )}

      {/* Modal for viewing the story */}
      <Modal
        title="Success Story Details"
        open={isModalOpen}
        onCancel={handleModalClose}
        footer={[
          <Button
            key="close"
            onClick={handleModalClose}
            className={theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-200"}
          >
            Close
          </Button>,
        ]}
        className={theme === "dark" ? "bg-gray-800 text-white" : "bg-white"}
      >
        {selectedStory && (
          <div>
            <div className="mb-4">
              <img
                src={selectedStory.photo}
                alt="Story"
                className="w-full h-64 object-cover rounded"
              />
            </div>
            <p>
              <strong>Description:</strong> {selectedStory.description}
            </p>
            <p>
              <strong>Marriage Date:</strong>{" "}
              {new Date(selectedStory.mDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              <Rate disabled defaultValue={selectedStory.rating} />
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SuccessStory;
