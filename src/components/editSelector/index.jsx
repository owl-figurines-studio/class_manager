import React, { Component } from 'react'

import { View, Picker } from '@tarojs/components'
import styles from './index.module.less'

const editBorder = {
  border: '5rpx solid #d6e4ef',
  borderRadius: '20rpx',
}

class editSelector extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  componentWillReceiveProps() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { isEdit = false, range = [], value = 0, onChange } = this.props
    return (
      <View className={styles.editField} style={isEdit ? editBorder : null} >
        {
          isEdit ? (
            <Picker mode='selector' range={range} onChange={e => onChange(e)}>
              <View className={styles.field}>
                {range[value]}
              </View>
            </Picker>
          ) : (
              <View className={styles.field} >{range[value]}</View>
            )
        }
      </View>
    )
  }
}

export default editSelector