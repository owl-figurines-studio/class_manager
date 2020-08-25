import request from './http'

export async function diabetesPredic(params) {
  return request.post('/diabetes', { data: params, contentType: 'application/x-www-form-urlencoded;' })
}
export async function code2Session(params) {
  return request.post('/user/code2session', { data: params, contentType: 'application/x-www-form-urlencoded;' })
}