import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, { Component } from 'react'
import Swiper from 'react-native-swiper';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
export default class SwiperComponent extends Component {
	render() {
		return (
			<Swiper style={styles.wrapper} showsButtons={false}>
				<View style={styles.container}>
				<Image style={styles.sliderImage}
					 source={require('../Assets/digi.jpg')} />
				</View>
				<View style={styles.container}>
				<Image style={styles.sliderImage}
					 source={require('../Assets/digi.jpg')} />
				</View>
				
			</Swiper>
		)
	}
}



const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	container: {
		margin: 5,
		borderRadius: 10
	},
	sliderImage: {
		width:'100%',height:'100%'
	}
})






