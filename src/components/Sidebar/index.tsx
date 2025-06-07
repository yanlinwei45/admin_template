import React, { useState } from 'react';
import { Menu, Layout } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import useMenuStore, { type MenuItem } from '@/store/menu';
import { permissionMenuList, getAsMenuList } from '@/router/menu';
import { Role, useAuthStore } from '@/store/auth';

const { Sider } = Layout;

interface SidebarProps {
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed = false, onCollapse }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { menuList } = useMenuStore();
  const { user } = useAuthStore();
  
  // 获取当前用户角色菜单
  const currentRole = user?.role || Role.GUEST; // 如果没有用户信息，默认为访客角色
  const userMenuList = getAsMenuList(permissionMenuList, currentRole);
  
  // 转换菜单数据为 Ant Design Menu 需要的格式
  const convertMenuItems = (items: (MenuItem | null)[]): any[] => {
    return items
      .filter(item => item !== null)
      .map(item => ({
        key: item!.path,
        icon: item!.icon,
        label: item!.name,
        children: item!.children ? convertMenuItems(item!.children) : undefined,
      }));
  };

  const menuItems = convertMenuItems(userMenuList);

  // 处理菜单点击
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  // 获取当前选中的菜单项
  const getSelectedKeys = () => {
    return [location.pathname];
  };

  // 获取当前展开的菜单项
  const getOpenKeys = () => {
    const pathArray = location.pathname.split('/').filter(Boolean);
    const openKeys: string[] = [];
    
    for (let i = 1; i <= pathArray.length; i++) {
      const path = '/' + pathArray.slice(0, i).join('/');
      openKeys.push(path);
    }
    
    return openKeys;
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={250}
      className="min-h-screen"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="h-16 bg-gray-900 flex items-center justify-center">
        <h1 className="text-white text-lg font-bold">
          {collapsed ? 'A' : 'Admin'}
        </h1>
      </div>
      
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={getSelectedKeys()}
        defaultOpenKeys={getOpenKeys()}
        items={menuItems}
        onClick={handleMenuClick}
        className="border-r-0"
      />
    </Sider>
  );
};

export default Sidebar; 