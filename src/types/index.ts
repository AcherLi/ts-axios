
// ts高级类型-字符串字面量类型定义请求method
export type Method = 'get' | 'GET'
| 'delete' | 'Delete'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'

// 定义axiosRequestConfig请求接口
export interface AxiosRequestConfig {
  url: string, // 请求地址
  method?: Method, // http方法
  data?: any, // 请求数据
  params?: any // 请求url参数
  headers?: any, // 请求header
}
