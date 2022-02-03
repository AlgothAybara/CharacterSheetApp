import { StatusBar } from 'expo-status-bar';
import Card from '../Components/Character_Card.js'
import { StyleSheet, Text, View, Pressable, SafeAreaView, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function NewScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Create a Hero</Text>
        <ScrollView contentContainerStyle={styles.form}>
            <View style={styles.form_row}></View>
            <View style={styles.form_row}></View>
            <View style={styles.form_row}></View>
            <View style={styles.form_row}></View>
            <View style={styles.form_row}></View>
            <View style={styles.form_row}></View>
            <View style={styles.form_row}></View>
            <View style={styles.form_row}></View>
            <View style={styles.form_row}></View>
            <View style={styles.form_row}></View>
            <View style={styles.form_row}></View>

        </ScrollView>
        <View style={styles.but_row}>
            <Pressable
                onPress={console.log('save')}
                style={styles.button}
            >
                <Text style={styles.text}>Save</Text>
            </Pressable>
            <Pressable
                onPress={console.log('cancel')}
                style={styles.button}
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
        justifyContent: 'space-evenly',
    },
    form:{
        borderWidth: 1,
        borderColor: 'red',
        
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '90%',
    },
    form_row:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red',
        paddingTop: 10,
        maxHeight: 50,
        minWidth: '95%',
        paddingBottom: 5,
        flex: 1,
        
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
    but_row:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red',
        paddingTop: 10,
        maxHeight: '10%',
        minWidth: '95%',
        paddingBottom: 5,

        flex: 10,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
    button:{
        borderWidth: 1,
        borderColor: 'blue',
        width: '40%',
        minHeight: '100%',

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
    }
);