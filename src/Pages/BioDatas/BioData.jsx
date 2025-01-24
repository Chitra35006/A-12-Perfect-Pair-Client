import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Row, Col, Slider, Select } from "antd";
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

      // If no division is selected, filter only by age and gender
      return matchesAge && matchesGender && (!filters.permanentDivision || matchesDivision);
    });
    setFilteredData(filtered);
  }, [biodatas, filters]);

  return (
    <div className="w-full mx-auto bg-gray-50 p-4 my-10">
      <Helmet>
        <title>Perfect Pair | Biodata</title>
      </Helmet>
      <h2>Bio Data Page</h2>
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
              height: "calc(100vh - 100px)", // Take full height minus some space for header
              overflowY: "auto", // Allow scrolling within the filter section if content overflows
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
                onChange={(value) => handleFilterChange("permanentDivision", value || "")} // Reset to empty string when cleared
                allowClear
              >
                <Option value="Dhaka">Dhaka</Option>
                <Option value="Chittagong">Chittagong</Option>
                <Option value="Rangpur">Rangpur</Option>
                <Option value="Barishal">Barishal</Option>
              </Select>
            </div>
          </div>
        </Col>

        {/* Biodata Cards on the Right (Scrollable) */}
        <Col xs={24} md={18} style={{ height: "calc(100vh - 100px)", overflowY: "auto" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredData.map((biodata, index) => (
              <BioDataCard key={biodata._id} biodata={biodata} idx={index} />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BioData;
