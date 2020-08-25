import Taro from '@tarojs/taro'
import request from './http'
import { getArguments } from './utils'

export async function queryOCR(params) {
  const { arg, fields } = params
  const query = `query{
    ocr${getArguments(arg)}{
      edges {
        node {${fields.join(",")}}
      }
    }
  }`
  return request.post('graphql', { data: { query } })
}

export async function createOCR(params) {
  const { arg, fields } = params
  const query = `mutation{
    createOcr(input:${getArguments(arg, true)}){
      ocr{${fields.join(",")}}
    }
  }`
  return request.post('graphql', { data: { query } })
}