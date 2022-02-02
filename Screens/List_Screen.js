import { StatusBar } from 'expo-status-bar';
import Card from '../Components/Character_Card.js'
import { StyleSheet, Text, View, Button, SafeAreaView, Image, FlatList, ScrollView } from 'react-native';
import {  } from 'react-native';

character_list = []

export default function ListScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.list}>
          <Card screenName="Edit" style={styles.card}/>
        </ScrollView>
        <Button
          title="New Character"
          onPress={console.log('dog')}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '5%',
    minHeight: '90%',

  },
  list:{
    minHeight: '80%',
  },
  text:{
    color: 'white',
  },
  card:{
    height: '2%',
  },
});
