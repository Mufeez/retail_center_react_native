import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from './Screens/Cart'
import Category from './Screens/Category'
import HomeScreen from './Screens/HomeScreen';
import Splash from './Screens/Splash';

const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Splash'} >
            <Stack.Screen name="Splash" component={Splash} />

                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Category" component={Category} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack

const styles = StyleSheet.create({})