import request from './http'

export async function sendPhoneNum(params) {
  const res = await request.post('/user/verify', { data: params, contentType: 'application/x-www-form-urlencoded;' })
  console.log(res)
  return res
}

export async function code2Session(params) {
  return request.post('/user/code2session', { data: params, contentType: 'application/x-www-form-urlencoded;' })
}

export async function verifyok(params) {
  return request.post('/user/verifyok', { data: params, contentType: 'application/x-www-form-urlencoded;' })
}
