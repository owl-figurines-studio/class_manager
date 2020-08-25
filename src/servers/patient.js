import Taro from '@tarojs/taro'
import request from './http'
import { getArguments } from './utils'

export async function queryPatient(params) {
  const { arg, fields } = params
  const query = `query{
    patient${getArguments(arg)}{
      edges {
        node {${fields.join(",")}}
      }
    }
  }`
  return request.post('graphql', { data: { query } })
}

export async function createPatient(params) {
  const { arg, fields } = params
  const query = `mutation{
    createPatient(input:${getArguments(arg, true)}){
      ocr{${fields.join(",")}}
    }
  }`
  return request.post('graphql', { data: { query } })
}

export async function updatePatient(params) {
  const { arg, fields } = params
  const query = `mutation{
    updatePatient(input:${getArguments(arg, true)}){
      patient{${fields.join(",")}}
    }
  }`
  return request.post('graphql', { data: { query } })
}
