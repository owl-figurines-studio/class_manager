import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtMessage } from 'taro-ui'

class RequestMessage extends Component {
  render() {
    return (
      <View>
        <AtMessage />
      </View>
    )
  }
}

export default RequestMessage
