import http from '../utils/request'

export function listAll(searchForm) {
  return http({
    url: `student/all/list`,
    method: 'get',
    params: searchForm
  })
}
