"use client";
import { Layout } from "antd";
import { Provider } from 'react-redux';
import store from '@/redux/store';
import '@/styles/global.css';

import { ReactNode } from 'react';
import AppHeader from "@/components/Header";
import Footer from "@/components/Footer";

const { Content } = Layout;

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
            <Layout>
            {!(window.location.pathname === '/login' || window.location.pathname === '/register') && <AppHeader />}
            <Content>{children}</Content>
            {!(window.location.pathname === '/login' || window.location.pathname === '/register') && <Footer />}
            </Layout>
        </body>
      </html>
    </Provider>
  );
}
