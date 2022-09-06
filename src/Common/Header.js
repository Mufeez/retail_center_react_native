import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from './Colors';


const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const Header = ({ navigation, button }) => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View style={styles.headerContainer}>
			
				<TouchableOpacity onPress={() => setModalVisible(true)}>
					<FontAwesome name="navicon" size={25} color={'#fff'} style={styles.icons} />
				</TouchableOpacity>
			

			<Text style={styles.brandtext}>Retail Center</Text>
			<View style={{ flexDirection: 'row', height: 50, width: '50%' }}>
				<TextInput
					style={styles.searchinput}
					placeholder="Search"
					color={'#000'}
					placeholderTextColor={'#000'}
				/>
				<TouchableOpacity style={styles.searchbutton}>
					<FontAwesome name="search" size={20} color={'#000'} style={{}} />
				</TouchableOpacity>
			</View>

			{/* .........Menu...... */}
			<Modal
				animationType="slide-left"
				transparent={true}
				visible={modalVisible}
			/*  onRequestClose={() => {
				 Alert.alert("Modal has been closed.");
				 setModalVisible(!modalVisible);
			 }} */
			>
				<Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.centeredView}>
					<ScrollView style={styles.modalView}>
						<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{ alignItems: 'center', marginTop: 35, justifyContent: 'space-between', flexDirection: 'row', }}>
							<View style={{ flexDirection: 'row', width: w / 3.2, marginHorizontal: 15, alignItems: 'center' }}>
								<MaterialCommunityIcons name="home-outline" color={Colors.themeColor} size={18} />
								<Text style={styles.menutextStyle}>Home</Text>
							</View>
							<MaterialCommunityIcons name="chevron-right" color={Colors.themeColor} size={18} style={{ marginHorizontal: 40 }} />
						</TouchableOpacity>

						<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
							<View style={{ flexDirection: 'row', width: w / 3.2, marginHorizontal: 15, alignItems: 'center' }}>
								<MaterialIcons name="history-edu" color={Colors.themeColor} size={18} />
								<Text style={styles.menutextStyle}>History</Text>
							</View>
							<MaterialCommunityIcons name="chevron-right" color={Colors.themeColor} size={18} style={{ marginHorizontal: 40 }} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
							<View style={{ flexDirection: 'row', width: w / 3.2, marginHorizontal: 15, alignItems: 'center' }}>
								<MaterialIcons name="notifications-active" color={Colors.themeColor} size={18} />
								<Text style={styles.menutextStyle}>Notifications</Text>
							</View>
							<MaterialCommunityIcons name="chevron-right" color={Colors.themeColor} size={18} style={{ marginHorizontal: 40 }} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
							<View style={{ flexDirection: 'row', width: w / 3.2, marginHorizontal: 15, alignItems: 'center' }}>
								<Entypo name="chat" color={Colors.themeColor} size={18} />
								<Text style={styles.menutextStyle}>FAQ`s</Text>
							</View>
							<MaterialCommunityIcons name="chevron-right" color={Colors.themeColor} size={18} style={{ marginHorizontal: 40 }} />
						</TouchableOpacity>

						<TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
							<View style={{ flexDirection: 'row', width: w / 3.2, marginHorizontal: 15, alignItems: 'center' }}>
								<MaterialIcons name="touch-app" color={Colors.themeColor} size={18} />
								<Text style={styles.menutextStyle}>Rate This App</Text>
							</View>
							<MaterialCommunityIcons name="chevron-right" color={Colors.themeColor} size={18} style={{ marginHorizontal: 40 }} />
						</TouchableOpacity>




					</ScrollView>
				</Pressable>
			</Modal>



		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: '#2aa198',
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		elevation: 10,
		justifyContent: 'space-around',
width:w

	},
	menutextStyle:
	{
		color: Colors.themeColor, paddingVertical: 8, marginLeft: 20
	},

	brandtext: {
		fontSize: 18,
		color: '#fff',
		fontWeight: '500'
	},
	searchinput: {
		width: '70%',
		borderColor: '#000',
		backgroundColor: '#fff',
		margin: 8,
		padding: 5,
		alignItems: 'center',
		borderRadius: 5,
		elevation: 8
	},
	searchbutton: {
		width: '20%',
		borderColor: '#000',
		backgroundColor: '#fff',

		marginVertical: 8,
		alignItems: 'center',
		borderRadius: 5,
		elevation: 8,
		justifyContent: 'center'
	},
	searchicon: {
		paddingHorizontal: 4,
		color: '#000',
		fontSize: 12,
		fontWeight: '600',

	},
	icons: {
		paddingHorizontal: 10
	},
	centeredView: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "flex-start",
		backgroundColor: "rgba(61, 57, 59, 0.5)",


	},
	modalView: {
		margin: 0,
		backgroundColor: "rgba(210, 224, 220, 1)",
		shadowColor: "#000",
		flex: 1, borderTopRightRadius: 10, borderBottomRightRadius: 10
	}

})