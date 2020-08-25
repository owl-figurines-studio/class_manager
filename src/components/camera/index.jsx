import Taro, { Component } from '@tarojs/taro'
import { View, Button, Camera, Image, Text } from '@tarojs/components'
import './index.less'

class CameraTest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      photo: null,
    }
  }

  componentWillMount() {
    this.cameraContext = Taro.createCameraContext()
  }

  takePhoto = () => {
    this.cameraContext.takePhoto({
      quality: 'high',
      success: res => {
        this.setState({
          photo: res.tempImagePath
        })
        Taro.uploadFile({
          url: "http://127.0.0.1:5000/upload/",
          filePath: res.tempImagePath,
          name: "img",
          success: () => console.log("upload success"),
        })
      },
    })
    console.log(this.cameraContext)
  }

  jump = () => {
    console.log(Taro.getCurrentPages())
    Taro.navigateTo({ url: '../index/index', })
  }

  render() {
    return (
      <View>
        <Camera devicePosition='back' style={{ width: '100%'}} />
        <View className='cameraBtnArea' >
          <Button className='cameraButton' onClick={this.takePhoto} />
          <Button onClick={this.jump} >溜了</Button>
        </View>
        <View><Text>预览</Text></View>
        <Image src={this.state.photo} />
      </View>
    )
  }
}

export default CameraTest