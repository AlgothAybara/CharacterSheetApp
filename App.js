import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './Screens/List_Screen';
import EditScreen from './Screens/Edit_Screen';
import NewScreen from './Screens/New_Screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="New" component={NewScreen} />
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}