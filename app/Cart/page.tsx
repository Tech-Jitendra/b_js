"use client";

import React, { useState } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Typography,
  InputNumber,
  Modal,
  Radio,
  Form,
  message,
} from "antd";
import {
  CreditCardOutlined,
  WalletOutlined,
  BankOutlined,
  DollarCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "@/styles/cart.scss";

const { Title, Text } = Typography;

interface CartItem {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Product 1",
      image: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg",
      quantity: 1,
      price: 200,
    },
    {
      id: 2,
      name: "Product 2",
      image:
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
      quantity: 1,
      price: 150,
    },
    {
      id: 3,
      name: "Product 3",
      image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
      quantity: 1,
      price: 300,
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return message.error("Quantity cannot be less than 1");
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    message.success("Item removed from the cart!");
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-container">
      <Row gutter={[16, 16]}>
        {cartItems.map((item) => (
          <Col xs={24} sm={12} md={8} key={item.id}>
            <Card
              hoverable
              cover={
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
              }
            >
              <Title level={4}>{item.name}</Title>
              <Text>
                Price: <strong>₹{item.price}</strong>
              </Text>
              <div className="quantity-control">
                <Button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <InputNumber
                  value={item.quantity}
                  min={1}
                  onChange={(value) => updateQuantity(item.id, value || 1)}
                />
                <Button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
              </div>
              <Button
                danger
                icon={<DeleteOutlined />}
                block
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="price-summary-card">
        <Title level={3}>Price Summary</Title>
        <div className="price-details">
          <Text>
            Total Items: <strong>{totalItems}</strong>
          </Text>
          <Text>
            Total Price: <strong>₹{totalPrice}</strong>
          </Text>
        </div>
        <Button
          type="primary"
          block
          onClick={() => setIsModalVisible(true)}
          className="checkout-button"
        >
          Proceed to Checkout
        </Button>
      </Card>

      <Modal
        title="Choose Your Payment Method"
        visible={isModalVisible}
        onOk={() => message.success(`Payment method: ${selectedPaymentMethod}`)}
        onCancel={() => setIsModalVisible(false)}
        okText="Pay Now"
        cancelText="Cancel"
        className="payment-modal"
      >
        <Form>
          <Radio.Group
            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
            value={selectedPaymentMethod}
            className="payment-options"
          >
            <Radio value="credit_card" className="payment-option">
              <CreditCardOutlined /> Credit/Debit Card
            </Radio>
            <Radio value="upi" className="payment-option">
              <WalletOutlined /> UPI
            </Radio>
            <Radio value="net_banking" className="payment-option">
              <BankOutlined /> Net Banking
            </Radio>
            <Radio value="wallet" className="payment-option">
              <WalletOutlined /> Wallet
            </Radio>
            <Radio value="cod" className="payment-option">
              <DollarCircleOutlined /> Cash on Delivery
            </Radio>
          </Radio.Group>
        </Form>
      </Modal>
    </div>
  );
};

export default CartPage;
