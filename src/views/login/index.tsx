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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-5">
      {/* 雾蓝色渐变背景 */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #F8FAFE 0%, #E8F2FD 30%, #D1E5FB 60%, #B3C6E7 100%)'
        }}
      />

      {/* 动态波浪背景 */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(179, 198, 231, 0.3)" />
              <stop offset="50%" stopColor="rgba(143, 168, 211, 0.4)" />
              <stop offset="100%" stopColor="rgba(107, 138, 191, 0.3)" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(107, 138, 191, 0.2)" />
              <stop offset="50%" stopColor="rgba(74, 107, 154, 0.3)" />
              <stop offset="100%" stopColor="rgba(44, 74, 115, 0.2)" />
            </linearGradient>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(143, 168, 211, 0.15)" />
              <stop offset="50%" stopColor="rgba(179, 198, 231, 0.25)" />
              <stop offset="100%" stopColor="rgba(107, 138, 191, 0.15)" />
            </linearGradient>
          </defs>
          
          {/* 第一层波浪 */}
          <path 
            fill="url(#wave1)" 
            d="M0,400 C300,300 600,500 900,400 C1050,350 1150,450 1200,400 L1200,800 L0,800 Z"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 50,0; 0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* 第二层波浪 */}
          <path 
            fill="url(#wave2)" 
            d="M0,500 C300,450 600,600 900,500 C1050,450 1150,550 1200,500 L1200,800 L0,800 Z"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -30,0; 0,0"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* 第三层波浪 */}
          <path 
            fill="url(#wave3)" 
            d="M0,600 C300,550 600,700 900,600 C1050,550 1150,650 1200,600 L1200,800 L0,800 Z"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 40,0; 0,0"
              dur="25s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* 浮动几何图形 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* 六边形 */}
        <div 
          className="absolute w-16 h-16 top-[15%] left-[5%] opacity-30"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            backgroundColor: 'rgba(179, 198, 231, 0.4)',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        
        {/* 三角形 */}
        <div 
          className="absolute w-12 h-12 top-[25%] right-[8%] opacity-40"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            backgroundColor: 'rgba(107, 138, 191, 0.5)',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />
        
        {/* 菱形 */}
        <div 
          className="absolute w-14 h-14 bottom-[30%] left-[10%] opacity-35"
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            backgroundColor: 'rgba(143, 168, 211, 0.4)',
            animation: 'float 10s ease-in-out infinite'
          }}
        />
        
        {/* 圆环 */}
        <div 
          className="absolute w-20 h-20 top-[40%] right-[15%] opacity-25 rounded-full border-4"
          style={{
            borderColor: 'rgba(74, 107, 154, 0.4)',
            animation: 'rotate 15s linear infinite'
          }}
        />
        
        {/* 小圆点 */}
        <div 
          className="absolute w-8 h-8 top-[60%] left-[80%] opacity-40 rounded-full"
          style={{
            backgroundColor: 'rgba(179, 198, 231, 0.6)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
        
        {/* 小方块 */}
        <div 
          className="absolute w-10 h-10 bottom-[15%] right-[25%] opacity-30"
          style={{
            backgroundColor: 'rgba(107, 138, 191, 0.4)',
            borderRadius: '2px',
            animation: 'float 7s ease-in-out infinite reverse'
          }}
        />
      </div>

      {/* 粒子效果 */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              backgroundColor: 'rgba(179, 198, 231, 0.8)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle${i % 3 + 1} ${8 + Math.random() * 4}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      {/* 雾蓝色登录卡片 */}
      <Card 
        className="w-full max-w-md relative z-10 backdrop-blur-xl transition-all duration-300"
        variant="borderless"
        style={{
          backgroundColor: 'rgba(248, 250, 254, 0.9)',
          boxShadow: '0 25px 60px rgba(107, 138, 191, 0.3), 0 12px 30px rgba(107, 138, 191, 0.2)',
          border: '1px solid rgba(179, 198, 231, 0.4)',
          borderRadius: '20px'
        }}
      >
        <div className="text-center mb-8">
          <div className="mb-5">
            <div 
              className="text-5xl inline-block"
              style={{
                animation: 'gentle-bounce 3s ease-in-out infinite'
              }}
            >
              ✨
            </div>
          </div>
          <Title 
            level={2} 
            className="!mb-2 !font-bold"
            style={{
              background: 'linear-gradient(135deg, #6B8ABF 0%, #4A6B9A 50%, #2C4A73 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            欢迎回来
          </Title>
          <Text style={{ color: '#667085' }} className="text-sm">
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
            name="username"
            rules={[
              { required: true, message: '请输入用户名!' },
              { min: 3, message: '用户名至少3个字符!' }
            ]}
          >
            <Input
              prefix={<UserOutlined style={{ color: '#B3C6E7' }} />}
              placeholder="用户名或邮箱"
              className="transition-all duration-300"
              style={{
                borderColor: '#D1E5FB',
                backgroundColor: 'rgba(248, 250, 254, 0.8)',
                borderRadius: '12px'
              }}
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
              prefix={<LockOutlined style={{ color: '#B3C6E7' }} />}
              placeholder="密码"
              className="transition-all duration-300"
              style={{
                borderColor: '#D1E5FB',
                backgroundColor: 'rgba(248, 250, 254, 0.8)',
                borderRadius: '12px'
              }}
              iconRender={(visible) => (
                visible ? 
                <EyeTwoTone twoToneColor={['#B3C6E7', '#8FA8D3']} /> : 
                <EyeInvisibleOutlined style={{ color: '#B3C6E7' }} />
              )}
            />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-end items-center mb-5">
              <a 
                className="text-sm transition-colors duration-300 no-underline" 
                href="#forgot"
                style={{ 
                  color: '#6B8ABF',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#4A6B9A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#6B8ABF';
                }}
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
              className="!border-0 hover:!-translate-y-1 active:!translate-y-0 !transition-all !duration-300"
              style={{
                background: 'linear-gradient(135deg, #B3C6E7 0%, #8FA8D3 50%, #6B8ABF 100%)',
                boxShadow: '0 6px 20px rgba(179, 198, 231, 0.4)',
                height: '50px',
                borderRadius: '12px',
                fontWeight: 600
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #8FA8D3 0%, #6B8ABF 50%, #4A6B9A 100%)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(179, 198, 231, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #B3C6E7 0%, #8FA8D3 50%, #6B8ABF 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(179, 198, 231, 0.4)';
              }}
            >
              {loading ? '登录中...' : '登录'}
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center text-sm mt-8">
          <Text style={{ color: '#667085' }}>还没有账户？</Text>
          <a 
            href="#register" 
            className="font-semibold ml-2 transition-colors duration-300 no-underline"
            style={{ 
              color: '#6B8ABF',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#4A6B9A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#6B8ABF';
            }}
          >
            立即注册
          </a>
        </div>
      </Card>

      {/* CSS 动画样式 */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.4; }
            50% { transform: scale(1.2); opacity: 0.8; }
          }
          
          @keyframes gentle-bounce {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          
          @keyframes particle1 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
            25% { transform: translateY(-15px) translateX(10px); opacity: 0.8; }
            50% { transform: translateY(-30px) translateX(-5px); opacity: 0.4; }
            75% { transform: translateY(-15px) translateX(-10px); opacity: 0.6; }
          }
          
          @keyframes particle2 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
            33% { transform: translateY(-20px) translateX(-8px); opacity: 0.7; }
            66% { transform: translateY(-10px) translateX(15px); opacity: 0.5; }
          }
          
          @keyframes particle3 {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
            40% { transform: translateY(-25px) translateX(12px); opacity: 0.9; }
            80% { transform: translateY(-5px) translateX(-7px); opacity: 0.4; }
          }
        `
      }} />
    </div>
  );
};

export default Login;