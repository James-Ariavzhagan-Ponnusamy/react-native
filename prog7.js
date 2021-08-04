import React, {Component} from 'react'
import {Text,View,Button} from 'react-native'


const Fun1=(fn, ln) => {
  return "Mr." + fn + " " + ln

}
class Cat extends Component
{
  test(fn, ln)
  {
    return "Mr." + fn + " " + ln + "!!!"
  }
  render()
  {
    var fn = "Arivazhagan"
    var ln = "Ponnusamy"
    return(
      <Text>Hello, {this.test(fn, ln)} !  Hello, {Fun1(fn, ln)} ! </Text>
    );
  }

}


export default Cat;
