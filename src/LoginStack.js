import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Loginwithotp from './Screens/Loginwithotp';
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();
const LoginStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'} >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Loginwithotp" component={Loginwithotp} /> 

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginStack

const styles = StyleSheet.create({})