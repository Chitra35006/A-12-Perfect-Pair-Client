import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Row, Col, Slider, Select, Pagination } from "antd";
import useAllBioData from "../../hooks/useAllBioData";
import Section_Heading1 from "../Heading/Section_Heading1";
import BioDataCard from "./BioDataCard";

const { Option } = Select;

const BioData = () => {
  const [biodatas] = useAllBioData();
  const [filters, setFilters] = useState({
    ageRange: [18, 60],
    gender: "",
    permanentDivision: "",
  });
  const [filteredData, setFilteredData] = useState(biodatas);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9); // Number of items per page

  // Function to handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value, // Update the specific filter
    }));
  };

  // Effect to filter biodata when filters change
  useEffect(() => {
    const filtered = biodatas.filter((biodata) => {
      const matchesAge =
        biodata.userAge >= filters.ageRange[0] &&
        biodata.userAge <= filters.ageRange[1];
      const matchesGender =
        !filters.gender || biodata.gender === filters.gender;
      const matchesDivision =
        !filters.permanentDivision ||
        biodata.permanentDivision === filters.permanentDivision;

      return matchesAge && matchesGender && (!filters.permanentDivision || matchesDivision);
    });
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page when filters are applied
  }, [biodatas, filters]);

  // Calculate the paginated data
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  // Calculate the range of items being displayed
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, filteredData.length);

  return (
    <div className="w-full mx-auto bg-gray-50 p-4 my-10">
      <Helmet>
        <title>Perfect Pair | Biodata</title>
      </Helmet>
      <Section_Heading1 custom_class="mb-10" heading={"All Users Biodata"}></Section_Heading1>
      <Row gutter={[16, 16]}>
        {/* Filter Section on the Left (Fixed) */}
        <Col xs={24} md={6} style={{ position: "sticky", top: "20px" }}>
          <div
            style={{
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid #d3d3d3",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              backgroundColor: "#f9f9f9",
              height: "calc(100vh - 100px)",
              overflowY: "auto",
            }}
          >
            <h4>Filters</h4>
            <div style={{ marginBottom: "20px" }}>
              <label>Age Range:</label>
              <Slider
                range
                defaultValue={[18, 40]}
                min={18}
                max={60}
                onChange={(value) => handleFilterChange("ageRange", value)}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label>Gender:</label>
              <Select
                placeholder="Select Gender"
                style={{ width: "100%" }}
                onChange={(value) => handleFilterChange("gender", value)}
                allowClear
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            </div>
            <div>
              <label>Permanent Division:</label>
              <Select
                placeholder="Select Division"
                style={{ width: "100%" }}
                onChange={(value) => handleFilterChange("permanentDivision", value || "")}
                allowClear
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barishal">Barishal</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
              </Select>
            </div>
          </div>
        </Col>

        {/* Biodata Cards on the Right (Scrollable) */}
        <Col xs={24} md={18} style={{ height: "calc(100vh - 100px)", overflowY: "auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paginatedData.map((biodata, index) => (
              <BioDataCard key={biodata._id} biodata={biodata} idx={index} />
            ))}
          </div>
          {/* Pagination and Display Count */}
          <div className="flex justify-between items-center mt-6">
            <div>
              Showing {startItem}–{endItem} of {filteredData.length}
            </div>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={filteredData.length}
              showSizeChanger
              onChange={handlePageChange}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BioData;
