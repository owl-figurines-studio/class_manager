import React, { Component } from 'react'

import { View, Navigator } from '@tarojs/components'
import { connect } from 'react-redux'
import BasicPage from 'src/containers/BasicPage'
import { router } from 'src/utils/router'



@connect(({ user }) => {
  const { verifyStateCode } = user
  return { verifyStateCode }
})
class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }



  render() {

    const navBarProps = {
      title: '首页',
    }

    return (
      <BasicPage navBarProps={navBarProps} >
        <View >
          <Navigator url={router('user')} >用户模块</Navigator>
        </View>
      </BasicPage>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Login