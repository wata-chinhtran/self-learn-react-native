import {SectionList, Text, View} from 'react-native';

const SectionListBasic = () => {
  return (
    <View>
      <SectionList
        sections={[
          {title: 'C', data: ['Control', 'Come in', 'Create']},
          {title: 'D', data: ['Detail', 'Disc', 'Data']},
        ]}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default SectionListBasic;
