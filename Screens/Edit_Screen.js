import { Text, Pressable, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../StyleSheets/Edit_Screen.style.js';

async function deleteHandle(key, navigation) {
  await AsyncStorage.removeItem(key)
  navigation.goBack()
}

function createTwoButtonAlert(key, navigation) {
  Alert.alert(
    "Warning!",
    "You are about to delete this character. Do you want to continue with this deletion?",
    [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "Yes", 
        onPress:() => deleteHandle(key, navigation) }
    ]
  );
}

export default function EditScreen({ route }) {
  const navigation = useNavigation();
  const key = route.params.key

  return (
    // Placeholder screen
    <SafeAreaView>
      <Text>Blah</Text>
      <Pressable
        onPress={() => createTwoButtonAlert(key, navigation)}
        style={styles.button}
      >
        <Text style={styles.text}>Delete Character</Text>
      </Pressable>
    </SafeAreaView>
  );
}
