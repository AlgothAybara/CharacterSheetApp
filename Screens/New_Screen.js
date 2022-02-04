import { StyleSheet, Text, View, Pressable, SafeAreaView, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import character from '../Components/Character_Class.js'
import styles from '../StyleSheets/New_Screen.style.js';

function save_onPress(name, clss, attk, defn, body, mind, gold, invt){
    console.log(name, clss, attk, defn, body, mind, gold, invt)
}

function clear_onPress(name, clss, attk, defn, body, mind, gold, invt){
    let l = [name, clss, attk, defn, body, mind, gold, invt]
    l.forEach(element => {
        element((current) => "")
    });
}

export default function NewScreen() {
    const [h_name, setH_name] = useState("")
    const [h_clss, setH_clss] = useState("")
    const [h_attk, setH_attk] = useState("")
    const [h_defn, setH_defn] = useState("")
    const [h_body, setH_body] = useState("")
    const [h_mind, setH_mind] = useState("")
    const [h_gold, setH_gold] = useState("")
    const [h_invt, setH_invt] = useState("")
    
    
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Create a Hero</Text>
        <ScrollView contentContainerStyle={styles.form}>
            <View style={styles.form_row}>
                <Text style={styles.label}>Hero Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setH_name}
                    value={h_name}
                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.label}>Hero Class</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setH_clss}
                    value={h_clss}
                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.label}>Attack</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setH_attk}
                    value={h_attk}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.label}>Defense</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setH_defn}
                    value={h_defn}
                    keyboardType='numeric'

                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.label}>Body Points</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setH_body}
                    value={h_body}
                    keyboardType='numeric'

                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.label}>Mind Points</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setH_mind}
                    value={h_mind}
                    keyboardType='numeric'

                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.label}>Gold</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setH_gold}
                    value={h_gold}
                    keyboardType='numeric'

                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.subheader}>Inventory</Text>
                
            </View>
            <View style={styles.form_row}>
                <TextInput
                    style={styles.input_ML}
                    onChangeText={setH_invt}
                    value={h_invt}
                    multiline={true}
                    numberOfLines={10}
                />
            </View>
            <View style={styles.form_row}>
                <Pressable
                    onPress={console.log('clear')}
                    style={styles.form_btn}
                >
                    <Text style={styles.text}>Clear Form</Text>
                </Pressable>
            </View>
            
        </ScrollView>
        <View style={styles.but_row}>
            <Pressable
                onPress={save_onPress(h_name,h_clss,h_attk,h_defn,h_mind,h_body,h_gold,h_invt)}
                style={styles.foot_btn}
            >
                <Text style={styles.text}>Save</Text>
            </Pressable>
            <Pressable
                onPress={clear_onPress(setH_name,setH_clss,setH_attk,setH_defn,setH_mind,setH_body,setH_gold,setH_invt)}
                style={styles.foot_btn}
            >
                <Text style={styles.text}>Cancel</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  );
}