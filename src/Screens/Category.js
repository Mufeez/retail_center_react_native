import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Common/Header'
import BottomTab from '../Common/BottomTab'

const Category = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,

				alignItems: 'center',

			}}>
			<Header navigation={navigation} />



			<Text style={{ fontSize: 20, color: '#000' }}>Category</Text>








			<View style={{ bottom: 0, position: 'absolute' }}>
				<BottomTab navigation={navigation} currentpage='cat' />
			</View>

		</View>
	)
}

export default Category

const styles = StyleSheet.create({})