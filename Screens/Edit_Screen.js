import { Text, Pressable, SafeAreaView, View, Alert, ScrollView, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../StyleSheets/Edit_Screen.style.js';
import React, { useState } from 'react';


class EditScreen extends React.Component {
    //Stores variables in local class
    constructor(props) {
        super(props);
        this.state = {
            key: (temp = this.props.route.params),
            name: "",
            clss: "",
            attk: "",
            defn: "",
            body: "",
            mind: "",
            gold: "",
            invt: "",
            qnme: "",
            qcnt: "",
        };
        
        this.heroChange = this.heroChange.bind(this);
        this.setData = this.setData.bind(this);
    }

    //allows update of variables
    heroChange(name) {
        return (text) => {
            this.setState({ [name]:text})
        }
    }

    //Deletes Data and returns to list screen
    async deleteHandle(navigation) {
        await AsyncStorage.removeItem(this.state.key)
        navigation.goBack()
    }

    componentDidMount() {
        // Gets character data from key
        this.loadData(this.state.key.key)
    }

    async loadData(key) {
        try {
            gotten = await AsyncStorage.getItem(key)
        } catch (e) {
            console.warn(e)
        }

        // //parses character json to dictionary
        temp = gotten != null ? JSON.parse(gotten) : null

        //sets state to parsed data

        this.state.key = temp.key
        this.state.name = temp.name
        this.state.clss = temp.clss
        this.state.attk = temp.attk
        this.state.defn = temp.defn
        this.state.body = temp.body
        this.state.mind = temp.mind
        this.state.gold = temp.gold
        this.state.invt = temp.invt
        this.state.qnme = temp.qnme
        this.state.qcnt = temp.qcnt

        // console.log(this.state)
        this.forceUpdate()
    }

    async setData(navigation) {
        const jsonValue = JSON.stringify(this.state)

        try {
            gotten = await AsyncStorage.setItem(this.state.key, jsonValue)
        } catch (e) {
            console.warn(e)
        }

        navigation.goBack()
    }

    //Displays alert on the user screen
    createTwoButtonAlert(navigation) {
        Alert.alert(
            "Warning!",
            "You are about to delete this character. Do you want to continue with this deletion?",
            [
                //Cancels deletion
                {
                    text: "No",
                    //onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                //Deletes data
                {
                    text: "Yes",
                    onPress: () => this.deleteHandle(navigation)
                }
            ]
        );
    }

    render () {
        const { navigation } = this.props

        return (
            // Placeholder screen
            <SafeAreaView
                style={styles.container}
            >
                <ScrollView
                    contentContainerStyle={styles.form}
                >
                {/* Name Header */}
                <TextInput 
                    style={styles.header}
                    onChangeText={this.heroChange("name")}
                >
                    {this.state.name}
                </TextInput>
                {/* Class SubHeader */}
                <TextInput
                    style={styles.subheader}
                    onChangeText={this.heroChange("clss")}
                >
                    {this.state.clss}
                </TextInput>
            
                {/* UpDown Row */}
                <View style={styles.row}>
                    {/* Attack UpDown */}
                    <View style={styles.box}>
                        <Pressable
                            style={styles.updown_btn}
                            onPress={() => {
                                temp = this.state
                                temp.attk = String(parseInt(temp.attk) + 1)
                                this.state.attk = temp.attk
                                this.forceUpdate()
                            }}
                        >
                            <Text>+</Text>
                        </Pressable>
                        <Text>Attack</Text>
                        <Text>
                            {this.state.attk}
                        </Text>
                        <Pressable
                            style={styles.updown_btn}
                            onPress={
                                () => {
                                    if(this.state.attk > 1){
                                        temp = this.state
                                        temp.attk = String(parseInt(temp.attk) - 1)
                                        this.state.attk = temp.attk
                                        this.forceUpdate()
                                    }

                                }
                            }
                            >
                            <Text>-</Text>
                        </Pressable>
        
                    </View>
                    {/* Defense UpDown */}
                    <View style={styles.box}>
                        <Pressable
                            style={styles.updown_btn}   
                            onPress={() => {
                                temp = this.state
                                temp.defn = String(parseInt(temp.defn) + 1)
                                this.state.defn = temp.defn
                                this.forceUpdate()
                            }}
                            >
                            <Text>+</Text>
                        </Pressable>
                        <Text>Defense</Text>
                        <Text>
                            {this.state.defn}
                        </Text>
                        <Pressable
                            style={styles.updown_btn}
                            onPress={
                                () => {
                                    if(this.state.defn > 2){
                                        temp = this.state
                                        temp.defn = String(parseInt(temp.defn) - 1)
                                        this.state.defn = temp.defn
                                        this.forceUpdate()
                                    }
                                }
                            }
                            >
                            <Text>-</Text>
                        </Pressable>
                    </View>
                    {/* Body UpDown */}
                    <View style={styles.box}>
                        
                        <Pressable
                            style={styles.updown_btn}
                            onPress={() => {
                                temp = this.state
                                temp.body = String(parseInt(temp.body) + 1)
                                this.state.body = temp.body
                                this.forceUpdate()
                            }}
                            >
                            <Text>+</Text>
                        </Pressable>
                        <Text>Body</Text>
                        <Text>
                            {this.state.body}
                        </Text>
                        <Pressable
                            style={styles.updown_btn}
                            onPress={
                                () => {
                                    if(this.state.body > 0){
                                        temp = this.state
                                        temp.body = String(parseInt(temp.body) - 1)
                                        this.state.body = temp.body
                                        this.forceUpdate()
                                    }
                                }
                            }
                            >
                            <Text>-</Text>
                        </Pressable>
                    </View>
                    {/* Mind UpDown */}
                    <View style={styles.box}>
                        
                        <Pressable
                            style={styles.updown_btn}
                            onPress={() => {
                                temp = this.state
                                temp.mind = String(parseInt(temp.mind) + 1)
                                this.state.mind = temp.mind
                                this.forceUpdate()
                            }}
                            >
                            <Text>+</Text>
                        </Pressable>
                        <Text>Mind</Text>
                        <Text>
                            {this.state.mind}
                        </Text>
                        <Pressable
                            style={styles.updown_btn}
                            onPress={
                                () => {
                                    if(this.state.mind > 0){
                                        temp = this.state
                                        temp.mind = String(parseInt(temp.mind) - 1)
                                        this.state.mind = temp.mind
                                        this.forceUpdate()
                                        //console.log(this.state)
                                    }
                                }
                            }
                            >
                            <Text>-</Text>
                        </Pressable>
                    </View>
                </View>
                {/* Gold Row */}
                <View style={styles.form_row}>
                    <Text style={styles.label}>Gold</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={this.heroChange("gold")}
                        keyboardType='numeric'
                    >
                        {this.state.gold}
                    </TextInput>
                </View>
                {/* Inventory Row */}
                <Text style={styles.subheader}>Inventory</Text>

                <View style={styles.form_row}>
                      <TextInput
                          style={styles.input_ML}
                          onChangeText={this.heroChange("invt")}
                          multiline={true}
                          numberOfLines={10}
                      >
                          {this.state.invt}
                      </TextInput>
                </View>

                {/* Campaign Row */}
                <View style={styles.form_row}>
                    <TextInput
                        style={styles.subheader}
                        onChangeText={this.heroChange("qnme")}
                    >
                        {this.state.qnme}
                    </TextInput>
                </View>
                <View
                    style={styles.form_row}
                >
                    <Text style={styles.label}>Completed Quests:</Text>

                    <Pressable
                        // style={styles.updown_btn}
                        onPress={() => {
                            temp = this.state
                            temp.qcnt = String(parseInt(temp.qcnt) + 1)
                            this.state.qcnt = temp.qcnt
                            this.forceUpdate()
                        }}
                    >
                        <Text>+</Text>
                    </Pressable>
                    <Text style={styles.input}>
                        {this.state.qcnt}
                    </Text>
                    <Pressable
                        // style={styles.updown_btn}
                        onPress={
                            () => {
                                if(this.state.qcnt > 1){
                                    temp = this.state
                                    temp.qcnt = String(parseInt(temp.qcnt) - 1)
                                    this.state.qcnt = temp.qcnt
                                    this.forceUpdate()
                                }

                            }
                        }
                        >
                        <Text>-</Text>
                    </Pressable>
                </View>

                <View
                    style={styles.form_row}
                >
                    <Pressable
                        onPress={() => this.createTwoButtonAlert(navigation)}
                        style={styles.form_btn}
                    >
                        <Text style={styles.text}>Delete Character</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => this.loadData(this.state.key)}
                        style={styles.form_btn}
                    >
                        <Text style={styles.text}>Reset Form</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <View style={styles.but_row}>
                <Pressable
                    onPress={() => {this.setData(navigation)}}
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
    };
}

export default EditScreen;