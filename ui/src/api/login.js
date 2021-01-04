import http from '../utils/request'

export function login(params) {
  return http({
    url: `user/login`,
    method: 'post',
    data: params
  })
}
