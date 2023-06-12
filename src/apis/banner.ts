import { request } from '@umijs/max'

export const addBanner = (params: any, options?: any) => {
  return request('/classes/CakeBanner', {
    method: 'POST',
    data: params,
    ...(options || {})
  })
}