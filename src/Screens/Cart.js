import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Common/Header'
import BottomTab from '../Common/BottomTab'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../Common/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartHeader from '../Common/CartHeader';


const CartItems = [
	{ id: 0, price: '10000', ddate: 'Mon Sep 12' },
	{ id: 1, price: '12000', ddate: 'Tue Sep 13' },
	{ id: 2, price: '13000', ddate: 'Wed Sep 14' },
]

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const Cart = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
			}}>
			<CartHeader navigation={navigation} />
			<ScrollView style={{ flex: 1 }}>

				<View style={{ width: w, height: h, marginVertical: 10 }}>
					<FlatList
						showsHorizontalScrollIndicator={false}
						data={CartItems}
						keyExtractor={(item, index) => (item.id)}
						renderItem={({ item, index }) => {
							return (
								<View style={{ backgroundColor: '#fff', marginVertical: 10, width: w, marginVertical: 10, height: w / 2 }}>
									<View style={{ flexDirection: 'row', alignItems: 'center', width: w }}>
										<Image style={{ height: 60, width: 60, borderRadius: 10, margin: 10 }} source={{ uri: 'https://lh3.googleusercontent.com/UWBPU_X7CmuQWj8PxKBnGcWXNfxc_RAmxLQm75-U9scQt1HdI_qj3m4Lzv8avIBx02_vyepb_qH_zO9QacIvmBC90ntaf_MkbKny5xqZPsuw7-C7RjKIDH70fGTgBMzC8M-5=s512-c' }} />
										<Text style={{ width: w / 1.3, color: '#000', fontSize: 16 }}>Verient Cool Casual  sdf sport  tit jkhf jf </Text>
									</View>
									<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: w }}>
										<TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 0.5, borderColor: '#000', borderRadius: 5, width: 70, marginHorizontal: 10 }}>
											<Text style={{ color: '#000', padding: 5, textAlign: 'center', fontSize: 12 }}>Qty: 1  <AntDesign name="caretdown" size={12} color={'#000'} style={{}} /></Text>
										</TouchableOpacity>
										<View style={{ flexDirection: 'row' }}>
											<Text style={{ fontSize: 15, textDecorationLine: 'line-through', color: 'gray' }}>₹1000</Text>
											<Text style={{ color: '#000', paddingHorizontal: 10, fontSize: 18, fontWeight: '700' }}>₹{item.price}</Text>
											<Text style={{ color: Colors.themeColor, paddingHorizontal: 10, fontSize: 18, fontWeight: '700' }}>85% off</Text>
										</View>
										<TouchableOpacity style={{ marginHorizontal: 10, borderRadius: 5 }}>
											<MaterialCommunityIcons name="delete" size={25} color={'gray'} style={styles.icons} />
										</TouchableOpacity>
									</View>
									{/* Delevery By */}
									<View style={{ flexDirection: 'row', width: w, alignItems: 'center', paddingVertical: 8 }}>
										<Text style={{ paddingHorizontal: 10 }}>Delivery by {item.ddate}</Text>
										<View style={{ height: 16, width: 1, backgroundColor: '#000' }}></View>
										<Text style={{ paddingHorizontal: 10, color: 'green' }}>FREE Delivery</Text>
									</View>
								</View>
							)
						}}
					/>
				</View>


				{/* ................ */}

			</ScrollView>
			{/* ...............BOttom Tabs.................. */}
			<View style={{ bottom: 0, position: 'absolute' }}>
				<BottomTab navigation={navigation} currentpage='cart' />
			</View>

		</View>
	)
}

export default Cart

const styles = StyleSheet.create({})