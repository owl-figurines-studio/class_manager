import Taro from '@tarojs/taro'
import request from './http'
import { getArguments } from './utils'

export async function queryEncounter(params) {
  const { arg, fields } = params
  const query = `query{
    encounter${getArguments(arg)}{
      edges {
        node {${fields.join(",")}}
      }
    }
  }`
  return request.post('graphql', { data: { query } })
}

export async function createEncounter(params) {
  const { arg, fields } = params
  const query = `mutation{
    createEncounter(input:${getArguments(arg, true)}){
      encounter{${fields.join(",")}}
    }
  }`
  return request.post('graphql', { data: { query } })
}

export async function updateEncounter(params) {
  const { arg, fields } = params
  const query = `mutation{
    updateEncounter(input:${getArguments(arg, true)}){
      encounter{${fields.join(",")}}
    }
  }`
  return request.post('graphql', { data: { query } })
}