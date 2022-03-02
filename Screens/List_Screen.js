import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, FlatList, ScrollView, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {   } from 'react-native';
import { useState } from 'react'
import Card from '../Components/Character_Card.js'
import styles from '../StyleSheets/List_Screen.style.js';


async function loadCharacters(setList){
  try {
    keys = await AsyncStorage.getAllKeys()
    gotten = await AsyncStorage.multiGet(keys)
    } catch(e) {
      console.warn(e)
    }
    
    t_list = []
    if (gotten.length > 0) {
      gotten.forEach(got => {
        const jsonValue = got[1]
        temp = jsonValue != null ? JSON.parse(jsonValue) : null
        temp.key = got[0]
        t_list.push(temp)
      });
    } 
    setList(t_list)

}

export default function ListScreen() {
  const [list, setList] = useState([])
  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadCharacters(setList)
      // console.log(list) 
      // console.log(typeof list)
 
    });
    return unsubscribe;
  }, [navigation]);

  const componentDidMount = () => {
    loadCharacters(setList)
  }

  componentDidMount()
  // while (typeof this.list) 

  return (
    <SafeAreaView style={styles.container}>
      {/* May be changed to flatlist - need dynamically called components from list */}
        <FlatList
          data={list}
          renderItem={({ item }) =>  (
            <Card screenName="Edit" item={item} style={styles.card}/>
          )}
        />
        {/* Opens New_Screen when pressed */}
        <Pressable
          onPress={() => navigation.navigate('New')}
          style={styles.button}
        >
            <Text style={styles.text}>New Character</Text>
          </Pressable>
    </SafeAreaView>
  );
}