import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../StyleSheets/Item_UpDown.style.js';

// Custom component to be filled with passed data
const UpDown = (props) => {
    // Sets local variables
    const navigation = useNavigation();
    // Data obtained from props
    const item = props.item;
  return (
    
    <View style={styles.container}>
        <View style={styles.updown}>
            <input
                name='name'
                placeholder='Item'
            />
            <input
                name='qty'
                placeholder='0'
            />
            <Button
                onPress={}
                >

            </Button>
        </View>
    </View>
  );
}

export default UpDown;