import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from './Colors';

const PDPHeader = ({navigation}) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={25} color={Colors.baclIcon} style={styles.icons} />
            </TouchableOpacity>

            <TouchableOpacity style={{alignItems:'center'}}>
                <Text style={{fontSize:12,color:'red',bottom:-5}}>0</Text>
                <AntDesign name="shoppingcart" size={25} color={Colors.baclIcon} style={styles.icons} />
            </TouchableOpacity>
        </View>
    )
}

export default PDPHeader

const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'


    },
    icons:{
        marginHorizontal:10
        
    }
})