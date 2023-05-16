import { StyleSheet, Text, View, Pressable, SafeAreaView, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import styles from '../StyleSheets/New_Screen.style.js';
import gen_styles from '../StyleSheets/General.style.js';


class NewScreen extends React.Component{
    //Stores variables in local class
    constructor(props) {;
        super(props);
        this.state = {
            key:"",
            name:"",
            clss:"",
            attk:"1", 
            defn:"2", 
            body:"0", 
            mind:"0", 
            gold:"0", 
            invt:"",
            qnme:"",
            qcnt:"0",
        };

        this.heroChange = this.heroChange.bind(this);

        this.setData = this.setData.bind(this);
    }

    // Writes data to system storage
    async setData(navigation) {
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
        navigation.goBack()
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
        const { navigation } = this.props;

        return(
            
            <SafeAreaView style={styles.container}>
                <Text style={gen_styles.header}>Create a Hero</Text>
                {/* beginning of form to instantiate character stats */}
                <ScrollView contentContainerStyle={gen_styles.form}>
                    {/* updates character name */}
                    <View style={gen_styles.center_form_row}>
                        <Text style={gen_styles.label}>Hero Name</Text>
                        <TextInput
                            style={gen_styles.input}
                            onChangeText={this.heroChange("name")}
                        />
                    </View>
                    {/* updates hero class */}
                    <View style={gen_styles.center_form_row}>
                        <Text style={gen_styles.label}>Hero Class</Text>
                        <TextInput
                            style={gen_styles.input}
                            onChangeText={this.heroChange("clss")}
                        />
                    </View>
                    {/* updates hero attack */}
                    <View style={gen_styles.center_form_row}>
                        <Text style={gen_styles.label}>Attack</Text>
                        <TextInput
                            style={gen_styles.input}
                            onChangeText={this.heroChange("attk")}
                            keyboardType='numeric'
                        />
                    </View>
                    {/* updates hero defense */}
                    <View style={gen_styles.center_form_row}>
                        <Text style={gen_styles.label}>Defense</Text>
                        <TextInput
                            style={gen_styles.input}
                            onChangeText={this.heroChange("defn")}
                            keyboardType='numeric'
                        />
                    </View>
                    {/* updates hero body points */}
                    <View style={gen_styles.center_form_row}>
                        <Text style={gen_styles.label}>Body Points</Text>
                        <TextInput
                            style={gen_styles.input}
                            onChangeText={this.heroChange("body")}
                            keyboardType='numeric'
                        />
                    </View>
                    {/* updated hero mind points */}
                    <View style={gen_styles.center_form_row}>
                        <Text style={gen_styles.label}>Mind Points</Text>
                        <TextInput
                            style={gen_styles.input}
                            onChangeText={this.heroChange("mind")}
                            keyboardType='numeric'

                        />
                    </View>
                    {/* updates hero gold */}
                    <View style={gen_styles.center_form_row}>
                        <Text style={gen_styles.label}>Gold</Text>
                        <TextInput
                            style={gen_styles.input}
                            onChangeText={this.heroChange("gold")}
                            keyboardType='numeric'
                        />
                    </View>
                    {/* updates hero inventory */}
                    <View style={gen_styles.center_form_row}>
                        <Text style={gen_styles.subheader}>Inventory</Text>
                        
                    </View>
                    <View style={gen_styles.center_form_row}>
                        <TextInput
                            style={gen_styles.input_ML}
                            onChangeText={this.heroChange("invt")}
                            multiline={true}
                            numberOfLines={10}
                        />
                    </View>
                    <View style={gen_styles.center_form_row}>
                        <Text style={gen_styles.subheader}>Campaign Progress</Text>
                        
                    </View>                    
                    <View style={gen_styles.center_form_row}>
                        <Text style={gen_styles.label}>Campaign Name</Text>
                        <TextInput
                            style={gen_styles.input}
                            onChangeText={this.heroChange("qnme")}
                        />
                    </View>
                    {/* updates hero defense */}
                    <View style={gen_styles.center_form_row}>
                        <Text style={gen_styles.label}>Completed Quests</Text>
                        <TextInput
                            style={gen_styles.input}
                            onChangeText={this.heroChange("qcnt")}
                            keyboardType='numeric'
                        />
                    </View>

                    {/* unincorporated button to clear all textinputs */}
                    {/* <View style={gen_styles.center_form_row}>
                        <Pressable
                            onPress={console.log('clear')}
                            style={gen_styles.form_btn}
                        >
                            <Text style={gen_styles.text}>Clear Form</Text>
                        </Pressable>
                    </View> */}
                    
                </ScrollView>
                {/* Screen Footer */}
                <View style={gen_styles.but_row}>
                    {/* unincorporated buttons */}
                    <Pressable
                        onPress={() => {this.setData(navigation)}}
                        style={gen_styles.foot_btn}
                    >
                        <Text style={gen_styles.text}>Save</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {navigation.goBack()}}
                        style={gen_styles.foot_btn}
                    >
                        <Text style={gen_styles.text}>Cancel</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        )
    };
}

export default NewScreen;