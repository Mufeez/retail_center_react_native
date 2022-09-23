import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../Common/Header'
import BottomTab from '../Common/BottomTab'
import { Colors } from '../Common/Colors'

const Cat = [
	{ id: 0, img: 'https://img.xfinitymobile.com/image/upload/c_fit,f_auto,q_auto,fl_lossy/v1648042616/client/v2/images/iPhone-5G-300-off/iPhone-5G-300-off-shop-banner-1280.png', catname: 'Mobiles' }
]

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const Category = ({ navigation }) => {
	return (
		<View
			style={{ flex: 1, alignItems: 'center', backgroundColor: Colors.white }}>
			<Header currentScreen={'Category'} navigation={navigation} />



			<View style={[styles.productsContainer, { flex:1 }]}>
				
				{/*  */}
				<FlatList
					style={{ flex: 1 }}
					data={Cat}
					numColumns={3}
					showsHorizontalScrollIndicator={false}
					renderItem={({ item, index }) => (
						<View
							style={{ margin: 5, backgroundColor: Colors.white, width: 100, height: 120 }}
							key={item.id}
						>
							<TouchableOpacity onPress={() => navigation.navigate('ListPage')} activeOpacity={0.8} style={{borderRadius:80,backgroundColor:'red',alignItems:'center'}}>
								<ImageBackground
									style={{ width: 80, height: 80,margin:5 }}
									source={{
										uri: item.img
									}} />
							</TouchableOpacity>

						</View>
					)}
				/>

			</View>















			<View style={{ bottom: 0, position: 'absolute' }}>
				<BottomTab navigation={navigation} currentpage='cat' />
			</View>

		</View>
	)
}

export default Category

const styles = StyleSheet.create({})