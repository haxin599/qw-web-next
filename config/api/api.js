import request from './axios'

export function apiIndex(params) {
  return request({
    url: '/app/home',
    method: 'get',
    params
  })
}
// 景区资讯
export function apiConsult(params) {
  return request({
    url: '/app/content/consult',
    method: 'get',
    params
  })
}

// 景区文化
export function apiCulture(params) {
  return request({
    url: '/app/content/culture',
    method: 'get',
    params
  })
}
// 企业信息
export function apiIntroduction(params) {
  return request({
    url: '/app/content/introduction',
    method: 'get',
    params
  })
}
// 景区服务
export function apiServe(params) {
  return request({
    url: '/app/content/serve',
    method: 'get',
    params
  })
}
// 景区视角
export function apiVisualAngle(params) {
  return request({
    url: '/app/content/visualAngle',
    method: 'get',
    params
  })
}
// 视频图片分类
export function apiPerspectiveType(params) {
  return request({
    url: '/app/content/perspective/listAll',
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