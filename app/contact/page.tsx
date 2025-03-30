"use client"; // Ensure this is a Client Component

import React from "react";
import {
  Row,
  Col,
  Typography,
  Input,
  Button,
  Form,
  Card,
  message,
} from "antd";

const { Title, Text } = Typography;
const { TextArea } = Input;

const ContactPage: React.FC = () => {
  const handleSubmit = (values: any) => {
    message.success("Your message has been sent successfully!");
  };

  const handleFailedSubmission = () => {
    message.error("Please complete the form properly before submitting.");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>
      <Card
        bordered={false}
        style={{
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Title level={3} style={{ textAlign: "center" }}>
          Contact Us
        </Title>
        <Text
          type="secondary"
          style={{
            textAlign: "center",
            display: "block",
            marginBottom: "20px",
          }}
        >
          We would love to hear from you. Please fill out the form below to get
          in touch or visit us at our location in Haldwani.
        </Text>

        {/* Contact Form */}
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={12}>
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              onFinishFailed={handleFailedSubmission}
            >
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Please enter your full name!" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Please enter a valid email address!" },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: "Please enter a subject!" }]}
              >
                <Input placeholder="Enter the subject" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: "Please enter your message!" }]}
              >
                <TextArea rows={4} placeholder="Enter your message" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%", borderRadius: "5px" }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>

        {/* Map Section */}
        <Row justify="center" style={{ marginTop: "20px" }}>
          <Col span={24}>
            <Title level={3} style={{ textAlign: "center" }}>
              Visit Us
            </Title>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13891.581725865348!2d79.51561668875128!3d29.220269781243857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a5787b6c2cfb7%3A0x6a8ab5093be01b95!2sHaldwani%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1611234567890!5m2!1sen!2sin"
              style={{
                width: "100%",
                height: "300px",
                border: "0",
                borderRadius: "10px",
              }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ContactPage;