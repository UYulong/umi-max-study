import { request } from '@umijs/max'

export const addBanner = (params: any, options?: any) => {
  return request('/classes/CakeBanner', {
    method: 'POST',
    data: params,
    ...(options || {})
  })
}

export const getBannerList = (params: any, options?: any) => {
  return request('/classes/CakeBanner', {
    method: 'GET',
    ...(options || {})
  })
}


export const getBanner = (params: any, options?: any) => {
  return request(`/classes/CakeBanner/${params}`, {
    method: 'GET',
    ...(options || {})
  })
}

export const saveBanner = (params: any, options?: any) => {
  return request(`/classes/CakeBanner/${params.objectId}`, {
    method: 'PUT',
    data: params,
    ...(options || {})
  })
}
