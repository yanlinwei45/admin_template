import type { MenuItem } from "@/store/menu";
import { Forklift } from "lucide-react";
import { Role } from "@/store/auth";

export const defaultMenuList:MenuItem[] = [
	{
		id: 1,
		parentId: 0,
		path: "/login",
		route: "/login/index",
		name: "login",
		role: [Role.SUPER_ADMIN, Role.ADMIN, Role.REVIEWER, Role.NORMAL, Role.GUEST],
		icon: <Forklift />,
		activeIcon: <Forklift color="#000000" />
	},
]

export const permissionMenuList:MenuItem[] = [
	{
		id: 2,
		parentId: 0,
		path: "/dashboard/apps",
		route: "/dashboard/apps/index",
		name: "apps",
		role: [Role.SUPER_ADMIN, Role.ADMIN],
		icon: <Forklift />,
		activeIcon: <Forklift color="#000000" />
	}
]

export const getAsMenuList = (permissionMenuList: (MenuItem | null)[], role: Role): (MenuItem | null)[] => {
	// 筛选出符合角色的菜单
	const menuList = permissionMenuList.map(item => {
		if (!item) return null;
		if (item.role.includes(role)) {
			return item;
		}
		if (item.children) {
			item.children = getAsMenuList(item.children, role);
			return item;
		}
		return null;
	});

	return menuList;
}