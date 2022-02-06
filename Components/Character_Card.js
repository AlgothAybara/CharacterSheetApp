import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../StyleSheets/Character_Card.style.js';

// Custom component to be filled with passed data
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

export default Card;