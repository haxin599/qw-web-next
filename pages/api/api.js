import request from './axios'

export function apiCms(params) {
  return request({
    url: '/cms/list',
    method: 'get',
    params
  })
}