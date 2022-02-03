import { useNavigation } from '@react-navigation/native';
import Card from '../Components/Character_Card.js'
import { StyleSheet, Text, View, Button, SafeAreaView, Image, FlatList, ScrollView, Pressable } from 'react-native';
import {  } from 'react-native';

character_list = []

export default function ListScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.list}>
          <Card screenName="Edit" style={styles.card}/>
        </ScrollView>
        <Pressable
          onPress={() => navigation.navigate('New')}
          style={styles.button}
        >
            <Text style={styles.text}>New Character</Text>
          </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '2%',
    paddingBottom: '2%',
    minHeight: '100%',

  },
  list:{
    minHeight: '80%',
    borderColor: 'purple',
    borderWidth: 1,
  },
  button:{
    alignItems:'center',
    justifyContent: 'center',
    minHeight: '10%',
    width: '100%',
    backgroundColor: 'red',
},
  text:{
    color: 'white',
    fontSize: 20,
  },
  card:{
    height: '2%',
  },
});
