"use client";
import { Layout } from "antd";
import { Provider } from 'react-redux';
import store from '@/redux/store';
import '@/styles/global.css';

import { ReactNode } from 'react';

const { Header, Content, Footer } = Layout;

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <Layout>
            <Header>Header Content</Header>
            <Content>{children}</Content>
            <Footer>Footer Content</Footer>
          </Layout>
        </body>
      </html>
    </Provider>
  );
}
