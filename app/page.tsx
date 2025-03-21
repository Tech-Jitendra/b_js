import React from 'react';
import { Carousel, Card, Button, Row, Col, Typography } from 'antd';
import 'animate.css';
import "@/styles/page.scss"
import Image from 'next/image';
import '@ant-design/icons'


const Home: React.FC = () => {
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
        <Row justify={"center"} gutter={[16, 16]}>
          {[1, 1, 1, 2, 2, 2].map((item, index) => {
            return (
              <Col span={8} key={index}>
                <Card
                  hoverable
                  cover={
                    <div style={{ textAlign: 'center' }}>
                      <Image
                        alt="product1"
                        src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600"
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
        <Carousel autoplay infinite>
          {[1, 1, 1, 2, 2, 2].map((item, index) => (
            <div key={index}>
              <Row justify={"center"} gutter={[16, 16]}>
                {[1, 2, 3].map((_, innerIndex) => (
                  <Col span={8} key={innerIndex} >
                    <Card
                      hoverable
                      cover={
                        <div style={{ justifyContent: 'center', display: "flex" }}>
                          <Image
                            style={{ marginTop: "10px" }}
                            alt={`product${innerIndex + 1}`}
                            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"
                            width={300}
                            height={200}
                          />
                        </div>
                      }
                    >
                      <div>
                        <h3>Product {innerIndex + 1}</h3>
                        <p>$20.00</p>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Reference Product Carousel */}
      <div className="reference-carousel">
        <h2>Recommended for You</h2>
        <Carousel autoplay infinite>
          {[1, 1, 1, 2, 2, 2].map((item, index) => (
            <div key={index}>
              <Row justify={"center"} gutter={[16, 16]}>
                {[1, 2, 3].map((_, innerIndex) => (
                  <Col span={8} key={innerIndex} >
                    <Card
                      hoverable
                      cover={
                        <div style={{ justifyContent: 'center', display: "flex" }}>
                          <Image
                            style={{ marginTop: "10px" }}
                            alt={`product${innerIndex + 1}`}
                            src="https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=600"
                            width={300}
                            height={200}
                          />
                        </div>
                      }
                    >
                      <div>
                        <h3>Product {innerIndex + 1}</h3>
                        <p>$20.00</p>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Recent Search Carousel */}
      <div className="recent-search-carousel">
        <h2>Recent Searches</h2>
        <Carousel autoplay infinite>
          {[1, 1, 1, 2, 2, 2].map((item, index) => (
            <div key={index}>
              <Row justify={"center"} gutter={[16, 16]}>
                {[1, 2, 3].map((_, innerIndex) => (
                  <Col span={8} key={innerIndex} >
                    <Card
                      hoverable
                      cover={
                        <div style={{ justifyContent: 'center', display: "flex" }}>
                          <Image
                            style={{ marginTop: "10px" }}
                            alt={`product${innerIndex + 1}`}
                            src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=600"
                            width={300}
                            height={200}
                          />
                        </div>
                      }
                    >
                      <div>
                        <h3>Product {innerIndex + 1}</h3>
                        <p>$20.00</p>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
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
                  src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                  src="https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                  src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                  src="https://images.pexels.com/photos/2129970/pexels-photo-2129970.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              }
            >
              <p title="Category 4" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;