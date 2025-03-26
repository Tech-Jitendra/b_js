"use client";

import {
  BankOutlined,
  CreditCardOutlined,
  DollarCircleOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import {
  Table,
  Button,
  InputNumber,
  Card,
  Select,
  Input,
  Modal,
  Form,
  Radio,
  message,
} from "antd";
import Image from "next/image";
import { useState } from "react";
import "@/styles/cart.scss";
import "animate.css";

const { Option } = Select;

interface CartItem {
  key: string;
  image: string;
  name: string;
  category: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      key: "1",
      image: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg",
      name: "Floral Print Wrap Dress",
      category: "Women",
      color: "Blue",
      size: "42",
      price: 20.5,
      quantity: 2,
    },
    {
      key: "2",
      image:
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
      name: "Polka Dot Wrap Dress",
      category: "Women",
      color: "Blue",
      size: "42",
      price: 30.5,
      quantity: 1,
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("credit_card");

  const handleQuantityChange = (value: number, key: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, quantity: value } : item
      )
    );
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "image",
      render: (src: string, record: CartItem) => (
        <div
          className="animate__animated animate__zoomIn"
          style={{ display: "flex", alignItems: "center", gap: 10 }}
        >
          <Image
            src={src}
            alt={record.name}
            width={60}
            height={80}
            style={{ borderRadius: "5px" }}
          />
          <div>
            <strong>{record.name}</strong>
            <p style={{ margin: 0, fontSize: 12 }}>
              Color: {record.color} | Size: {record.size}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      render: (quantity: number, record: CartItem) => (
        <InputNumber
          min={1}
          defaultValue={quantity}
          className="animate__animated animate__shakeX"
          onChange={(value) => handleQuantityChange(value || 1, record.key)}
        />
      ),
    },
    {
      title: "Total Price",
      render: (_: any, record: CartItem) => (
        <span style={{ color: "#ffa500", fontWeight: "bold" }}>
          ${(record.price * record.quantity).toFixed(2)}
        </span>
      ),
    },
  ];

  const handleCheckout = () => {
    setIsModalVisible(true);
  };

  const handlePayment = () => {
    message.success(`Payment method: ${selectedPaymentMethod}`);
    setIsModalVisible(false);
  };

  return (
    <div
      className="cart-container"
      style={{
        display: "flex",
        gap: "2rem",
        padding: "2rem",
        flexWrap: "wrap",
      }}
    >
      {/* Left Side - Shopping Table */}
      <div style={{ flex: 2 }}>
        <h2 className="animate__animated animate__fadeInLeft">Shopping Bag</h2>
        <p className="animate__animated animate__fadeInLeft">
          <strong>{cartItems.length} items</strong> in your bag.
        </p>
        <Table
          columns={columns}
          dataSource={cartItems}
          pagination={false}
          bordered
        />
      </div>

      {/* Right Side - Summary */}
      <Card
        className="animate__animated animate__fadeInRight"
        style={{ maxWidth: 400, borderRadius: 10 }}
      >
        <h3>Calculated Shipping</h3>
        <Select
          placeholder="Country"
          style={{ width: "100%", marginBottom: 10 }}
        >
          <Option value="US">United States</Option>
          <Option value="IN">India</Option>
        </Select>
        <Select
          placeholder="State / City"
          style={{ width: "100%", marginBottom: 10 }}
        >
          <Option value="NY">New York</Option>
          <Option value="CA">California</Option>
        </Select>
        <Input placeholder="ZIP Code" style={{ marginBottom: 10 }} />
        <Button type="primary" block>
          Update
        </Button>

        <h3 style={{ marginTop: "1rem" }}>Coupon Code</h3>
        <Input placeholder="Enter Code" style={{ marginBottom: 10 }} />
        <Button block>Apply</Button>

        <h3
          style={{
            marginTop: "1rem",
            background: "#ffa500",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Cart Total
        </h3>
        <p>
          Subtotal: <strong>$71.50</strong>
        </p>
        <p>
          Discount: <strong style={{ color: "red" }}>- $4.00</strong>
        </p>
        <h2 style={{ color: "#ffa500" }}>$67.50</h2>
        <Button
          type="primary"
          block
          onClick={handleCheckout}
          className="animate__animated animate__pulse animate__infinite"
        >
          Checkout
        </Button>
      </Card>

      {/* Payment Modal */}
      <Modal
        title="Choose Your Payment Method"
        open={isModalVisible}
        onOk={handlePayment}
        onCancel={() => setIsModalVisible(false)}
        okText="Pay Now"
        cancelText="Cancel"
        className="payment-modal animate__animated animate__fadeInDown"
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

export default ShoppingCart;
