import { message } from '@/components/Message';

// 基础配置
const BASE_URL = import.meta.env.VITE_API_BASE || '/api';
const TIMEOUT = 10000;

// 请求配置
interface RequestOptions {
  headers?: Record<string, string>;
  timeout?: number;
  showError?: boolean;
}

// 通用请求函数
async function request<T = any>(
  url: string,
  options: RequestInit & RequestOptions = {}
): Promise<T> {
  const {
    headers = {},
    timeout = TIMEOUT,
    showError = true,
    ...fetchOptions
  } = options;

  // 构建完整URL
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;

  // 默认请求头
  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // 合并用户传入的headers
  Object.assign(defaultHeaders, headers);

  // 添加token（如果存在）
  const token = localStorage.getItem('token');
  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`;
  }

  // 超时控制
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(fullUrl, {
      ...fetchOptions,
      headers: defaultHeaders,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    clearTimeout(timeoutId);
    
    const err = error as Error;
    if (showError) {
      if (err.name === 'AbortError') {
        message.error('请求超时');
      } else {
        message.error(err.message || '请求失败');
      }
    }
    
    throw err;
  }
}

// GET 请求
export function get<T = any>(url: string, options?: RequestOptions): Promise<T> {
  return request<T>(url, { ...options, method: 'GET' });
}

// POST 请求
export function post<T = any>(url: string, data?: any, options?: RequestOptions): Promise<T> {
  return request<T>(url, {
    ...options,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });
}

// PUT 请求
export function put<T = any>(url: string, data?: any, options?: RequestOptions): Promise<T> {
  return request<T>(url, {
    ...options,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });
}

// DELETE 请求
export function del<T = any>(url: string, options?: RequestOptions): Promise<T> {
  return request<T>(url, { ...options, method: 'DELETE' });
}

// 默认导出
export default {
  get,
  post,
  put,
  delete: del,
  request,
};
