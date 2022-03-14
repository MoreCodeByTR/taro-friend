import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton,AtMessage } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  state={
    msg:'这是一段测试文本'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  clickBtn=()=>{
    this.setState({msg:'文案被改变了'})
    Taro.atMessage({
      'message': '按钮被点击了',
      'type': 'success',
    })
  }

  render () {
    return (
      <View className='index'>
         <Text className='name'>{this.state.msg}</Text>
         <AtMessage />
        <AtButton type='primary' onClick={this.clickBtn}>按钮文案</AtButton>
       
      </View>
    )
  }
}
