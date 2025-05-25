import '@/assets/index.css'
import router from '@/router';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider, App as AntdApp } from 'antd';
import { customTheme } from '@/config/theme';

const App: React.FC = () => {
  return (
    <ConfigProvider theme={customTheme}>
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  )
}

export default App;
