import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView, FlatList, ScrollView, Pressable } from 'react-native';
import {  } from 'react-native';
import Card from '../Components/Character_Card.js'
import styles from '../StyleSheets/List_Screen.style.js';

character_list = []

export default function ListScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* May be changed to flatlist - need dynamically called components from list */}
        <ScrollView style={styles.list}>
          {/* placeholder of a custom component */}
          <Card screenName="Edit" style={styles.card}/>
        </ScrollView>
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