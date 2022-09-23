import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'



const Splash = ({ navigation }) => {
const user = '001'
  setTimeout(() => {
    if(user == '001'){
      navigation.navigate('HomeScreen')
    }else{
      navigation.navigate('Login')
    }
    
  }, 2000);
  return (
  < View style = {{ flex: 1, backgroundColor: '#ccc', alignItems: 'center', justifyContent: 'center' }
}>
  <Text style={{ color: '#000', fontSize: 60, elevation: 10, fontWeight: '500' }}>Retail Center</Text>
    </View >
  )
}

export default Splash

const styles = StyleSheet.create({})