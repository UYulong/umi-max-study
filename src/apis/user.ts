import { request } from '@umijs/max'

export const login = (params: any) => {
  return request('/login', {
    method: 'POST',
    data: params,
  })
}