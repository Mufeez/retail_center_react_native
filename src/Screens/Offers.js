import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Common/Header'
import BottomTab from '../Common/BottomTab'

const Offers = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,

				alignItems: 'center',

			}}>
			<Header navigation={navigation} />



			<Text style={{ fontSize: 20, color: '#000' }}>Offers</Text>


			<View style={{ bottom: 0, position: 'absolute' }}>
				<BottomTab navigation={navigation} currentpage='offer' />
			</View>

		</View>
	)
}

export default Offers

const styles = StyleSheet.create({})