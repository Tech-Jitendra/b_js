"use client";

import React, { useRef } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Card,
  Carousel,
  Space,
  Rate,
  Divider,
  List,
  Avatar,
  message,
} from "antd";
import { useWindowSize } from "react-use";

const { Title, Text } = Typography;

const ProductPage: React.FC = () => {
  const carouselRef = useRef<any>(null);
  const { width } = useWindowSize(); // Get the window width

  const product = {
    name: "Steelbird SBA-1 Angry Dog Helmet",
    price: 2099,
    originalPrice: 4199,
    discount: 50,
    images: [
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    ],
    videos: [
      "https://www.pexels.com/video/856644/download/",
      "https://www.pexels.com/video/1526908/download/",
    ],
    rating: 4.2,
    reviews: 87,
    stock: 5,
    features: [
      "Free delivery by Friday, 28 March",
      "Pay on delivery available",
      "7 days return policy",
      "1 year warranty",
    ],
  };

  const similarProducts = [
    {
      name: "Vega Full Face Helmet",
      price: 1799,
      image:
        "https://images.pexels.com/photos/2055550/pexels-photo-2055550.jpeg",
    },
    {
      name: "Royal Enfield Open Face Helmet",
      price: 2499,
      image:
        "https://images.pexels.com/photos/2437293/pexels-photo-2437293.jpeg",
    },
    {
      name: "MT Thunder 3 Helmet",
      price: 3999,
      image:
        "https://images.pexels.com/photos/2437293/pexels-photo-2437293.jpeg",
    },
    {
      name: "LS2 FF320 Full Face Helmet",
      price: 4299,
      image:
        "https://images.pexels.com/photos/2055550/pexels-photo-2055550.jpeg",
    },
    {
      name: "Studds Ninja Elite",
      price: 1499,
      image:
        "https://images.pexels.com/photos/2437293/pexels-photo-2437293.jpeg",
    },
    {
      name: "Axor Apex Helmet",
      price: 4899,
      image:
        "https://images.pexels.com/photos/2055550/pexels-photo-2055550.jpeg",
    },
  ];

  const comments = [
    {
      user: "John Doe",
      avatar: "https://joeschmoe.io/api/v1/john",
      rating: 4,
      comment: "Great helmet with a stylish design. Fits perfectly!",
    },
    {
      user: "Jane Smith",
      avatar: "https://joeschmoe.io/api/v1/jane",
      rating: 5,
      comment: "Super comfortable and durable. Highly recommended!",
    },
    {
      user: "Mike Brown",
      avatar: "https://joeschmoe.io/api/v1/mike",
      rating: 3,
      comment: "Decent quality for the price, but could improve padding.",
    },
  ];

  const handleAddToCart = () => {
    // Add to cart logic (can store data in global state or local storage)
    message.success("Added to cart");
    // Redirect to cart page
    if (typeof window !== "undefined") {
      window.location.href = "/cart";
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <Row gutter={[24, 24]} justify="center">
        {/* Product Details */}
        <Col>
          <Card
            bordered={false}
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              position: "relative",
            }}
          >
            <Row>
              <Col md={12}>
                <Carousel autoplay ref={carouselRef}>
                  {product.images.map((src, index) => (
                    <div key={`image-${index}`}>
                      <img
                        src={src}
                        alt={`Product ${index + 1}`}
                        style={{
                          width: "100%",
                          height: width < 768 ? "200px" : "300px", // Adjust height based on screen width
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                  ))}
                  {product.videos.map((videoSrc, index) => (
                    <div key={`video-${index}`}>
                      <video
                        controls
                        style={{
                          width: "100%",
                          height: width < 768 ? "200px" : "300px", // Adjust height based on screen width
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </Carousel>
              </Col>
              <Col md={12}>
                <div style={{ padding: "20px" }}>
                  <Title level={3}>{product.name}</Title>
                  <Rate
                    allowHalf
                    defaultValue={product.rating}
                    style={{ fontSize: "20px" }}
                  />
                  <Text style={{ display: "block", marginTop: "10px" }}>
                    {product.rating} out of 5 stars | {product.reviews} reviews
                  </Text>
                  <Divider />
                  <Title level={4}>
                    ₹{product.price}{" "}
                    <Text delete>₹{product.originalPrice}</Text>{" "}
                    <Text type="danger">-{product.discount}%</Text>
                  </Title>
                  <Text
                    strong
                    style={{ display: "block", marginBottom: "20px" }}
                  >
                    Inclusive of all taxes
                  </Text>
                  <Divider />
                  <Text
                    style={{
                      display: "block",
                      color: "red",
                      marginBottom: "10px",
                    }}
                  >
                    Hurry! Only {product.stock} left in stock.
                  </Text>
                  <Space
                    direction="vertical"
                    size="middle"
                    style={{ width: "100%" }}
                  >
                    {product.features.map((feature, index) => (
                      <Text key={index}>{feature}</Text>
                    ))}
                    <Button
                      type="primary"
                      style={{ borderRadius: "5px" }}
                      block
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      type="primary"
                      danger
                      style={{ borderRadius: "5px" }}
                      block
                    >
                      Buy Now
                    </Button>
                  </Space>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;