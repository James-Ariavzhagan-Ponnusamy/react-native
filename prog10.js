


import React, {Component} from 'react';
import {Text, View} from 'react-native'

class Separator extends Component
{
  render()
  {
    return(
      <Text> </Text>
    )
  }
}

class main_prg extends Component{
  render()
  {
    return(
      <View>
      <Separator/>
      <Separator/>
      <Separator/>
      <Separator/>
      <Separator/>

      <Text>
        Inside the data
      </Text>
      </View>
    );
  }
}

export default main_prg
