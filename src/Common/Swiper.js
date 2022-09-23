import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import { Colors } from './Colors';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;


 const SwiperComponent = ({navigation}) => {
	
		return (
			<Swiper autoplay style={styles.wrapper} activeDotColor={Colors.white} showsButtons={false}>
								
				<TouchableOpacity onPress={()=> navigation.navigate('PDP',{itemDetails:''})} activeOpacity={0.8} style={styles.container}>
				<Image style={styles.sliderImage}
					 source={require('../Assets/mi.jpg')} />
				</TouchableOpacity>
				<TouchableOpacity onPress={()=> navigation.navigate('PDP',{itemDetails:''})} activeOpacity={0.8} style={styles.container}>
				<Image style={styles.sliderImage}
					 source={require('../Assets/iphone-x.webp')} />
				</TouchableOpacity>
				<TouchableOpacity onPress={()=> navigation.navigate('PDP',{itemDetails:''})} activeOpacity={0.8} style={styles.container}>
				<Image style={styles.sliderImage}
					 source={require('../Assets/s22.jpg')} />
				</TouchableOpacity>
				<TouchableOpacity onPress={()=> navigation.navigate('PDP',{itemDetails:''})} activeOpacity={0.8} style={styles.container}>
				<Image style={styles.sliderImage}
					 source={require('../Assets/mac.jpg')} />
				</TouchableOpacity>
				<TouchableOpacity onPress={()=> navigation.navigate('PDP',{itemDetails:''})} activeOpacity={0.8} style={styles.container}>
				<Image style={styles.sliderImage}
					 source={require('../Assets/iPhone-14.webp')} />
				</TouchableOpacity>
				
			</Swiper>
		)
	
}


export default SwiperComponent;
const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		
	},
	container: {
		marginHorizontal:10,
		borderRadius: 10
	},
	sliderImage: {
		width:'100%',height:'98%',borderRadius:10
	}
})






