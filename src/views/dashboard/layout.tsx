import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { Layout } from 'antd';
import Sidebar from '@/components/Sidebar';

const { Header, Content } = Layout;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} onCollapse={onCollapse} />
      
      <Layout style={{ marginLeft: collapsed ? 80 : 250, transition: 'margin-left 0.2s' }}>
        <Header 
          style={{ 
            padding: '0 24px', 
            background: '#fff',
            boxShadow: '0 1px 4px rgba(0,21,41,.08)',
            zIndex: 1,
            position: 'sticky',
            top: 0
          }}
        >
          <div className="flex items-center justify-between h-full">
            <div className="text-lg font-semibold">Dashboard</div>
            <div className="flex items-center space-x-4">
              {/* 这里可以添加用户头像、通知等 */}
              <span className="text-gray-600">Welcome Admin</span>
            </div>
          </div>
        </Header>
        
        <Content style={{ margin: '24px', padding: '24px', background: '#fff', borderRadius: '8px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;