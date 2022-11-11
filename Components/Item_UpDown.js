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
    
        <View style={styles.box}>
            <Text>Attack</Text>
            <Button
                onPress={() => {
                    temp = this.state
                    temp.attk = String(parseInt(temp.attk) + 1)
                    this.state.attk = temp.attk
                    this.forceUpdate()
                }}
                title="+"
            />
            <TextInput
                keyboardType='numeric'
            >
                {this.state.attk}
            </TextInput>
            <Button
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
                title="-"
            />
        </View>
    )
}

export default UpDown;