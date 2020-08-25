import Taro from '@tarojs/taro'
import request from './http'
import { getArguments } from './utils'

export async function queryObservation(params) {
  const { arg, fields } = params
  const query = `query{
    observation${getArguments(arg)}{
      edges {
        node {${fields.join(",")}}
      }
    }
  }`
  return request.post('graphql', { data: { query } })
}

export async function createObservation(params) {
  const { arg, fields } = params
  const query = `mutation{
    createObservation(input:${getArguments(arg, true)}){
      observation{${fields.join(",")}}
    }
  }`
  return request.post('graphql', { data: { query } })
}

export async function updateObservation(params) {
  const { arg, fields } = params
  const query = `mutation{
    updateObservation(input:${getArguments(arg, true)}){
      observation{${fields.join(",")}}
    }
  }`
  return request.post('graphql', { data: { query } })
}