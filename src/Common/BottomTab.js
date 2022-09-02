import { StyleSheet, Text, View ,Dimensions, TouchableOpacity} from 'react-native'
import React,{useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const BottomTab = ({navigation,props}) => {
	const [selected, setSelected] = useState(true);
	const [catSelect, setCatSelect] = useState(false);
	const [offerSelect, setOfferSelect] = useState(false);
	const [accountSelect, setAccountSelect] = useState(false);
	const [cartSelect, setCartSelect] = useState(false);

	const SelectedFC = (item) => {
		if (item.item == 'home') {
			setSelected(true);
			setCatSelect(false);
			setOfferSelect(false);
			setAccountSelect(false);
			setCartSelect(false);

		} else if(item.item == 'cat'){
			setCatSelect(true);
			setSelected(false);
			setOfferSelect(false);
			setAccountSelect(false);
			setCartSelect(false);

		} else if (item.item == 'offer') {
			setOfferSelect(true);
			setCatSelect(false);
			setSelected(false);
			setAccountSelect(false);
			setCartSelect(false);

	}
		else if (item.item == 'account') {
			setAccountSelect(true);
			setOfferSelect(false);
			setCatSelect(false);
			setSelected(false);
			setCartSelect(false);

		}
		else if (item.item == 'cart') {
			setCartSelect(true);
			setAccountSelect(false);
			setOfferSelect(false);
			setCatSelect(false);
			setSelected(false);

		}
		else {
			setSelected(false);
			setCatSelect(false);
			setOfferSelect(false);
			setAccountSelect(false);
			setCartSelect(false);
		}
	}
		return (
			<View style={styles.BottomtabContainer}>
				
				<TouchableOpacity onPress={()=> {SelectedFC({item : 'home'}),navigation.navigate('HomeScreen')}} style={styles.tabButton}>
					<FontAwesome name="home" size={25} color={selected ? "#2aa198" : 'gray'} style={styles.icons} />
					<Text style={[styles.tabitems,{color:selected ? "#2aa198" : 'gray'}]}>Home</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=> {SelectedFC({item : 'cat'}),navigation.navigate('Category')}} style={styles.tabButton}>
					<FontAwesome name="th-large" size={23} color={catSelect ? "#2aa198" : 'gray'} style={styles.icons} />
					<Text style={[styles.tabitems,{color:catSelect ? "#2aa198" : 'gray'}]}>Category</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=> {SelectedFC({item : 'offer'}),navigation.navigate('Offers')}} style={styles.tabButton}>
					<FontAwesome name="gift" size={25} color={offerSelect ? "#2aa198" : 'gray'} style={styles.icons} />
					<Text style={[styles.tabitems,{color:offerSelect ? "#2aa198" : 'gray'}]}>Offers</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=> {SelectedFC({item : 'account'}),navigation.navigate('Account')}} style={styles.tabButton}>
					<FontAwesome name="user" size={25} color={accountSelect ? "#2aa198" : 'gray'} style={styles.icons} />
					<Text style={[styles.tabitems,{color:accountSelect ? "#2aa198" : 'gray'}]}>Account</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={()=> {SelectedFC({item : 'cart'}),navigation.navigate('Cart')}} style={styles.tabButton}>
					<FontAwesome name="shopping-cart" size={25} color={cartSelect ? "#2aa198" : 'gray'} style={styles.icons} />
					<Text style={[styles.tabitems,{color:cartSelect ? "#2aa198" : 'gray'}]}>Cart</Text>
					
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