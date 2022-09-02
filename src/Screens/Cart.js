import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Common/Header'
import BottomTab from '../Common/BottomTab'

const Cart = ({navigation}) => {
		return (
				<View
      style={{
        flex: 1,
       
        alignItems: 'center',
        
				}}>
				<Header navigation={navigation} />
				


<Text>Cart</Text>

				<View style={{bottom:0,position:'absolute'}}>
					<BottomTab navigation={navigation} tabname='cat'/>
</View>
				
						</View>
		)
}

export default Cart

const styles = StyleSheet.create({})