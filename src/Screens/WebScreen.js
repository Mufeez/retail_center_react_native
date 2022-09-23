import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const WebScreen = ({route}) => {
    const Url = route.params.url
  return (
    <View style={{flex:1}}>
      <WebView source={{ uri: 'https://www.retailcenter.io/'+Url}} 
     />
    </View>
  )
}

export default WebScreen

const styles = StyleSheet.create({})