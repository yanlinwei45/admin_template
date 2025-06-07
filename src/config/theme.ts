import { theme } from 'antd';
import type { ThemeConfig } from 'antd';

// 🌫️ 雾蓝色高级主题色彩系统
export const THEME_COLORS = {
  // 雾蓝色主色调系统
  mistBlue50: '#F8FAFE',     // 极浅雾蓝 - 背景色
  mistBlue100: '#E8F2FD',    // 浅雾蓝 - 悬停背景
  mistBlue200: '#D1E5FB',    // 淡雾蓝 - 边框色
  mistBlue300: '#B3C6E7',    // 雾蓝色 - 主题色
  mistBlue400: '#8FA8D3',    // 中雾蓝 - 悬停色
  mistBlue500: '#6B8ABF',    // 深雾蓝 - 激活色
  mistBlue600: '#4A6B9A',    // 深蓝 - 强调色
  mistBlue700: '#2C4A73',    // 深海蓝 - 标题色
  mistBlue800: '#1B2F4D',    // 极深蓝 - 文字色
  
  // 配套中性色系 - 与雾蓝协调的灰色
  neutral50: '#FAFBFC',      // 纯净白
  neutral100: '#F4F6F8',     // 浅灰
  neutral200: '#E4E7EC',     // 边框灰
  neutral300: '#D0D5DD',     // 分割线灰
  neutral400: '#98A2B3',     // 次要文字
  neutral500: '#667085',     // 正文灰
  neutral600: '#475467',     // 深文字
  neutral700: '#344054',     // 标题灰
  neutral800: '#1D2939',     // 主文字
  neutral900: '#101828',     // 最深文字
  
  // 状态色彩 - 与雾蓝协调的功能色
  success: '#10B981',        // 翡翠绿
  warning: '#F59E0B',        // 琥珀橙
  error: '#EF4444',          // 珊瑚红
  info: '#6B8ABF',           // 雾蓝本身
  
  // 主题色快捷引用
  primary: '#B3C6E7',        // 主题雾蓝色
  primaryHover: '#8FA8D3',   // 悬停色
  primaryActive: '#6B8ABF',  // 激活色
  
} as const;

// 🎨 雾蓝色高级主题配置
export const customTheme: ThemeConfig = {
  token: {
    // 主色调系统
    colorPrimary: THEME_COLORS.primary,
    colorPrimaryHover: THEME_COLORS.primaryHover,
    colorPrimaryActive: THEME_COLORS.primaryActive,
    
    // 圆角系统 - 温和的圆角
    borderRadius: 10,
    borderRadiusLG: 14,
    borderRadiusXS: 6,
    
    // 字体系统 - 优雅易读
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif',
    fontSize: 14,
    fontSizeLG: 16,
    fontSizeXL: 20,
    fontWeightStrong: 600,
    
    // 间距系统 - 舒适呼吸感
    padding: 16,
    paddingLG: 24,
    paddingXS: 8,
    paddingXXS: 4,
    
    // 阴影系统 - 轻柔飘逸
    boxShadow: '0 1px 3px rgba(107, 138, 191, 0.12), 0 1px 2px rgba(107, 138, 191, 0.08)',
    boxShadowSecondary: '0 4px 12px rgba(107, 138, 191, 0.15), 0 2px 4px rgba(107, 138, 191, 0.08)',
    boxShadowTertiary: '0 8px 24px rgba(107, 138, 191, 0.18), 0 4px 8px rgba(107, 138, 191, 0.12)',
    
    // 边框系统
    lineWidth: 1,
    lineType: 'solid',
    colorBorder: THEME_COLORS.mistBlue200,
    colorBorderSecondary: THEME_COLORS.neutral200,
    
    // 背景色系统 - 层次丰富
    colorBgContainer: THEME_COLORS.neutral50,
    colorBgElevated: THEME_COLORS.mistBlue50,
    colorBgLayout: THEME_COLORS.neutral100,
    colorBgMask: 'rgba(107, 138, 191, 0.35)',
    
    // 文字色彩系统
    colorText: THEME_COLORS.neutral800,
    colorTextSecondary: THEME_COLORS.neutral500,
    colorTextTertiary: THEME_COLORS.neutral400,
    colorTextHeading: THEME_COLORS.mistBlue700,
    
    // 状态色彩
    colorSuccess: THEME_COLORS.success,
    colorWarning: THEME_COLORS.warning,
    colorError: THEME_COLORS.error,
    colorInfo: THEME_COLORS.info,
    
    // 控件尺寸 - 优雅比例
    controlHeight: 42,
    controlHeightLG: 50,
    controlHeightSM: 34,
    
    // 动画系统 - 优雅流畅
    motionDurationFast: '0.15s',
    motionDurationMid: '0.25s',
    motionDurationSlow: '0.35s',
    motionEaseInOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    motionEaseOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
  components: {
    Button: {
      borderRadius: 10,
      controlHeight: 42,
      fontWeight: 500,
      // 雾蓝色按钮系统
      primaryShadow: '0 2px 8px rgba(179, 198, 231, 0.35)',
      colorText: THEME_COLORS.neutral800,
      colorPrimaryBg: THEME_COLORS.primary,
      colorPrimaryBorder: THEME_COLORS.primary,
      colorPrimaryHover: THEME_COLORS.primaryHover,
      colorPrimaryActive: THEME_COLORS.primaryActive,
    },
    Input: {
      borderRadius: 10,
      controlHeight: 42,
      activeBorderColor: THEME_COLORS.primary,
      hoverBorderColor: THEME_COLORS.mistBlue300,
      // 雾蓝色输入框
      activeShadow: '0 0 0 3px rgba(179, 198, 231, 0.15)',
      colorBgContainer: THEME_COLORS.neutral50,
      colorText: THEME_COLORS.neutral800,
      colorTextPlaceholder: THEME_COLORS.neutral400,
      colorBorder: THEME_COLORS.neutral300,
    },
    Card: {
      borderRadius: 14,
      paddingLG: 24,
      // 雾蓝色卡片系统
      boxShadow: '0 2px 8px rgba(107, 138, 191, 0.08), 0 1px 3px rgba(107, 138, 191, 0.06)',
      colorBgContainer: THEME_COLORS.mistBlue50,
      colorBorderSecondary: THEME_COLORS.mistBlue100,
    },
    Form: {
      itemMarginBottom: 20,
      verticalLabelPadding: '0 0 8px',
      labelColor: THEME_COLORS.neutral700,
    },
    Checkbox: {
      borderRadius: 6,
      colorPrimary: THEME_COLORS.primary,
      controlInteractiveSize: 18,
    },
    Typography: {
      titleMarginBottom: '0.5em',
      titleMarginTop: '1.2em',
      colorTextHeading: THEME_COLORS.mistBlue700,
      fontWeightStrong: 600,
    },
    Message: {
      // 雾蓝色消息系统
      borderRadius: 10,
      colorBgElevated: THEME_COLORS.mistBlue50,
      boxShadow: '0 4px 12px rgba(107, 138, 191, 0.15)',
      colorSuccess: THEME_COLORS.success,
      colorError: THEME_COLORS.error,
      colorWarning: THEME_COLORS.warning,
      colorInfo: THEME_COLORS.info,
      colorText: THEME_COLORS.neutral800,
    },
    Notification: {
      // 优雅通知系统
      borderRadius: 14,
      colorBgElevated: THEME_COLORS.mistBlue50,
      boxShadow: '0 8px 24px rgba(107, 138, 191, 0.18)',
      colorBorder: THEME_COLORS.mistBlue200,
    },
    Modal: {
      // 雾蓝色模态框
      borderRadius: 16,
      boxShadow: '0 16px 48px rgba(107, 138, 191, 0.25), 0 8px 16px rgba(107, 138, 191, 0.15)',
      colorBgElevated: THEME_COLORS.mistBlue50,
      colorBgMask: 'rgba(107, 138, 191, 0.35)',
    },
    Drawer: {
      // 雾蓝色抽屉
      borderRadius: 0,
      boxShadow: '0 16px 48px rgba(107, 138, 191, 0.25)',
      colorBgElevated: THEME_COLORS.mistBlue50,
    },
    Popover: {
      // 雾蓝色气泡
      borderRadius: 12,
      boxShadow: '0 6px 20px rgba(107, 138, 191, 0.18)',
      colorBgElevated: THEME_COLORS.mistBlue50,
      colorBorder: THEME_COLORS.mistBlue200,
    },
    Tooltip: {
      // 雾蓝色工具提示
      borderRadius: 8,
      colorBgSpotlight: 'rgba(44, 74, 115, 0.92)',
      boxShadow: '0 4px 12px rgba(107, 138, 191, 0.25)',
    },
    Menu: {
      // 雾蓝色菜单系统
      borderRadius: 12,
      itemBorderRadius: 8,
      colorBgElevated: THEME_COLORS.mistBlue50,
      boxShadow: '0 4px 12px rgba(107, 138, 191, 0.12)',
      colorItemText: THEME_COLORS.neutral700,
      colorItemTextSelected: THEME_COLORS.mistBlue600,
      colorItemBgSelected: THEME_COLORS.mistBlue100,
      colorItemBgHover: THEME_COLORS.mistBlue100,
    },
    Table: {
      // 雾蓝色表格
      borderRadius: 12,
      colorBgContainer: THEME_COLORS.mistBlue50,
      colorText: THEME_COLORS.neutral800,
      colorBorderSecondary: THEME_COLORS.mistBlue200,
      headerBg: THEME_COLORS.mistBlue100,
    },
    Tabs: {
      // 雾蓝色标签页
      borderRadius: 10,
      colorPrimary: THEME_COLORS.primary,
      inkBarColor: THEME_COLORS.primary,
      colorText: THEME_COLORS.neutral600,
      itemSelectedColor: THEME_COLORS.mistBlue600,
    },
    Progress: {
      // 雾蓝色进度条
      borderRadius: 10,
      colorSuccess: THEME_COLORS.success,
      defaultColor: THEME_COLORS.primary,
    },
    Switch: {
      // 雾蓝色开关
      borderRadius: 100,
      colorPrimary: THEME_COLORS.primary,
      colorPrimaryHover: THEME_COLORS.primaryHover,
    },
    Select: {
      // 雾蓝色选择器
      borderRadius: 10,
      colorBgElevated: THEME_COLORS.mistBlue50,
      colorText: THEME_COLORS.neutral800,
      colorBorder: THEME_COLORS.neutral300,
      optionSelectedBg: THEME_COLORS.mistBlue100,
    },
    DatePicker: {
      // 雾蓝色日期选择器
      borderRadius: 10,
      colorBgElevated: THEME_COLORS.mistBlue50,
      colorText: THEME_COLORS.neutral800,
    },
    Slider: {
      // 雾蓝色滑块
      colorPrimary: THEME_COLORS.primary,
      colorPrimaryBorder: THEME_COLORS.primary,
      railBg: THEME_COLORS.mistBlue200,
      railHoverBg: THEME_COLORS.mistBlue300,
    },
    Tag: {
      // 雾蓝色标签
      borderRadius: 6,
      colorPrimary: THEME_COLORS.primary,
      colorPrimaryBg: THEME_COLORS.mistBlue100,
      colorPrimaryBorder: THEME_COLORS.mistBlue200,
    },
  },
  algorithm: theme.defaultAlgorithm,
};

export default customTheme; 