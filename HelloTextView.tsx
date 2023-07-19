import {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

const getFullName = (fName: string, sName: string, tName: string) => {
  return fName + ' ' + sName + ' ' + tName;
};

const HelloTextView = () => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View style={{padding: 50}}>
      <Text>Hello, I am {getFullName('Jonny', 'Chinh', 'Tran')} & I am {isHungry ? 'hungry' : 'full'}</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        defaultValue="Type me!!"
      />
      <Button onPress={() => {
        setIsHungry(false);
      }}
      disabled = {!isHungry}
      title={isHungry ? 'Put Rice & Meat' : 'Thank you!'}></Button>
    </View>
  );
};

export default HelloTextView;
