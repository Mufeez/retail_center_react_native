import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'



const Splash = ({navigation}) => {

    setTimeout(() => {
        navigation.navigate('HomeScreen')
    }, 2000);
  return (

    <View style={{flex:1,backgroundColor:'#ccc',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'#000',fontSize:60,elevation:10,fontWeight:'500'}}>Retail Center</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})