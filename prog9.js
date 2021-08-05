

import React,{Component} from 'react'
import {Text, View, TextInput} from 'react-native'

class Test extends Component
{
  render()
  {
    return(
      <View>
      <Text>Enter Your Name : </Text>
      <TextInput style={{height:20, width:150, borderColor:'red', borderWidth:1}} defaultValue='Your name goes here ... '/>
      </View>
    )

  }

}

export default Test
