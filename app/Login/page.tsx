"use client";
import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/userSlice';
import { RootState } from '../../redux/store';
import 'animate.css';
import "@/styles/login.scss";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      // Simulate an API call
      if (values.email === 'test@example.com' && values.password === 'password') {
        const userData = {
          id: '1',
          name: 'John Doe',
          email: values.email,
        };

        // Dispatch the login action
        dispatch(login(userData));
        message.success('Login successful!');
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error: any) {
      message.error(error.message || 'Login failed!');
    }
  };

  return (
    <div className="login-page animate__animated animate__fadeIn">
      {/* Floating Gifts */}
      <div className="floating-gift"></div>
      <div className="floating-gift"></div>
      <div className="floating-gift"></div>
      <div className="floating-gift"></div>

      <div className="login-container">
        <div className="logo">
            {/* <h1> */}
                Trio Trendz

            {/* </h1> */}
        </div>
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
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button">
                Login
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;