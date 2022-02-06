import { StyleSheet, Text, View, Pressable, SafeAreaView, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useState } from 'react';
import character from '../Components/Character_Class.js';
import styles from '../StyleSheets/New_Screen.style.js';


class NewScreen extends React.Component{
    constructor(props) {;
        super(props);
        this.state = {
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
    }
    
    heroChange(name) {
        return (text) => {
            this.setState({ [name]:text})
        }
    }

    componentDidUpdate(){
        console.log(this.state);
    }

  render () {
      return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Create a Hero</Text>
            <ScrollView contentContainerStyle={styles.form}>
                <View style={styles.form_row}>
                    <Text style={styles.label}>Hero Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.heroChange("name")}
                    />
                </View>
                <View style={styles.form_row}>
                    <Text style={styles.label}>Hero Class</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.heroChange("clss")}
                    />
                </View>
                <View style={styles.form_row}>
                    <Text style={styles.label}>Attack</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.heroChange("attk")}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.form_row}>
                    <Text style={styles.label}>Defense</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.heroChange("defn")}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.form_row}>
                    <Text style={styles.label}>Body Points</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.heroChange("body")}
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.form_row}>
                    <Text style={styles.label}>Mind Points</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.heroChange("mind")}
                        keyboardType='numeric'

                    />
                </View>
                <View style={styles.form_row}>
                    <Text style={styles.label}>Gold</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.heroChange("gold")}
                        keyboardType='numeric'
                    />
                </View>
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
                    onPress={console.log("save")}
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