"use client";
import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { register } from "@/redux/slices/userSlice"; // Create a register action in your slice
import "animate.css";
import "@/styles/register.scss";

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const [registerMethod, setRegisterMethod] = useState<"email" | "mobile">("email");

  const onFinish = async (values: {
    name: string;
    emailOrMobile: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      // Validate password and confirm password
      if (values.password !== values.confirmPassword) {
        throw new Error("Passwords do not match!");
      }

      // Split emailOrMobile into email and mobile based on the selected method
      const userData = {
        id: "2",
        name: values.name,
        email: registerMethod === "email" ? values.emailOrMobile : "",
        mobile: registerMethod === "mobile" ? values.emailOrMobile : "",
      };

      // Dispatch the register action
      dispatch(register(userData));
      message.success("Registration successful!");
    } catch (error: any) {
      message.error(error.message || "Registration failed!");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Left Column */}
        <div className="register-left">
          <div className="logo">Trio Trendz</div>
          <h2 className="title">Sign Up</h2>
          <Form
            name="register-form"
            layout="vertical"
            onFinish={onFinish}
            className="register-form"
          >
            {/* Name Input */}
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            {/* Dynamic Input for Email/Mobile */}
            <Form.Item
              label={registerMethod === "email" ? "Email" : "Mobile"}
              name="emailOrMobile"
              rules={[
                { required: true, message: `Please input your ${registerMethod}!` },
                ...(registerMethod === "email"
                  ? [{ type: "email" as const, message: "Please enter a valid email!" }]
                  : [{ pattern: /^\d{10}$/, message: "Please enter a valid mobile number!" }]),
              ]}
            >
              <Input
                placeholder={`Enter your ${registerMethod}`}
                type={registerMethod === "email" ? "email" : "text"}
              />
            </Form.Item>

            {/* Password Input */}
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 6, message: "Password must be at least 6 characters long!" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            {/* Confirm Password Input */}
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your password!" },
                { min: 6, message: "Password must be at least 6 characters long!" },
              ]}
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="register-button">
                Register
              </Button>
            </Form.Item>

            {/* Switch Registration Method */}
            <div className="register-options">
              <Button
                type="link"
                onClick={() =>
                  setRegisterMethod(registerMethod === "email" ? "mobile" : "email")
                }
              >
                Register with {registerMethod === "email" ? "Mobile" : "Email"}
              </Button>
            </div>
          </Form>
        </div>

        {/* Right Column */}
        <div className="register-right">
          <img
            src="/assets/register-illustration.svg"
            alt="Register Illustration"
            className="register-image"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;