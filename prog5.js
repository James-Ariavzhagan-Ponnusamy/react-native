import React, {Component}                  from 'react';
import        {Text, TextInput, View, Image}      from 'react-native';

class LineFeed extends Component
{
  render()
  {
    return(
      <View>
        <Text> </Text>+
        
      </View>
    );
  }
}

const Cat = () => {
  return (
    <View>
      <Text> </Text>
    </View>
  );
}

class MyImage extends Component{
  render()
  {
    return(
      <View>
      <Image source={{uri:"https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/666e258bcccc189ae0ae5426eba092fd"}}
      style={{width: 200, height: 200}}
      />
      </View>
    );
  }
}

class Outer extends Component {
  render(){
    return (
      <View>
      <MyImage/>
      <Text>Enter your name : </Text>       
      <TextInput     
          style={{ 
            height: 20,
            left:100,
            borderColor: 'black',
            borderWidth: 1,
            width:200
         }}
         />
      </View>
    );
  }
}

export default Outer;

