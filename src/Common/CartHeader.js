import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const CartHeader = ({navigation}) => {
    return (
        <View style={{width:w,flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{paddingHorizontal:10,paddingVertical:8}}>
                <AntDesign name="arrowleft" size={25} color={'#000'} style={styles.icons} />
            </TouchableOpacity>
            <Text style={{paddingHorizontal:10,paddingVertical:8,fontSize:18,fontWeight:'500',color:'#000'}}>My Cart</Text>
        </View>
    )
}

export default CartHeader

const styles = StyleSheet.create({})