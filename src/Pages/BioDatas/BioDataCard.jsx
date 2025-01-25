import React from 'react';
import { Card, Row, Col, Button } from "antd";
import { UserOutlined, SmileOutlined, SolutionOutlined, EnvironmentOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
const BioDataCard = ({biodata,idx}) => {
    const{name,id,gender,_id,permanentDivision,userAge,occupation,photo} = biodata;
      // Define a repeating set of gradient colors
      const gradientColors = [
        "linear-gradient(to bottom, #b2ebf2, #e0f7fa)", // Darker Cyan to Light Cyan
        "linear-gradient(to bottom, #f8bbd0, #fce4ec)", // Darker Pink to Light Pink
        "linear-gradient(to bottom, #ce93d8, #f3e5f5)", // Darker Purple to Light Purple
        "linear-gradient(to bottom, #b39ddb, #ede7f6)", // Darker Indigo to Light Indigo
        "linear-gradient(to bottom, #a5d6a7, #e8f5e9)", // Darker Green to Light Green
        "linear-gradient(to bottom, #fff59d, #fffde7)", // Deeper Yellow to Pale Yellow
        "linear-gradient(to bottom, #dce775, #f1f8e9)", // Deeper Lime to Pale Lime
        "linear-gradient(to bottom, #90caf9, #e3f2fd)", // Darker Blue to Light Blue
      ];
      const borderColors = [
        "#00acc1", // Cyan
        "#ec407a", // Pink
        "#ab47bc", // Purple
        "#7e57c2", // Indigo
        "#ffab91", // Green 
      ];
    return (
        <Card
        style={{
          width: "100%",
          maxWidth: 400,
          margin: "auto",
          borderRadius: "12px",
          borderTopLeftRadius: "16px", // Top-left corner rounded
          borderBottomLeftRadius: "16px", // Bottom-left corner rounded
          borderBottom: `4px solid ${borderColors[idx % borderColors.length]}`,// Dynamic border color
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          background: gradientColors[idx % gradientColors.length], // Dynamic background
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
        cover={
          <div style={{ position: "relative" }}>
            <img
              alt={name}
              src={photo}
              style={{
                height: 200,
                width: "100%",
                objectFit: "cover",
                borderRadius: "12px 12px 0 0",
              }}
            />
            {/* Floating ID Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "white",
                padding: "4px 8px",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              ID: {id}
            </div>
          </div>
        }
      >
        <h3 style={{ textAlign: "left", fontWeight: "bold", color: "#00796b " }}>{name}</h3>
        <Row gutter={[16, 8]} justify="center mb-4">
        <Col span={12}>
    <p style={{ margin: 0 }}>
      <UserOutlined style={{ color: "#1890ff" }} /> <strong>Gender:</strong> {gender}
    </p>
  </Col>
  <Col span={12}>
    <p style={{ margin: 0 }}>
      <SmileOutlined style={{ color: "#1e8449" }} /> <strong>Age:</strong> {userAge}
    </p>
  </Col>
          <Col span={24}>
            <p style={{ margin: 0 }}>
              <SolutionOutlined style={{ color: "#fa8c16" }} /> <strong>Occupation:</strong> {occupation}
            </p>
            
          </Col>
          <Col span={24}>
          <p style={{ margin: 0 }}>
              <EnvironmentOutlined style={{ color: "#ff4d4f" }} /> <strong>Permanent Division:</strong>{" "}
              {permanentDivision}
            </p>
            
          </Col>
        </Row>
        <div style={{ textAlign: "right", marginTop: "auto" }}>
          <Link to={`/allBiodataDetails/${_id}`}>
            <Button
              type="primary"
              icon={<ArrowRightOutlined />}
              style={{
                borderRadius: "4px",
                backgroundColor: "#388e3c", // Default dark green
                borderColor: "#66bb6a", // Default vibrant green
                color: "#ffffff", // Default text color
                fontWeight: "bold", // Bold font
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundImage =
                  "linear-gradient(to right, #00796b, #00897b, #00897b)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "#2e7d32";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundImage = "none";
                e.currentTarget.style.backgroundColor = "#388e3c";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "#66bb6a";
              }}
            >
              View Profile
            </Button>
          </Link>
        </div>
      </Card>
    );
};

export default BioDataCard;