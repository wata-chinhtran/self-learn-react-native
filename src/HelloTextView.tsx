import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import ScrollViewCustom from './ScrollViewCustom';

const getFullName = (fName: string, sName: string, tName: string) => {
  return fName + ' ' + sName + ' ' + tName;
};

const HelloTextView = () => {
  const [isHungry, setIsHungry] = useState(true);
  const [text, setText] = useState('');
  return (
    <View style={{padding: 50}}>
      <Text style={{paddingBottom:10}}>Hello, I am {getFullName('Jonny', 'Chinh', 'Tran')} & I am {isHungry ? 'hungry' : 'full'}</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        placeholder="Type me!!"
        defaultValue={text}
        onChangeText={newText => setText(newText)}
      />
      <Text style={{padding: 10, fontSize: 40}}>{text.split(' ').map(word => word && '🍕').join(' ')}</Text>
      <Button onPress={() => {
        setIsHungry(false);
      }}
      disabled = {!isHungry}
      title={isHungry ? 'Put Rice & Meat' : 'Thank you!'}></Button>
      <ScrollViewCustom></ScrollViewCustom>
    </View>
    
  );
};

export default HelloTextView;
