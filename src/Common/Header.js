import { StyleSheet, Text, View,Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const Header = () => {
		return (
				<View style={styles.headerContainer}>
				<Text style={styles.brandtext}>Retail Center</Text>
				<TextInput
					style={styles.searchinput}
					placeholder="Search"
					placeholderTextColor={'#000'}

				/>
				<TouchableOpacity style={styles.searchbutton}>
					<Text	style={styles.searchicon}>Search</Text>
				</TouchableOpacity>
				{/* .............. */}
				
				</View>
		)
}

export default Header

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: '#2aa198',
		width: w,
		height: 45,
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
elevation:10

		
	},
	brandtext:{
		fontSize: 16,
		color: '#fff',
		fontWeight:'500'
	},
	searchinput: {
		width: w/2,
		borderColor: '#000',
		backgroundColor: '#fff',
		margin: 8,
		padding:5,
		alignItems: 'center',
		borderRadius: 5,
		elevation:8
	},
	searchbutton: {
		backgroundColor: '#fff',
		borderRadius: 5,
		elevation:8
	},
	searchicon: {
		padding: 4,
		color: '#000',
		fontSize: 13,
		fontWeight: '600',
		
	}
	
})