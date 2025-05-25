import { theme } from 'antd';
import type { ThemeConfig } from 'antd';

// 主题色彩常量
export const THEME_COLORS = {
  primary: '#667eea',
  primaryHover: '#764ba2',
  primaryActive: '#5a67d8',
  success: '#48bb78',
  warning: '#ed8936',
  error: '#f56565',
  info: '#667eea',
} as const;

// 自定义主题配置
export const customTheme: ThemeConfig = {
  token: {
    // 主色调 - 使用蓝色作为主色
    colorPrimary: THEME_COLORS.primary,
    colorPrimaryHover: THEME_COLORS.primaryHover,
    colorPrimaryActive: THEME_COLORS.primaryActive,
    
    // 圆角设置
    borderRadius: 12,
    borderRadiusLG: 16,
    borderRadiusXS: 8,
    
    // 字体设置
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: 14,
    fontSizeLG: 16,
    fontSizeXL: 20,
    
    // 间距设置
    padding: 16,
    paddingLG: 24,
    paddingXS: 8,
    
    // 阴影设置
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.15)',
    boxShadowSecondary: '0 2px 8px rgba(102, 126, 234, 0.1)',
    
    // 边框设置
    lineWidth: 2,
    lineType: 'solid',
    colorBorder: '#e9ecef',
    colorBorderSecondary: '#f1f3f4',
    
    // 背景色设置
    colorBgContainer: 'rgba(255, 255, 255, 0.95)',
    colorBgElevated: 'rgba(255, 255, 255, 0.98)',
    colorBgLayout: '#f8fafc',
    
    // 文字颜色
    colorText: '#2d3748',
    colorTextSecondary: '#718096',
    colorTextTertiary: '#a0aec0',
    
    // 成功、警告、错误色彩
    colorSuccess: THEME_COLORS.success,
    colorWarning: THEME_COLORS.warning,
    colorError: THEME_COLORS.error,
    colorInfo: THEME_COLORS.info,
    
    // 控件高度
    controlHeight: 40,
    controlHeightLG: 48,
    controlHeightSM: 32,
  },
  components: {
    Button: {
      borderRadius: 12,
      controlHeight: 48,
      fontWeight: 600,
      primaryShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
    },
    Input: {
      borderRadius: 12,
      controlHeight: 48,
      activeBorderColor: THEME_COLORS.primary,
      hoverBorderColor: THEME_COLORS.primary,
      activeShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)',
    },
    Card: {
      borderRadius: 20,
      paddingLG: 32,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    },
    Form: {
      itemMarginBottom: 20,
      verticalLabelPadding: '0 0 8px',
    },
    Checkbox: {
      borderRadius: 4,
      colorPrimary: THEME_COLORS.primary,
    },
    Typography: {
      titleMarginBottom: '0.5em',
      titleMarginTop: '1.2em',
    },
    Message: {
      // 基础样式
      borderRadius: 16,
      
      // 背景和阴影
      colorBgElevated: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)',
      
      // 颜色配置
      colorSuccess: '#48bb78',
      colorError: '#f56565',
      colorWarning: '#ed8936',
      colorInfo: THEME_COLORS.primary,
      colorPrimary: THEME_COLORS.primary,
    },
    Notification: {
      // 通知组件也使用相同的酷炫样式
      borderRadius: 16,
      
      // 背景和阴影
      colorBgElevated: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 12px 40px rgba(102, 126, 234, 0.15), 0 6px 20px rgba(0, 0, 0, 0.1)',
    },
    Modal: {
      // 模态框也使用相同风格
      borderRadius: 20,
      boxShadow: '0 20px 60px rgba(102, 126, 234, 0.15), 0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    Drawer: {
      // 抽屉组件
      borderRadius: 20,
      boxShadow: '0 20px 60px rgba(102, 126, 234, 0.15), 0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    Popover: {
      // 气泡卡片
      borderRadius: 12,
      boxShadow: '0 8px 32px rgba(102, 126, 234, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)',
    },
    Tooltip: {
      // 工具提示
      borderRadius: 8,
      colorBgSpotlight: 'rgba(45, 55, 72, 0.9)',
    },
  },
  algorithm: theme.defaultAlgorithm,
};

export default customTheme; 