import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './src/Screens/Category';
import Offers from './src/Screens/Offers';
import Account from './src/Screens/Account';
import Cart from './src/Screens/Cart';
import PDP from './src/Screens/PDP';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'HomeScreen'} >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Offers" component={Offers} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="PDP" component={PDP} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})