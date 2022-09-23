import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Colors } from './Colors';


const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const ListHeader = ({navigation}) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
                <EvilIcons name="chevron-left" size={40} color={Colors.baclIcon} style={styles.icons} />
            </TouchableOpacity>

            
            <View><Text style={{color:Colors.black,fontSize:14,fontWeight:'500'}}>Iphone 14 Pro Max</Text></View>
            
             <TouchableOpacity onPress={()=> navigation.navigate('Cart')} style={{alignItems:'center',right:40,position:'absolute'}}>
                <EvilIcons name="search" size={30} color={Colors.baclIcon} style={styles.icons} />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Cart')} style={{alignItems:'center',height:45,alignItems:'center',right:4,position:'absolute'}}>
                <Text style={{fontSize:12,color:'red',bottom:-5}}>0</Text>
                <AntDesign name="shoppingcart" size={20} color={Colors.baclIcon} style={styles.icons} />
            </TouchableOpacity>
        </View>
    )
}

export default ListHeader

const styles = StyleSheet.create({
    headerContainer: {
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icons:{
        marginHorizontal:5
        
    },
    searchinput: {
		width: w / 2,
		borderColor: Colors.black,
		backgroundColor: Colors.white,
		margin: 8,
		padding: 5,
		alignItems: 'center',
		borderRadius: 5,
		elevation: 8,
		borderWidth:0.8,borderColor:Colors.black
	},
})