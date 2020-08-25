import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtInput, AtForm, AtButton, AtCard } from 'taro-ui'
import BasicPage from 'src/containers/BasicPage'
import { router } from 'src/utils/router'
import styles from './index.module.less'

@connect(({ user }) => {
  const { userStateCode } = user
  return { userStateCode }
})
class Verify extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userPhoneNum: null,
      verificationCode: null,
    }
  }

  componentDidMount() {
    const { userStateCode } = this.props
    if (userStateCode === 1001) {
      Taro.redirectTo({ url: router('acquisition') })
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  config = {
    navigationBarTitleText: 'RX-178-02'
  };

  componentDidShow() { }

  componentDidHide() { }

  sendPhoneNum = () => {
    const { dispatch } = this.props
    const { userPhoneNum } = this.state
    dispatch({
      type: 'user/sendPhoneNum',
      payload: {
        userphone: userPhoneNum,
      }
    })
  }

  verifyok = () => {
    const { dispatch } = this.props
    const { userPhoneNum, verificationCode } = this.state
    dispatch({
      type: 'user/verifyok',
      payload: {
        verification_code: verificationCode,
        userphone: userPhoneNum
      }
    }).then(() => Taro.redirectTo({ url: router('acquisition') }))
  }

  loginIn = () => {

  }

  phoneNumberOnChange = value => {
    this.setState(
      {
        userPhoneNum: value,
      }
    )
  }

  verificationCodeOnChange = value => {
    this.setState(
      {
        verificationCode: value,
      }
    )
  }

  redirectToRegister = () => {
    Taro.redirectTo({
      url: router('register')
    })
  }

  render() {
    const { userPhoneNum, verificationCode } = this.state
    const navBarProps = {

    }
    return (
      <BasicPage navBarProps={navBarProps} tabBarVisible={false} >
        <View className={styles.verify}>
          <AtCard
            title='手机验证'
          >
            <AtForm
              onSubmit={this.sendPhoneNum}
            >
              <AtInput
                name='userPhoneNum'
                title='电话'
                type='number'
                placeholder='请输入电话号码'
                value={userPhoneNum}
                onChange={value => this.phoneNumberOnChange(value)}
              >
                <AtButton className='sendPhoneNum' formType='submit'>发送验证</AtButton>
              </AtInput>
            </AtForm>
            <AtForm
              onSubmit={this.verifyok}
            >
              <AtInput
                name='verificationCode'
                title='验证码'
                type='number'
                placeholder='请输入验证码'
                value={verificationCode}
                onChange={value => this.verificationCodeOnChange(value)}
              />
              <AtButton className='login' formType='submit' >登录</AtButton>
            </AtForm>
          </AtCard>
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

export default Verify