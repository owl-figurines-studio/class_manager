import React, { Component } from 'react'

import { View } from '@tarojs/components'
import { AtInput } from 'taro-ui'
import styles from './index.module.less'

const editBorder = {
  border: '5rpx solid #d6e4ef',
  borderRadius: '20rpx',
}

class EditField extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  componentWillReceiveProps() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { isEdit = false, value = null, onChange } = this.props
    return (
      <View className={styles.editField} style={isEdit ? editBorder : null} >
        {
          isEdit ? (
            <AtInput value={value} onChange={e => onChange(e)} border />
          ) : (
              <View className={styles.field} >{value}</View>
            )
        }
      </View>
    )
  }
}

export default EditField