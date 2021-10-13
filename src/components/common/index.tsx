/*
 * @description: 第一个测试组建
 */
import React, { Component } from 'react'
import { View } from '@tarojs/components'

export const PageDecorator = param=> WrappedComponent=> {

  return class PageNormal extends Component{
      render(){
          let bgColor = param && param.background ? param.background : 'rgb(244,245,250)'
          return (

              <View style={{backgroundColor:bgColor}}>
                  <WrappedComponent  {...this.props} ></WrappedComponent>
              </View>
          )
      }
  }
}
