"use client";
import { Layout } from "antd";
import { Provider } from "react-redux";
import store from "@/redux/store";
import "@/styles/global.css";

import { ReactNode, useEffect, useState } from "react";
import AppHeader from "@/components/Header";
import Footer from "@/components/Footer";
import '@ant-design/v5-patch-for-react-19'; //Import the compatibility package at the application entry

const { Content } = Layout;

export default function AppLayout({ children }: { children: ReactNode }) {
  const [isAuthPage, setIsAuthPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if the current path is '/login' or '/register'
      const path = window.location.pathname;
      setIsAuthPage(path === "/login" || path === "/register");
    }
  }, []);

  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <Layout>
            {/* Conditionally render the header and footer */}
            {!isAuthPage && <AppHeader />}
            <Content>{children}</Content>
            {!isAuthPage && <Footer />}
          </Layout>
        </body>
      </html>
    </Provider>
  );
}