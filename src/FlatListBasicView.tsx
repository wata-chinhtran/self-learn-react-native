import {Text, View, FlatList, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 35,
    textAlign: 'center',
    flex: 1,
  },
});

const FlatListBasic = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[{key: 'a1'}, {key: 'b1'}, {key: 'c1'}, {key: 'd1'}]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasic;
