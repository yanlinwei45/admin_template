import type { Role } from "@/store/auth";
import { post } from "./base";
import type { MenuItem } from "@/store/menu";
import { permissionMenuList } from "@/router/menu";
import { getAsMenuList } from "@/router/menu";

export interface LoginForm {
  name: string;
  password: string;
}

export interface LoginResponse {
  role: Role;
  token_expire_at: number;
  token: string;
}

export const login = (data: LoginForm): Promise<LoginResponse> => {
  return post<LoginResponse>('/admin/login', data);
}

export const getMenuList = (role: Role): Promise<(MenuItem | null)[]> => {
  return new Promise((resolve) => {
    resolve(getAsMenuList(permissionMenuList, role));
  });
}