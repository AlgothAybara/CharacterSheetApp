import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../StyleSheets/Character_Card.style.js';

// Custom component to be filled with passed data
const Card = (props) => {
    // Sets local variables
    const navigation = useNavigation();
    // Data obtained from props
    const item = props.item;
    const screenName = props.screenName
  return (
    
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.header}>{item.name}</Text>
            <Text style={styles.subheader}>{item.clss}</Text>
        
            <View style={styles.row}>
                <View style={styles.box}>
                    <Text>Attack</Text>
                    <Text>{item.attk}</Text>
                </View>
                <View style={styles.box}>
                    <Text>Defense</Text>
                    <Text>{item.defn}</Text>
                </View>
                <View style={styles.box}>
                    <Text>Body</Text>
                    <Text>{item.body}</Text>
                </View>
                <View style={styles.box}>
                    <Text>Mind</Text>
                    <Text>{item.mind}</Text>
                </View>
            </View>
            <Pressable
                onPress={() => navigation.navigate(screenName, {key: item.key})}
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