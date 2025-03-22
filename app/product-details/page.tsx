"use client";

import React, { useState, useRef } from "react";
import {
  Carousel,
  Button,
  InputNumber,
  Row,
  Col,
  Typography,
  Space,
  Card,
  Rate,
} from "antd";

const { Title, Text } = Typography;

const ProductDetails: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const carouselRef = useRef<any>(null);

  const productName = "Stylish Sneakers";
  const productDescription =
    "High-quality sneakers with a stylish design, perfect for casual wear.";
  const productMaterial = "Made from premium leather and rubber sole.";
  const productOrigin = "Manufactured in Italy with precision craftsmanship.";
  const productWarranty = "Includes a 1-year manufacturer warranty.";
  const variants = ["Small", "Medium", "Large"];
  const images = [
    "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
    "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    "https://images.pexels.com/photos/9985921/pexels-photo-9985921.jpeg",
  ];
  const videos = ["https://www.pexels.com/download/video/856644/"];

  const handleQuantityChange = (value: number | null) => {
    if (value) {
      setQuantity(value);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <Row gutter={[24, 24]} justify="center" align="middle">
        <Col xs={24} md={12}>
          <Card
            bordered={false}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              position: "relative",
            }}
          >
            <Button
              type="text"
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                zIndex: 10,
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
              }}
              onClick={() => carouselRef.current?.prev()}
            >
              ◀
            </Button>
            <Carousel autoplay ref={carouselRef}>
              {images.map((image, index) => (
                <div key={`image-${index}`}>
                  <img
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "300px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              ))}
              {videos.map((video, index) => (
                <div key={`video-${index}`}>
                  <video
                    controls
                    style={{ width: "100%", borderRadius: "10px" }}
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </Carousel>
            <Button
              type="text"
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                zIndex: 10,
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
              }}
              onClick={() => carouselRef.current?.next()}
            >
              ▶
            </Button>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card
            bordered={false}
            style={{
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Title level={2}>{productName}</Title>
            <Text strong>{productDescription}</Text>
            <br />
            <Text strong>Material: {productMaterial}</Text>
            <br />
            <Text strong>Origin: {productOrigin}</Text>
            <br />
            <Text strong>Warranty: {productWarranty}</Text>
            <br />
            <Text strong style={{ display: "block", marginBottom: "10px" }}>
              Available Variants: {variants.join(", ")}
            </Text>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <div>
                <Text strong>Quantity:</Text>
                <InputNumber
                  min={1}
                  max={100}
                  value={quantity}
                  onChange={handleQuantityChange}
                  style={{ marginLeft: "10px", width: "80px" }}
                />
              </div>
              <Space>
                <Button
                  type="primary"
                  size="large"
                  style={{ borderRadius: "5px" }}
                  onClick={() => alert(`Added ${quantity} item(s) to cart`)}
                >
                  Add to Cart
                </Button>
                <Button
                  type="primary"
                  danger
                  size="large"
                  style={{ borderRadius: "5px" }}
                  onClick={() => alert(`Proceeding to buy ${quantity} item(s)`)}
                >
                  Buy Now
                </Button>
              </Space>
            </Space>
          </Card>
        </Col>
      </Row>

      {/* Rating and Review Card */}
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col xs={24} md={12}>
          <Card
            bordered={false}
            style={{
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <Title level={3}>Customer Reviews</Title>
            <Rate allowHalf defaultValue={4.5} style={{ fontSize: "24px" }} />
            <Text style={{ display: "block", marginTop: "10px" }}>
              4.5 out of 5 stars
            </Text>
            <Text style={{ display: "block", marginTop: "10px" }}>
              Based on 120 reviews
            </Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
