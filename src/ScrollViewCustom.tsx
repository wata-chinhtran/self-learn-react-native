import {Image, ScrollView, Text} from 'react-native';
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};


const ScrollViewCustom = () => {
  return (
    <ScrollView>
      <Text style={{fontSize: 35}}>ScrollView</Text>
      <Image source={logo} style={{paddingLeft: 50}}/>
    </ScrollView>
  );
};

export default ScrollViewCustom;
