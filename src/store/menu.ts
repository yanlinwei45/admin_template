import type { ReactNode } from 'react'
import { create } from 'zustand'
import type { Role } from './auth'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface MenuItem {
	id: number //菜单id
	parentId: number //父菜单id
	name: string //英文名字
	path: string //路由路径
	route: string //组件引入路径
	role: Role[] //角色
	icon?: ReactNode //图标
	activeIcon?: ReactNode //激活图标
	children?: (MenuItem | null)[] //子菜单
}

export interface MenuState {
  menuList: (MenuItem | null)[]
}

const useMenuStore = create<MenuState>()(persist(
	(set) => ({
		menuList: [],
		setMenuList: (menuList: MenuItem[]) => set({ menuList }),
	}), {
		name: 'menu',
		storage: createJSONStorage(() => localStorage)
	}
))

export default useMenuStore;

