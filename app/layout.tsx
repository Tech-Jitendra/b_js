"use client";
import { Provider } from 'react-redux';
import  store  from '@/redux/store';
import '@/styles/global.css';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </Provider>
  );
}
