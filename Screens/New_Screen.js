import { StatusBar } from 'expo-status-bar';
import Card from '../Components/Character_Card.js'
import { StyleSheet, Text, View, Pressable, SafeAreaView, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function NewScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Create a Hero</Text>
        <ScrollView contentContainerStyle={styles.form}>
            <View style={styles.form_row}>
                <Text style={styles.label}>Hero Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={console.log("change")}
                    value={"text"}
                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.label}>Hero Class</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={console.log("change")}
                    value={"text"}
                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.label}>Attack</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={console.log("change")}
                    value={"text"}
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.label}>Defense</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={console.log("change")}
                    value={"text"}
                    keyboardType='numeric'

                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.label}>Body Points</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={console.log("change")}
                    value={"text"}
                    keyboardType='numeric'

                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.label}>Mind Points</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={console.log("change")}
                    value={"text"}
                    keyboardType='numeric'

                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.label}>Gold</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={console.log("change")}
                    value={"text"}
                    keyboardType='numeric'

                />
            </View>
            <View style={styles.form_row}>
                <Text style={styles.subheader}>Inventory</Text>
                
            </View>
            <View style={styles.form_row}>
                <TextInput
                    style={styles.input_ML}
                    onChangeText={console.log("change")}
                    value={"text"}
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
                onPress={console.log('save')}
                style={styles.foot_btn}
            >
                <Text style={styles.text}>Save</Text>
            </Pressable>
            <Pressable
                onPress={console.log('cancel')}
                style={styles.foot_btn}
            >
                <Text style={styles.text}>Cancel</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    form:{
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'white',
        width: '90%',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    form_row:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red',
        minHeight: 50,
        minWidth: '95%',
        margin:10,
        flex: 0,
        
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
    but_row:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red',
        minHeight: '10%',
        minWidth: '95%',
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
    foot_btn:{
        borderWidth: 1,
        borderColor: 'blue',
        width: '40%',
        minHeight: '100%',

        alignItems: 'center',
        justifyContent: "center",
    },
    form_btn:{
        borderWidth: 1,
        borderColor: 'blue',
        minWidth: '40%',
        maxWidth: '60%',
        minHeight: 60,
        margin: 5,
        flex: 0,
        alignItems: 'center',
        justifyContent: "center",
    },
    header:{
        borderWidth: 1,
        borderColor: 'blue',

        fontSize:30,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        
        padding: '2%',
    },
    subheader:{
        fontSize:20,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
    },
    label:{
        fontSize: 20,
        flex: 0,
        minWidth: '40%',
        maxWidth: '45%',
    },
    input:{
        fontSize: 20,
        flex: 0,
        minWidth: '40%',
        maxWidth: '45%',
        borderWidth: 2,
        borderColor: 'grey',
        textAlign: 'center',
    },
    input_ML:{
        fontSize: 20,
        flex: 0,
        minWidth: '80%',
        maxWidth: '80%',
        borderWidth: 2,
        borderColor: 'grey',
        textAlign: 'left',
        textAlignVertical: 'top',
    },
    text:{
        fontSize: 20,
    },
    }
);