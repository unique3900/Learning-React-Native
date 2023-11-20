import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View,Image, Button, TextInput } from 'react-native';
import AppWithState from './Components/AppWithState';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import FirstScreen from './Components/FirstScreen';
import PrintProps from './Components/PrintProps';
import Todo from './Components/Todo';

export default function App() {

  const Stack = createStackNavigator();
  return (
    // <NavigationContainer>
        
    //     <Stack.Navigator initialRouteName="FirstScreen">
    //     <Stack.Screen name="FirstScreen" component={FirstScreen} />
    //     <Stack.Screen name="PrintProps" component={PrintProps} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={style.container}>
      <Todo/>
    </View>

  );
}
const style = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:"#1E1A3C"
  }
})
