import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, SafeAreaView, Image, FlatList, ScrollView, Pressable } from 'react-native';
import {  } from 'react-native';
import Card from '../Components/Character_Card.js'
import style from '../StyleSheets/List_Screen.style.js';

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