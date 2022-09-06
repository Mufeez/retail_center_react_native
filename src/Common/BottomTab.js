import { StyleSheet, Text, View ,Dimensions, TouchableOpacity} from 'react-native'
import React,{useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const BottomTab = ({navigation,currentpage}) => {
	
	
		return (
			<View style={styles.BottomtabContainer}>
				
				<TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')} style={styles.tabButton}>
					<FontAwesome name="home" size={25} color={currentpage == 'home' ? "#2aa198" : 'gray'} style={styles.icons} />
					<Text style={[styles.tabitems,{color:currentpage == 'home' ? "#2aa198" : 'gray'}]}>Home</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=> navigation.navigate('Category')} style={styles.tabButton}>
					<FontAwesome name="th-large" size={23} color={currentpage == 'cat' ? "#2aa198" : 'gray'} style={styles.icons} />
					<Text style={[styles.tabitems,{color:currentpage == 'cat'  ? "#2aa198" : 'gray'}]}>Category</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=> navigation.navigate('Offers')} style={styles.tabButton}>
					<FontAwesome name="gift" size={25} color={currentpage == 'offer'  ? "#2aa198" : 'gray'} style={styles.icons} />
					<Text style={[styles.tabitems,{color:currentpage == 'offer'  ? "#2aa198" : 'gray'}]}>Offers</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=> navigation.navigate('Account')} style={styles.tabButton}>
					<FontAwesome name="user" size={25} color={currentpage == 'acc' ? "#2aa198" : 'gray'} style={styles.icons} />
					<Text style={[styles.tabitems,{color:currentpage == 'acc' ? "#2aa198" : 'gray'}]}>Account</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=> navigation.navigate('Cart')} style={styles.tabButton}>
					<FontAwesome name="shopping-cart" size={25} color={currentpage == 'cart' ? "#2aa198" : 'gray'} style={styles.icons} />
					<Text style={[styles.tabitems,{color:currentpage == 'cart' ? "#2aa198" : 'gray'}]}>Cart</Text>
					
				</TouchableOpacity>
						
				</View>
		)
}

export default BottomTab

const styles = StyleSheet.create({
	BottomtabContainer: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: w,
		
	},
	tabitems: {
		padding: 5,
		paddingTop:-2,
		color: '#2aa198',
		fontSize: 12,
		fontWeight: '500',
		letterSpacing:1
	},
	tabButton: {
		backgroundColor: '#fff',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical:5
	},
	icons: {
		padding: 5,
		paddingBottom:-5,
		paddingHorizontal:5
	}
})