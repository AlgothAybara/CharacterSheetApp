import { StyleSheet, Text, View, Pressable, SafeAreaView, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import styles from '../StyleSheets/New_Screen.style.js';


class NewScreen extends React.Component{
    //Stores variables in local class
    constructor(props) {;
        super(props);
        this.state = {
            key:"",
            name:"",
            clss:"",
            attk:"", 
            defn:"", 
            body:"", 
            mind:"", 
            gold:"", 
            invt:"",
        };

        this.heroChange = this.heroChange.bind(this);

        this.setData = this.setData.bind(this);
    }

    // Writes data to system storage
    async setData() {
        try {
            // Sets unique key
            this.state.key = `@${Date.now().toString()}`
            console.log(this.state.key)
            // Changes format to storable data
            const jsonValue = JSON.stringify(this.state)
            console.log(jsonValue)
            //Writes data to storage
            await AsyncStorage.setItem(this.state.key, jsonValue)
        } catch (e) {
            console.warn(e)
        }
    }
    
    //allows update of variables
    heroChange(name) {
        return (text) => {
            this.setState({ [name]:text})
        }
    }

    //debugging tool
    componentDidUpdate(){
        console.log(this.state);
    }


    render () {
        return(
            
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Create a Hero</Text>
                {/* beginning of form to instantiate character stats */}
                <ScrollView contentContainerStyle={styles.form}>
                    {/* updates character name */}
                    <View style={styles.form_row}>
                        <Text style={styles.label}>Hero Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={this.heroChange("name")}
                        />
                    </View>
                    {/* updates hero class */}
                    <View style={styles.form_row}>
                        <Text style={styles.label}>Hero Class</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={this.heroChange("clss")}
                        />
                    </View>
                    {/* updates hero attack */}
                    <View style={styles.form_row}>
                        <Text style={styles.label}>Attack</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={this.heroChange("attk")}
                            keyboardType='numeric'
                        />
                    </View>
                    {/* updates hero defense */}
                    <View style={styles.form_row}>
                        <Text style={styles.label}>Defense</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={this.heroChange("defn")}
                            keyboardType='numeric'
                        />
                    </View>
                    {/* updates hero body points */}
                    <View style={styles.form_row}>
                        <Text style={styles.label}>Body Points</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={this.heroChange("body")}
                            keyboardType='numeric'
                        />
                    </View>
                    {/* updated hero mind points */}
                    <View style={styles.form_row}>
                        <Text style={styles.label}>Mind Points</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={this.heroChange("mind")}
                            keyboardType='numeric'

                        />
                    </View>
                    {/* updates hero gold */}
                    <View style={styles.form_row}>
                        <Text style={styles.label}>Gold</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={this.heroChange("gold")}
                            keyboardType='numeric'
                        />
                    </View>
                    {/* updates hero inventory */}
                    <View style={styles.form_row}>
                        <Text style={styles.subheader}>Inventory</Text>
                        
                    </View>
                    <View style={styles.form_row}>
                        <TextInput
                            style={styles.input_ML}
                            onChangeText={this.heroChange("invt")}
                            multiline={true}
                            numberOfLines={10}
                        />
                    </View>
                    {/* unincorporated button to clear all textinputs */}
                    <View style={styles.form_row}>
                        <Pressable
                            onPress={console.log('clear')}
                            style={styles.form_btn}
                        >
                            <Text style={styles.text}>Clear Form</Text>
                        </Pressable>
                    </View>
                    
                </ScrollView>
                {/* Screen Footer */}
                <View style={styles.but_row}>
                    {/* unincorporated buttons */}
                    <Pressable
                        onPress={this.setData}
                        style={styles.foot_btn}
                    >
                        <Text style={styles.text}>Save</Text>
                    </Pressable>
                    <Pressable
                        onPress={console.log("clear")}
                        style={styles.foot_btn}
                    >
                        <Text style={styles.text}>Cancel</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        )
    };
}

export default NewScreen;