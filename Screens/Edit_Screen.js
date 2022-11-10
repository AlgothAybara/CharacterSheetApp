import { Text, Pressable, SafeAreaView, View, Alert, ScrollView, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../StyleSheets/Edit_Screen.style.js';
import { useEffect, useState } from 'react'
import Card from '../Components/Character_Card'
//import UpDown from '../Components/Item_UpDown'

//Deletes Data and returns to list screen
async function deleteHandle(key, navigation) {
  await AsyncStorage.removeItem(key)
  navigation.goBack()
}

async function getHandle(key, setItem) {

  //Gets character data from key
  try {
    gotten =  await AsyncStorage.getItem(key)
    } catch(e) {
      console.warn(e)
    }
    
    //parses character json to dictionary
    temp = gotten != null ? JSON.parse(gotten) : null

    //sets state hook to parsed data
    setItem(temp)
}

async function saveHandle(key, item, navigation) {
  const jsonValue = JSON.stringify(item)

  try {
    gotten =  await AsyncStorage.setItem(key, jsonValue)
    } catch(e) {
      console.warn(e)
    }
  
    navigation.goBack()
}

//Displays alert on the user screen
function createTwoButtonAlert(key, navigation) {
  Alert.alert(
    "Warning!",
    "You are about to delete this character. Do you want to continue with this deletion?",
    [
      //Cancels deletion
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      //Deletes data
      { text: "Yes", 
        onPress:() => deleteHandle(key, navigation) }
    ]
  );
}

function Increment(item, setItem){
  item.attk = String(parseInt(item.attk) + 1)
  setItem(item)
}

//Screen to be rendered
export default function EditScreen({ route }) {
  const [item, setItem] = useState({})
  const [attkText, setAttkText] = useState()
  const [defnText, setDefnText] = useState()
  const [bodyText, setBodyText] = useState()
  const [mindText, setMindText] = useState()
  const [gold, setGold] = useState()

  const navigation = useNavigation();
  const key = route.params.key

  useEffect(() => {
    getHandle(key, setItem, setAttkText, setDefnText, setBodyText, setMindText)
  }, [])

  return (
    // Placeholder screen
    <SafeAreaView>
      <ScrollView>
        <TextInput style={styles.header}>{item.name}</TextInput>
        <TextInput style={styles.subheader}>{item.clss}</TextInput>
    
        <View style={styles.row}>
            <View style={styles.box}>
                <Text>Attack</Text>
                <Button
                  onPress={() => {
                    temp = item
                    temp.attk = String(parseInt(temp.attk) + 1)
                    setItem(temp)
                    setAttkText(temp.attk)
                  }}
                  title="+"
                />
                <TextInput
                  
                >{item.attk}</TextInput>
                <Button
                  onPress={() => {
                    temp = item
                    if(temp.attk > 1){
                    temp.attk = String(parseInt(temp.attk) - 1)
                    }
                    setItem(temp)
                    setAttkText(temp.attk)
                  }}
                  title="-"
                />

            </View>
            <View style={styles.box}>
                <Text>Defense</Text>
                <Button
                  onPress={() => {
                    temp = item
                    temp.defn = String(parseInt(temp.defn) + 1)
                    setItem(temp)
                    setDefnText(temp.defn)
                  }}
                  title="+"
                />
                <TextInput
                  
                >{item.defn}</TextInput>
                <Button
                  onPress={() => {
                    temp = item
                    if(temp.defn > 2){
                    temp.defn = String(parseInt(temp.defn) - 1)
                    }
                    setItem(temp)
                    setAttkText(temp.defn)
                  }}
                  title="-"
                />
            </View>
            <View style={styles.box}>
                <Text>Body</Text>
                <Button
                  onPress={() => {
                    temp = item
                    temp.body = String(parseInt(temp.body) + 1)
                    setItem(temp)
                    setAttkText(temp.body)
                  }}
                  title="+"
                />
                <TextInput
                  
                >{item.body}</TextInput>
                <Button
                  onPress={() => {
                    temp = item
                    if(temp.body > 0){
                    temp.body = String(parseInt(temp.body) - 1)
                    }
                    setItem(temp)
                    setAttkText(temp.body)
                  }}
                  title="-"
                />
            </View>
            <View style={styles.box}>
                <Text>Mind</Text>
                <Button
                  onPress={() => {
                    temp = item
                    temp.mind = String(parseInt(temp.mind) + 1)
                    setItem(temp)
                    setAttkText(temp.mind)
                  }}
                  title="+"
                />
                <TextInput
                  
                >{item.mind}</TextInput>
                <Button
                  onPress={() => {
                    temp = item
                    if(temp.mind > 0){
                    temp.mind = String(parseInt(temp.mind) - 1)
                    }
                    setItem(temp)
                    setAttkText(temp.mind)
                  }}
                  title="-"
                />
            </View>
        </View>
        <View style={styles.form_row}>
            <Text style={styles.label}>Gold</Text>
            <TextInput
                style={styles.input}
                onChangeText={setGold}
                placeholder = {item.gold}
                keyboardType='numeric'
            />
        </View>
        {/* updates hero inventory */}
        <View style={styles.form_row}>
            <Text style={styles.subheader}>Inventory</Text>
            <TextInput></TextInput>
        </View>
        {/* <View style={styles.form_row}>
            <TextInput
                style={styles.input_ML}
                onChangeText={this.heroChange("invt")}
                multiline={true}
                numberOfLines={10}
            />
        </View> */}
        <Text>Blah</Text>
        <Pressable
          onPress={() => createTwoButtonAlert(key, navigation)}
          style={styles.button}
        >
          <Text style={styles.text}>Delete Character</Text>
        </Pressable>
      </ScrollView>
      <View style={styles.but_row}>
        {/* unincorporated buttons */}
        <Pressable
            onPress={() => {saveHandle(key, item, navigation)}}
            style={styles.foot_btn}
        >
            <Text style={styles.text}>Save</Text>
        </Pressable>
        <Pressable
            onPress={() => {navigation.goBack()}}
            style={styles.foot_btn}
        >
            <Text style={styles.text}>Cancel</Text>
        </Pressable>
    </View>
    </SafeAreaView>
  );
}


