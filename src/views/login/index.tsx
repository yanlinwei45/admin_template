import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { UserOutlined, LockOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { getMenuList, login, type LoginForm } from '@/api/auth';
import { message } from '@/components/Message';
import { useAuthStore } from '@/store/auth';
import useMenuStore from '@/store/menu';

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: LoginForm) => {
    setLoading(true);
    try {
      const {
        role,
        token
      } = await login(values);
      useAuthStore.setState({
        token,
        user: {
          role
        }
      });
      message.success('登录成功！');
      // 获取菜单权限信息
      const menuList = await getMenuList(role);
      useMenuStore.setState({
        menuList
      });
      location.href = '/dashboard/apps';
    } catch (error) {
      console.log(error);
      message.error('登录失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-purple-700 p-5">
      {/* 动态背景 */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <div className="absolute w-20 h-20 bg-white/10 rounded-full top-[10%] left-[10%] animate-pulse"></div>
          <div className="absolute w-30 h-30 bg-white/10 rounded-full top-[20%] right-[10%] animate-bounce delay-1000"></div>
          <div className="absolute w-15 h-15 bg-white/10 rounded-full bottom-[20%] left-[20%] animate-pulse delay-2000"></div>
          <div className="absolute w-25 h-25 bg-white/10 rounded-full bottom-[10%] right-[20%] animate-bounce delay-3000"></div>
          <div className="absolute w-10 h-10 bg-white/10 rounded-full top-1/2 left-1/2 animate-pulse delay-4000"></div>
        </div>
      </div>

      {/* 登录卡片 */}
      <Card 
        className="w-full max-w-md relative z-10 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
        variant="borderless"
      >
        <div className="text-center mb-8">
          <div className="mb-5">
            <div className="text-5xl inline-block animate-pulse">🚀</div>
          </div>
          <Title 
            level={2} 
            className="!mb-2 !font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            欢迎回来
          </Title>
          <Text className="text-gray-500 text-sm">
            登录您的账户以继续精彩旅程
          </Text>
        </div>

        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          size="large"
          className="mt-5"
        >
          <Form.Item
            name="name"
            rules={[
              { required: true, message: '请输入用户名!' },
              { min: 3, message: '用户名至少3个字符!' }
            ]}
          >
            <Input
              prefix={<UserOutlined className="text-blue-500" />}
              placeholder="用户名或邮箱"
              className="transition-all duration-300"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: '请输入密码!' },
              { min: 6, message: '密码至少6个字符!' }
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-blue-500" />}
              placeholder="密码"
              className="transition-all duration-300"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-end items-center mb-5">
              <a 
                className="text-blue-500 text-sm hover:text-purple-600 transition-colors duration-300 no-underline" 
                href="#forgot"
              >
                忘记密码？
              </a>
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              className="!bg-gradient-to-r !from-blue-500 !to-purple-600 !border-0 hover:!from-purple-600 hover:!to-blue-500 hover:!-translate-y-0.5 active:!translate-y-0 !transition-all !duration-300"
            >
              {loading ? '登录中...' : '登录'}
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center text-gray-500 text-sm mt-8">
          <Text>还没有账户？</Text>
          <a 
            href="#register" 
            className="text-blue-500 font-semibold ml-2 hover:text-purple-600 transition-colors duration-300 no-underline"
          >
            立即注册
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Login;