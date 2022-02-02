import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ({screenName}) => {
    const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.header}>Hero Name</Text>
            <Text style={styles.subheader}>Hero Class</Text>
        
            <View style={styles.row}>
                <View style={styles.box}>
                    <Text>Attack</Text>
                    <Text></Text>
                </View>
                <View style={styles.box}>
                    <Text>Defense</Text>
                    <Text></Text>
                </View>
                <View style={styles.box}>
                    <Text>Body</Text>
                    <Text></Text>
                </View>
                <View style={styles.box}>
                    <Text>Mind</Text>
                    <Text></Text>
                </View>
            </View>
            <Pressable
                onPress={() => navigation.navigate(screenName)}
                title='Open Character Sheet'
                style={styles.button}
            >
                <Text style={styles.text}>Open Character Sheet</Text>

            </Pressable>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '90%',
        minHeight: '40%',
        maxWidth: '95%',
        borderColor: 'purple',
        borderWidth: 1,
        backgroundColor: 'pink',

    },
    card:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red',
        minHeight: '80%',
        width: '100%',

        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
        justifyContent: 'center',

        paddingTop: '3%',
        paddingBottom: '3%',
    },    
    row:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red',
        paddingTop: 10,
        minHeight: '20%',
        minWidth: '95%',
        paddingBottom: 5,

        flex: 10,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    box:{
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'blue',
        minHeight: '90%',
        maxWidth: '20%',

        flex:1,
        alignItems:'center',
    },
    button:{
        flex:4,
        alignItems:'center',
        justifyContent: 'center',
        minHeight: '10%',
        width: '60%',
        backgroundColor: 'red',
        margin: 1,
        padding: 5,
    },
    header:{
        fontSize:30,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
    },
    subheader:{
        fontSize:20,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
    },
    text:{
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
      },
  });

export default Card;