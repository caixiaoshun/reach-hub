import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig
  } from 'axios'
// import { ElMessage } from 'element-plus'
import { useToast } from '@/composables/useToast'

// 自定义统一响应结构（如你的后端返回 { code, message, data }）
  
  // 1. 创建 Axios 实例
  const http: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 100000,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  // 2. 请求拦截器
  http.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error: AxiosError): Promise<AxiosError> => {
      return Promise.reject(error)
    }
  )
  
// 3. 响应拦截器
const { toast } = useToast(); // Placed outside to be accessible by interceptors
http.interceptors.response.use(
  (response: AxiosResponse): any => {
    const res = response.data
    if (res?.code !== 0 && res?.code !== 200) {
      toast({
        title: 'Request Error',
        description: res.message || 'Request failed',
        variant: 'destructive',
      })
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res.data // 👉 只返回核心 data 部分
  },
  (error: AxiosError): Promise<AxiosError> => {
    const msg =
      (error.response?.data as any)?.message || error.message || 'Request error'
    toast({
      title: 'Request Error',
      description: msg,
      variant: 'destructive',
    })
    return Promise.reject(error)
  }
)
  
  // 4. 通用请求方法封装（返回值已是 T 类型）
  export const get = <T = any>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return http.get(url, { params, ...config })
  }
  
  export const post = <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return http.post(url, data, config)
  }
  
  export const put = <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return http.put(url, data, config)
  }
  
  export const del = <T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    return http.delete(url, config)
  }
  
  export default http
  