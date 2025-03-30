"use client";
import "animate.css";
import "@/styles/login.scss";
import Confetti from "react-confetti";
import React, { useState, useEffect } from "react";
import { RootState } from "../../redux/store";
import { login } from "../../redux/slices/userSlice";
import { Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null);
  const [authMethod, setAuthMethod] = useState<"password" | "otp">("password");
  const [loginMethod, setLoginMethod] = useState<"email" | "mobile">("email");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Access window safely
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      // Set initial size
      handleResize();

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const onFinish = async (values: { mobile: string; email: string; password: string; otp: string }) => {
    try {
      // Simulate an API call
      if (
        (values.email === "test@example.com" || values.mobile === "1234567890") &&
        (values.password === "password" || values.otp === "123456")
      ) {
        const userData = {
          id: "1",
          name: "John Doe",
          email: values.email,
          mobile: values.mobile,
        };

        // Dispatch the login action
        dispatch(login(userData));
        message.success("Login successful!");
        setShowConfetti(true); // Trigger confetti
        setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error: any) {
      message.error(error.message || "Login failed!");
    }
  };

  return (
    <div className="login-page animate__animated animate__fadeIn">
      {/* Confetti Animation */}
      {showConfetti && windowSize && <Confetti width={windowSize.width} height={windowSize.height} />}

      <div className="login-container">
        <div className="logo">Trio Trendz</div>
        <h2 className="title">Login</h2>
        {isLoggedIn ? (
          <p>You are already logged in!</p>
        ) : (
          <Form
            name="login-form"
            layout="vertical"
            onFinish={onFinish}
            className="login-form"
          >
            {/* Dynamic Input for Email/Mobile */}
            <Form.Item
              label={loginMethod === "email" ? "Email" : "Mobile"}
              name="email"
              rules={[
                { required: true, message: `Please input your ${loginMethod}!` },
                ...(loginMethod === "email"
                  ? [{ type: "email" as const, message: "Please enter a valid email!" }]
                  : [{ pattern: /^\d{10}$/, message: "Please enter a valid mobile number!" }]),
              ]}
            >
              <Input
                placeholder={`Enter your ${loginMethod}`}
                type={loginMethod === "email" ? "email" : "text"}
              />
            </Form.Item>

            {/* Dynamic Input for Password or OTP */}
            <div
              className={`animate__animated ${
                authMethod === "password" ? "animate__fadeInLeft" : "animate__fadeInRight"
              }`}
            >
              <Form.Item
                label={authMethod === "password" ? "Password" : "OTP"}
                name="passwordOrOtp"
                rules={[
                  { required: true, message: `Please input your ${authMethod}!` },
                  ...(authMethod === "otp"
                    ? [{ pattern: /^\d{6}$/, message: "Please enter a valid 6-digit OTP!" }]
                    : []),
                ]}
              >
                <Input
                  placeholder={`Enter your ${authMethod}`}
                  type={authMethod === "password" ? "password" : "text"}
                />
              </Form.Item>
            </div>

            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button">
                Login
              </Button>
            </Form.Item>

            {/* Forgot Password and Switch Login Method */}
            <div className="login-options">
              {authMethod === "password" && (
                <Button
                  type="link"
                  onClick={() => message.info("Forgot Password clicked!")}
                >
                  Forgot Password?
                </Button>
              )}
              <Button
                type="link"
                onClick={() =>
                  setLoginMethod(loginMethod === "email" ? "mobile" : "email")
                }
              >
                Login with {loginMethod === "email" ? "Mobile" : "Email"}
              </Button>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;