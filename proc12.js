



import React, {Component} from 'react';
import {Text,View} from 'react-native'


const Test =  (props) => 
{
    return(
      <Text> {props.name}</Text>
    )
}

class main_prg1 extends Component
{
  render()
  {
     return(
       <View>
       <Test name='value'/>
      <Text>Parameter example </Text>
      </View>
    );
  }
}

export default main_prg1;
