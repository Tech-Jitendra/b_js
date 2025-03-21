import React from 'react';
import { Carousel, Card, Button, Row, Col, Typography } from 'antd';
import 'animate.css';
import "@/styles/page.scss"
import Image from 'next/image';

// const { Typography } = Card;

const Home: React.FC = () => {
  // export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section animate__animated animate__fadeIn">
        <h1 className="hero-title">Welcome to Our Store</h1>
        <p className="hero-subtitle">Find the best products for your needs</p>
        <Button type="primary" size="large">
          Shop Now
        </Button>
      </div>

      {/* Product Section */}
      <div className="product-section">
        <h1>Our Products</h1>
        <Row justify={"center"} gutter={[16, 16]}
        // style={{ backgroundColor: "red" }}
        >
          {[1, 1, 1, 2, 2, 2].map((item, index) => {
            return (
              <Col span={8} key={index}>
                <Card
                  hoverable
                  cover={
                    <div style={{ textAlign: 'center' }}>
                      <Image
                        alt="product1"
                        src="https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=600"
                        width={300}
                        height={200}
                      />
                    </div>
                  }
                >
                  <div>
                    <h3>Product 1</h3>
                    <p>$20.00</p>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>

      {/* Cart Carousel */}
      <div className="cart-carousel">
        <h2>Your Cart</h2>
        <Carousel autoplay>
          <div>
            <Card
              hoverable
              cover={
                <img
                  alt="cart1"
                  src="https://via.placeholder.com/300x200"
                />
              }
            >
              <Typography title="Cart Item 1" description="$10.00" />
            </Card>
          </div>
          <div>
            <Card
              hoverable
              cover={
                <img
                  alt="cart2"
                  src="https://via.placeholder.com/300x200"
                />
              }
            >
              <Typography title="Cart Item 2" description="$15.00" />
            </Card>
          </div>
        </Carousel>
      </div>

      {/* Reference Product Carousel */}
      <div className="reference-carousel">
        <h2>Recommended for You</h2>
        <Carousel autoplay>
          <div>
            <Card
              hoverable
              cover={
                <img
                  alt="reference1"
                  src="https://via.placeholder.com/300x200"
                />
              }
            >
              <Typography title="Reference Product 1" description="$25.00" />
            </Card>
          </div>
          <div>
            <Card
              hoverable
              cover={
                <img
                  alt="reference2"
                  src="https://via.placeholder.com/300x200"
                />
              }
            >
              <Typography title="Reference Product 2" description="$35.00" />
            </Card>
          </div>
        </Carousel>
      </div>

      {/* Recent Search Carousel */}
      <div className="recent-search-carousel">
        <h2>Recent Searches</h2>
        <Carousel autoplay>
          <div>
            <Card
              hoverable
              cover={
                <img
                  alt="search1"
                  src="https://via.placeholder.com/300x200"
                />
              }
            >
              <Typography title="Search Item 1" description="$50.00" />
            </Card>
          </div>
          <div>
            <Card
              hoverable
              cover={
                <img
                  alt="search2"
                  src="https://via.placeholder.com/300x200"
                />
              }
            >
              <Typography title="Search Item 2" description="$60.00" />
            </Card>
          </div>
        </Carousel>
      </div>

      {/* Categorized Filter Section */}
      <div className="categorized-filter">
        <h2>Shop by Category</h2>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="category1"
                  src="https://via.placeholder.com/150x100"
                />
              }
            >
              <Typography title="Category 1" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="category2"
                  src="https://via.placeholder.com/150x100"
                />
              }
            >
              <Typography title="Category 2" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="category3"
                  src="https://via.placeholder.com/150x100"
                />
              }
            >
              <Typography title="Category 3" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={
                <img
                  alt="category4"
                  src="https://via.placeholder.com/150x100"
                />
              }
            >
              <Typography title="Category 4" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;