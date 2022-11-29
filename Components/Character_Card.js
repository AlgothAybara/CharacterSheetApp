import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../StyleSheets/Character_Card.style.js';
import gen_styles from '../StyleSheets/General.style.js';


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
            <Text style={gen_styles.header}>{item.name}</Text>
            <Text style={gen_styles.subheader}>{item.clss}</Text>
        
            <View style={gen_styles.row}>
                <View style={gen_styles.box}>
                    <Text>Attack</Text>
                    <Text>{item.attk}</Text>
                </View>
                <View style={gen_styles.box}>
                    <Text>Defense</Text>
                    <Text>{item.defn}</Text>
                </View>
                <View style={gen_styles.box}>
                    <Text>Body</Text>
                    <Text>{item.body}</Text>
                </View>
                <View style={gen_styles.box}>
                    <Text>Mind</Text>
                    <Text>{item.mind}</Text>
                </View>
            </View>
            <Pressable
                onPress={() => navigation.navigate(screenName, {key: item.key})}
                title='Open Character Sheet'
                style={styles.button}
            >
                <Text style={gen_styles.button}>Open Character Sheet</Text>

            </Pressable>
        </View>
    </View>
  );
}

export default Card;