import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreeen" component={HomeScreen} options={{presentation:"modal",headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App