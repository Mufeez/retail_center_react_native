import { StyleSheet, Text, View ,Dimensions, TouchableOpacity} from 'react-native'
import React,{useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from './Colors';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const BottomTab = ({navigation,currentpage}) => {
	
	
		return (
			<View style={styles.BottomtabContainer}>
				
				<TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')} style={styles.tabButton}>
					<FontAwesome name="home" size={20} color={currentpage == 'home' ? Colors.black : Colors.gray} style={styles.icons} />
					<Text style={[styles.tabitems,{color:currentpage == 'home' ? Colors.black : Colors.gray}]}>Home</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=> navigation.navigate('Category')} style={styles.tabButton}>
					<FontAwesome name="th-large" size={18} color={currentpage == 'cat' ? Colors.black : Colors.gray} style={styles.icons} />
					<Text style={[styles.tabitems,{color:currentpage == 'cat'  ? Colors.black : Colors.gray}]}>Category</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=> navigation.navigate('Offers')} style={styles.tabButton}>
					<FontAwesome name="gift" size={20} color={currentpage == 'offer'  ? Colors.black : Colors.gray} style={styles.icons} />
					<Text style={[styles.tabitems,{color:currentpage == 'offer'  ? Colors.black : Colors.gray}]}>Offers</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=> navigation.navigate('Account')} style={styles.tabButton}>
					<FontAwesome name="user" size={20} color={currentpage == 'acc' ? Colors.black : Colors.gray} style={styles.icons} />
					<Text style={[styles.tabitems,{color:currentpage == 'acc' ? Colors.black : Colors.gray}]}>Account</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=> navigation.navigate('Cart')} style={styles.tabButton}>
					<FontAwesome name="shopping-cart" size={20} color={currentpage == 'cart' ? Colors.black : Colors.gray} style={styles.icons} />
					<Text style={[styles.tabitems,{color:currentpage == 'cart' ? Colors.black : Colors.gray}]}>Cart</Text>
					
				</TouchableOpacity>
						
				</View>
		)
}

export default BottomTab

const styles = StyleSheet.create({
	BottomtabContainer: {
		backgroundColor: Colors.white,
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: w,
		
	},
	tabitems: {
		padding: 4,
		paddingTop:-2,
		color: Colors.black,
		fontSize: 10,
		fontWeight: '700',
		letterSpacing:1
	},
	tabButton: {
		backgroundColor: Colors.white,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical:3
	},
	icons: {
		padding: 4,
		paddingBottom:-5,
		paddingHorizontal:5
	}
})