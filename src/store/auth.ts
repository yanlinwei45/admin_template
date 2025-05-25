import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export enum Role {
	SUPER_ADMIN = 100,
	ADMIN = 90,
	REVIEWER = 10,
	NORMAL = 1,
	GUEST = 0,
}

export interface User {
	role: Role
}

export interface AuthState {
	user: User | null
	token: string | null
	setUser: (user: User) => void
	setToken: (token: string) => void
}

// 使用本地存储来存储用户信息和token
export const useAuthStore = create<AuthState>()(persist((set) => ({
	user: null,
	token: null,
	setUser: (user: User) => set({ user }),
	setToken: (token: string) => set({ token })
}), {
	name: 'auth',
	storage: createJSONStorage(() => localStorage)
}))





