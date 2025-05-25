import React from 'react';
import { Button, Typography } from 'antd';
import { HomeOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './style.css';

const { Title, Text } = Typography;

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/dashboard/apps');
  };

  const goBack = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-purple-700 p-5">
      {/* 动态背景 */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <div className="absolute w-32 h-32 bg-white/10 rounded-full top-[5%] left-[5%] animate-pulse"></div>
          <div className="absolute w-24 h-24 bg-white/10 rounded-full top-[15%] right-[15%] animate-bounce delay-1000"></div>
          <div className="absolute w-20 h-20 bg-white/10 rounded-full bottom-[25%] left-[10%] animate-pulse delay-2000"></div>
          <div className="absolute w-28 h-28 bg-white/10 rounded-full bottom-[10%] right-[10%] animate-bounce delay-3000"></div>
          <div className="absolute w-16 h-16 bg-white/10 rounded-full top-1/3 left-1/4 animate-pulse delay-4000"></div>
          <div className="absolute w-12 h-12 bg-white/10 rounded-full top-2/3 right-1/3 animate-bounce delay-5000"></div>
        </div>
      </div>

      {/* 404 内容 */}
      <div className="text-center relative z-10 max-w-2xl mx-auto">
        {/* 404 数字 */}
        <div className="mb-8">
          <div className="text-9xl md:text-[12rem] font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-pulse select-none">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl animate-bounce delay-1000">
            🌌
          </div>
        </div>

        {/* 标题和描述 */}
        <div className="mb-12 space-y-4">
          <Title 
            level={1} 
            className="!text-white !mb-4 !font-bold text-3xl md:text-4xl animate-fade-in-up"
          >
            页面走丢了
          </Title>
          <Text className="text-white/80 text-lg md:text-xl block animate-fade-in-up delay-300">
            抱歉，您访问的页面似乎在宇宙中迷路了
          </Text>
          <Text className="text-white/60 text-base block animate-fade-in-up delay-500">
            但别担心，我们可以帮您找到回家的路
          </Text>
        </div>

        {/* 操作按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-700">
          <Button
            type="primary"
            size="large"
            icon={<HomeOutlined />}
            onClick={goHome}
            className="!bg-gradient-to-r !from-blue-500 !to-purple-600 !border-0 hover:!from-purple-600 hover:!to-blue-500 hover:!-translate-y-1 active:!translate-y-0 !transition-all !duration-300 !shadow-lg hover:!shadow-xl min-w-[140px]"
          >
            回到首页
          </Button>
          <Button
            size="large"
            icon={<ArrowLeftOutlined />}
            onClick={goBack}
            className="!bg-white/20 !border-white/30 !text-white hover:!bg-white/30 hover:!border-white/50 hover:!-translate-y-1 active:!translate-y-0 !transition-all !duration-300 !backdrop-blur-sm min-w-[140px]"
          >
            去登录
          </Button>
        </div>

        {/* 装饰性元素 */}
        <div className="mt-16 flex justify-center space-x-8 animate-fade-in-up delay-1000">
          <div className="text-4xl animate-bounce delay-1000">⭐</div>
          <div className="text-4xl animate-bounce delay-1500">🚀</div>
          <div className="text-4xl animate-bounce delay-2000">🌟</div>
        </div>

        {/* 提示文字 */}
        <div className="mt-8 animate-fade-in-up delay-1200">
          <Text className="text-white/50 text-sm">
            如果问题持续存在，请联系我们的技术支持
          </Text>
        </div>
      </div>
    </div>
  );
};

export default NotFound;