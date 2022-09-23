import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './Screens/Category'
import HomeScreen from './Screens/HomeScreen';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Loginwithotp from './Screens/Loginwithotp';
import Offers from './Screens/Offers';
import Account from './Screens/Account';
import Cart from './Screens/Cart';
import PDP from './Screens/PDP';
import ListPage from './Screens/ListPage';
import WebScreen from './Screens/WebScreen';

const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Splash'} >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="Loginwithotp" component={Loginwithotp} />
                <Stack.Screen name="Offers" component={Offers} />
                <Stack.Screen name="Account" component={Account} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="PDP" component={PDP} />
                <Stack.Screen name="ListPage" component={ListPage} />
                <Stack.Screen name="WebScreen" component={WebScreen} />
                
           
           
           
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack

const styles = StyleSheet.create({})