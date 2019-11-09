import React, {Component} from 'react';
import {AppRegistry, View, FlatList, StyleSheet, Text} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Azubuike Stanley',
  },
  {
    id: '2',
    title: 'Ikechukwu Stanley',
  },
  {
    id: '3',
    title: 'Azubuike Ikechukwu',
  },
];

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class Component5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

AppRegistry.registerComponent('Component5', () => Component5);
