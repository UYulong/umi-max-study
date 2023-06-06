import { request } from '@umijs/max'

export const login = (params: any, options?: any) => {
  return request('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {})
  })
}

export const getCloudList = (params: any, options?: any) => {
  return request('/classes/test', {
    method: 'GET',
    ...(options || {})
  })
}