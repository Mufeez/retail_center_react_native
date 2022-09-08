import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react';
import BottomTab from './../Common/BottomTab'
import SwiperComponent from '../Common/Swiper'

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const Cart = ({navigation}) => {
  return (
	<View>
		<View style={{width:w,height:h/2}}>
		<SwiperComponent navigation={navigation} />
		</View>
		
	  <BottomTab navigation={navigation} />
	</View>
  )
}

export default Cart

const styles = StyleSheet.create({})