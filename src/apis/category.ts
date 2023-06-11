import { request } from '@umijs/max'

export const addCakeCategory = (params: any, options?: any) => {
  return request('/classes/CakeCategory', {
    method: 'POST',
    data: params,
    ...(options || {})
  })
}