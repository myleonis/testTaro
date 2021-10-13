// import Taro from '@tarojs/taro' // 有问题
import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtButton, AtAvatar } from 'taro-ui'
import {PageDecorator} from '@/components/common/index'

type StateType = {
  date: Date
}

type proType = {
  date: Date
}
// 重命名绕过 无法解析类修饰器的签名
const PageDecorators : Function = PageDecorator
@PageDecorators({background:'red'})
export default class Index extends Component<StateType,  proType> {
  timeId: NodeJS.Timeout
  constructor (props: StateType | Readonly<StateType>) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  tick() {
    this.setState({
      date:new Date()
    })
  }
  componentDidMount () {
    this.timeId = setInterval(() => {
      this.tick()
    },1000)
  }
  
  componentWillUnmount () {
    clearInterval(this.timeId)
  }

  render () {
    return (
      <View className='index'>
         <AtButton type='primary'>按钮文案</AtButton>
         <View>{this.state.date.toLocaleTimeString()}</View>
         <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
      </View>
    )
  }
}