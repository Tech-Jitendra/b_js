import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "antd";
import "animate.css";
import "@/styles/about.scss";

const features = [
  {
    title: "Product Listings",
    description:
      "Detailed product descriptions, high-quality images, and advanced filters for effortless navigation.",
    image:
      "https://images.pexels.com/photos/6850549/pexels-photo-6850549.jpeg?auto=compress&cs=tinysrgb&w=600",
    animation: "animate__zoomIn",
  },
  {
    title: "Shopping Cart",
    description:
      "Easy-to-use virtual shopping cart with a secure checkout process and multiple payment options.",
    image:
      "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=600",
    animation: "animate__zoomIn",
  },
  {
    title: "User Profiles",
    description:
      "Manage orders, track shipments, and enjoy a personalized shopping experience with wishlists and order history.",
    image:
      "https://images.pexels.com/photos/7552562/pexels-photo-7552562.jpeg?auto=compress&cs=tinysrgb&w=600",
    animation: "animate__zoomIn",
  },
];

const benefits = [
  { title: "Convenience", description: "Shop from anywhere, anytime.", animation: "animate__fadeInLeft" },
  { title: "Variety", description: "Access a wide range of products.", animation: "animate__fadeInLeft" },
  { title: "Competitive Prices", description: "Enjoy frequent discounts and offers.", animation: "animate__fadeInRight" },
  { title: "Scalability", description: "Businesses can expand their reach globally.", animation: "animate__fadeInRight" },
];

const AboutPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this code only runs on the client
    setIsClient(true);
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section animate__animated animate__fadeIn">
        <h1 className="hero-title">About TrioTrendz</h1>
        <p className="hero-subtitle">
          TrioTrendz is an innovative e-commerce platform designed to provide a seamless shopping experience for customers and a robust marketplace for businesses.
        </p>
        <Button type="primary" size="large" className="hero-button">
          Learn More
        </Button>
      </div>

      {/* Key Features Section */}
      <div className="features-section">
        <h2 className="section-title">Key Features of TrioTrendz</h2>
        <Row gutter={[16, 16]} justify="center">
          {features.map((feature, index) => (
            <Col span={8} key={index}>
              <Card
                hoverable
                className={`feature-card animate__animated ${isClient ? feature.animation : ""}`}
                cover={<img alt={feature.title} src={feature.image} className="feature-image" />}
              >
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <h2 className="section-title">Benefits of TrioTrendz</h2>
        <Row gutter={[16, 16]} justify="center">
          {benefits.map((benefit, index) => (
            <Col span={6} key={index}>
              <Card hoverable className={`benefit-card animate__animated ${isClient ? benefit.animation : ""}`}>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Call to Action */}
      <div className="cta-section animate__animated animate__fadeInUp">
        <h2 className="cta-title">Ready to Explore TrioTrendz?</h2>
        <Button type="primary" size="large" className="cta-button">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default AboutPage;