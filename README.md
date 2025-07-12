# 🌟 Admin Template - 雾蓝色管理后台模板

一个基于 React 19 构建的现代化管理后台模板，采用雾蓝色主题设计，提供完整的用户认证、权限管理和响应式布局。

## ✨ 项目特色

- 🎨 **雾蓝色主题** - 独特的雾蓝色设计系统，优雅且专业
- 🔐 **完整的权限系统** - 基于角色的访问控制 (RBAC)  
- 📱 **响应式设计** - 适配各种设备屏幕
- 🚀 **现代化技术栈** - React 19 + TypeScript + Vite
- 🎯 **组件化架构** - 高度可复用的组件设计
- 🌈 **丰富的动画** - 流畅的交互体验
- 🔧 **TypeScript** - 完整的类型安全

## 🛠️ 技术栈

### 核心框架
- **React 19** - 前端框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具

### UI & 样式
- **Ant Design 5** - UI 组件库
- **Tailwind CSS 4** - 原子化 CSS 框架
- **Lucide React** - 图标库

### 状态管理 & 路由
- **Zustand** - 轻量级状态管理
- **React Router v7** - 路由管理

### 开发工具
- **ESLint** - 代码检查
- **PostCSS** - CSS 处理
- **Code Inspector** - 代码审查插件

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖
```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发模式
```bash
# 启动开发服务器
pnpm dev

# 或
npm run dev
```

### 构建生产版本
```bash
# 构建项目
pnpm build

# 预览构建结果
pnpm preview
```

### 代码检查
```bash
# 运行 ESLint
pnpm lint
```

## 📁 项目结构

```
admin_template/
├── public/                 # 静态资源
├── src/
│   ├── api/               # API 接口
│   │   ├── auth.ts        # 认证相关 API
│   │   └── base.ts        # API 基础配置
│   ├── assets/            # 静态资源
│   ├── components/        # 通用组件
│   │   ├── Message/       # 消息通知组件
│   │   └── Sidebar/       # 侧边栏组件
│   ├── config/            # 配置文件
│   │   └── theme.ts       # 主题配置
│   ├── router/            # 路由配置
│   │   ├── index.ts       # 路由入口
│   │   ├── menu.tsx       # 菜单配置
│   │   └── routes.tsx     # 路由规则
│   ├── store/             # 状态管理
│   │   ├── auth.ts        # 认证状态
│   │   └── menu.ts        # 菜单状态
│   ├── types/             # 类型定义
│   ├── utils/             # 工具函数
│   ├── views/             # 页面组件
│   │   ├── 404/           # 404 页面
│   │   ├── dashboard/     # 仪表板
│   │   ├── login/         # 登录页面
│   │   └── layout.tsx     # 布局组件
│   └── main.tsx           # 应用入口
├── index.html             # HTML 模板
├── package.json           # 依赖配置
├── tailwind.config.js     # Tailwind 配置
├── vite.config.ts         # Vite 配置
└── README.md              # 项目说明
```

## 🔐 权限系统

### 角色定义
```typescript
enum Role {
  SUPER_ADMIN = 100,  // 超级管理员
  ADMIN = 90,         // 管理员
  REVIEWER = 10,      // 审核员
  NORMAL = 1,         // 普通用户
  GUEST = 0,          // 访客
}
```

### 权限控制
- 基于角色的菜单显示
- 路由级别的权限验证
- 组件级别的权限控制

## 🎨 主题系统

### 雾蓝色色彩体系
- **主色调**：#B3C6E7 (雾蓝色)
- **悬停色**：#8FA8D3 (中雾蓝)
- **激活色**：#6B8ABF (深雾蓝)
- **强调色**：#4A6B9A (深蓝)

### 设计特色
- 温和的圆角设计
- 轻柔的阴影效果
- 流畅的动画过渡
- 优雅的配色方案

## 🔧 核心功能

### 🏠 仪表板
- 响应式布局
- 可折叠侧边栏
- 面包屑导航
- 用户信息展示

### 🔑 认证系统
- 用户登录/登出
- Token 管理
- 自动跳转
- 会话持久化

### 📋 菜单管理
- 动态菜单生成
- 权限过滤
- 嵌套菜单支持
- 图标配置

### 🔔 消息系统
- 成功/错误/警告/信息提示
- 自动消失
- 点击关闭
- 动画效果

### 📱 响应式设计
- 移动端适配
- 平板适配
- 桌面端优化
- 触摸友好

## 🌐 API 配置

### 环境变量
```env
VITE_API_BASE=/api
VITE_API_BASE_URL=http://localhost:3000
```

### 请求拦截
- 自动添加 Token
- 请求超时处理
- 错误统一处理
- 响应数据格式化

## 📦 自定义组件

### Message 组件
```typescript
import { message } from '@/components/Message';

// 使用方式
message.success('操作成功');
message.error('操作失败');
message.warning('警告信息');
message.info('提示信息');
```

### Sidebar 组件
- 可折叠侧边栏
- 菜单高亮
- 权限过滤
- 响应式适配

## 🔄 状态管理

### Zustand Store
```typescript
// 认证状态
const { user, token, setUser, setToken } = useAuthStore();

// 菜单状态
const { menuList } = useMenuStore();
```

## 🎯 开发规范

### 代码风格
- 使用 ESLint 进行代码检查
- 统一的代码格式化
- TypeScript 严格模式
- 组件命名规范

### 文件组织
- 按功能模块划分
- 组件独立目录
- 类型定义集中管理
- 工具函数模块化

## 📸 页面预览

### 登录页面
- 雾蓝色渐变背景
- 动态波浪效果
- 浮动几何图形
- 粒子动画

### 仪表板
- 左侧导航菜单
- 顶部导航栏
- 主内容区域
- 响应式布局

### 404 页面
- 创意设计
- 动态背景
- 引导操作
- 友好提示

## 🚀 部署说明

### 构建项目
```bash
pnpm build
```

### 部署到服务器
```bash
# 将 dist 目录上传到服务器
# 配置 nginx 或其他 web 服务器
```

### Docker 部署
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build
EXPOSE 4173
CMD ["pnpm", "preview"]
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📝 更新日志

### v1.0.0 (2024-01-01)
- 🎉 初始版本发布
- ✨ 完整的认证系统
- 🎨 雾蓝色主题设计
- 📱 响应式布局
- 🔐 权限管理系统

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📞 联系我们

- **项目维护者**：[项目团队]
- **邮箱**：[联系邮箱]
- **问题反馈**：[GitHub Issues](https://github.com/your-repo/issues)

---

⭐ 如果这个项目对您有帮助，请给我们一个 star！ 