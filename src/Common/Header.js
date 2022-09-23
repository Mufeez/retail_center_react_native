import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from './Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';



const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const Header = ({currentScreen}) => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.brandtext}>{currentScreen}</Text>
			
			<TouchableOpacity style={styles.searchbutton}>
			<AntDesign name="search1" size={20} color={Colors.baclIcon} style={styles.icons} />
				
			</TouchableOpacity>
			<TouchableOpacity onPress={()=> navigation.navigate('Cart')} style={{alignItems:'center',height:45,alignItems:'center',right:4,position:'absolute'}}>
                <Text style={{fontSize:12,color:'red',bottom:-5}}>0</Text>
                <AntDesign name="shoppingcart" size={20} color={Colors.baclIcon} style={styles.icons} />
            </TouchableOpacity>
			{/* .............. */}

		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: Colors.white,
		width: w,
		height: 45,
		justifyContent: 'space-around',
		flexDirection: 'row',
		alignItems: 'center',
		elevation: 2


	},
	brandtext: {
		fontSize: 18,
		color: Colors.blackText,
		fontWeight: '500'
	},
	searchinput: {
		width: w / 2,
		borderColor: Colors.black,
		backgroundColor: Colors.c,
		margin: 8,
		padding: 5,
		alignItems: 'center',
		borderRadius: 5,
		elevation: 8,
		borderWidth:0.3,borderColor:Colors.black
	},
	searchbutton: {
		
	
		
	},
	searchicon: {
		padding: 4,
		color: Colors.blackText,
		fontSize: 13,
		fontWeight: '600',

	},
	icons:{
        marginHorizontal:5
        
    },

})