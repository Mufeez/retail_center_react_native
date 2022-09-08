import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginStack from './src/LoginStack'
import MainStack from './src/MainStack'


const user = ''
const App = () => {
  return (
    <>
  {user == 'Sohail' ?

<MainStack />
:
<LoginStack  />
}
</>      
  )
}

export default App

const styles = StyleSheet.create({})