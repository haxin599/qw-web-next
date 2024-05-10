import request from './axios'

export function apiIndex(params) {
  return request({
    url: '/app/home',
    method: 'get',
    params
  })
}
export function apiConsult(params) {
  return request({
    url: '/app/content/consult',
    method: 'get',
    params
  })
}
export function apiCulture(params) {
  return request({
    url: '/app/content/culture',
    method: 'get',
    params
  })
}
export function apiIntroduction(params) {
  return request({
    url: '/app/content/introduction',
    method: 'get',
    params
  })
}
export function apiServe(params) {
  return request({
    url: '/app/content/serve',
    method: 'get',
    params
  })
}

export function apiVisualAngle(params) {
  return request({
    url: '/app/content/visualAngle',
    method: 'get',
    params
  })
}

// 资讯详情  
export function apiConsultDetail(params) {
  return request({
    url: '/app/content/consult/details',
    method: 'get',
    params
  })
}