import type { RouteObject } from "react-router-dom";
import useMenuStore, { type MenuItem } from "@/store/menu";
import { defaultMenuList } from "./menu";
import Layout from "@/views/layout";

// 创建一个模块映射对象（会匹配所有 tsx 文件）
const modules = import.meta.glob('/src/views/**/*.tsx');

// 转换菜单为 RouteObject[]
const getMenuList = (menuList: (MenuItem | null)[]): RouteObject[] => {
  const routes: RouteObject[] = menuList.filter(menu => menu !== null).map(menu => {
    const route: RouteObject = {
      path: menu.path,
      handle: {
        icon: menu.icon,
        title: menu.name,
      },
      async lazy() {
        const path = `/src/views${menu.route}.tsx`; // 这里是关键：一定以 /src 开头
        const loader = modules[path];
        if (!loader) {
          throw new Error(`未找到组件路径：${path}`);
        }
        const { default: Component } = await loader() as { default: React.ComponentType };
        return { Component };
      }
    };
    if (menu.children) {
      route.children = getMenuList(menu.children);
    }
    return route;
  });
  return routes;
};

// 生成所有路由
const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			...getMenuList(defaultMenuList),
			...getMenuList(useMenuStore.getState().menuList),
		]
	}
];

export default routes;