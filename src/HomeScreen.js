import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import HomeContainer from '../HomeContainer'
import BottomTab from './Common/BottomTab';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1,width:w}}>
      <HomeContainer navigation={navigation}/>
      {/* .........Bottom Tab............ */}
    
      {/* .........Bottom Tab............ */} 
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})