import React, { useState } from "react";
import { Table, Button, Modal, Rate } from "antd";
import { Helmet } from "react-helmet";
import useMarriageList from "../../../hooks/useMarriageList";

const SuccessStory = () => {
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
      title: <div className="bg-lime-600 text-white p-2">Self ID</div>,
      dataIndex: "selfId",
      key: "selfId",
      align:"center"
    },
    {
      title: <div className="bg-indigo-900 text-white p-2">Partner ID</div>,
      dataIndex: "partnerId",
      key: "partnerId",
       align:"center"
    },
    {
        title: <div className="bg-slate-500 text-white p-2 text-center">Action</div>,  // Center the header text
        key: "action",
        align: "center", // This centers the button inside the column
        render: (_, record) => (
          <div className="flex justify-center">
            <Button
              className="bg-indigo-900 text-white border-none hover:bg-indigo-800"
              onClick={() => handleViewStory(record)}
            >
              View Story
            </Button>
          </div>
        ),
      }
      
  ];
  

  return (
    <div>
      <Helmet>
        <title>Perfect Pair || Success Story</title>
      </Helmet>

      <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-semibold mb-4">Success Stories</h1>

        {marriageLists.length > 0 ? (
          <Table
            columns={columns}
            dataSource={marriageLists.map((story) => ({
              ...story,
              key: story._id, // Use _id as the unique key
            }))}
            pagination={false} // Disable pagination
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
            <Button key="close" onClick={handleModalClose}>
              Close
            </Button>,
          ]}
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
    </div>
  );
};

export default SuccessStory;
