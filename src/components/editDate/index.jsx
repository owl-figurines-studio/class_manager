import Taro, { Component } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import styles from './index.module.less'

const editBorder = {
  border: '5rpx solid #d6e4ef',
  borderRadius: '20rpx',
}

class editDate extends Component {
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
            <Picker mode='date' onChange={e => onChange(e)}>
              <View className={styles.field}>
                {value}
              </View>
            </Picker>
          ) : (
              <View className={styles.field} >{value}</View>
            )
        }
      </View>
    )
  }
}

export default editDate