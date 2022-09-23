import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTab from '../Common/BottomTab'
import Header from '../Common/Header'



const Account = ({navigation}) => {
  return (
	<View
			style={{
				flex: 1,
				alignItems: 'center',
			}}>
			<Header currentScreen={'Account'} navigation={navigation} />
			
			




















			
			<View style={{ bottom: 0, position: 'absolute' }}>
				<BottomTab navigation={navigation} currentpage='acc' />
			</View>
		</View>
  )
}

export default Account

const styles = StyleSheet.create({})