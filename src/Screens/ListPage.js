import { StyleSheet, Text, View, ScrollView, Dimensions, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../Common/Colors'
import ListHeader from '../Common/ListHaeder';
import Path from '../Helper/api';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTab from '../Common/BottomTab';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Footer from '../Common/Footer';


const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const ListPage = ({ navigation }) => {
    const [noData, setNoData] = useState(false);
    const [activity, setactivity] = useState(false);
    const [data, setData] = useState('')
    useEffect(() => {
        GetData()
    }, [])


    const GetData = () => {
        setactivity(true)
        axios.get(Path.all)
            .then(response => {
                if (response.data != '' && response.data != null && response.data != undefined) {
                    // console.log(response.data);
                    setData(response.data.products);
        setactivity(false)

                } else {

                }

            });
    };


    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <ListHeader navigation={navigation} />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ width: w, paddingHorizontal: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: Colors.black, fontSize: 13 }}>Search for <Text style={{ fontSize: 13, color: Colors.black, fontWeight: '500' }}>"Iphone 14 pro max"</Text></Text>
                    <Text style={{ fontSize: 12, color: Colors.black, fontWeight: '500' }}>99 Founds</Text>
                </View>


                {/* .................Product List................ */}
                {noData ?
                    <View style={{ flex: 1, backgroundColor: Colors.white }}>
                        <ImageBackground
                            resizeMode='contain'
                            style={[styles.productImageStyle, { width: w, height: w, paddingVertical: 5,alignItems:'center',justifyContent:'flex-end' }]}
                            source={require('../Assets/nodatagif.gif')}>
                            <Text style={{fontSize:25,color:Colors.black}}>No Data Found</Text>
                        </ImageBackground>
                    </View>
                    :
                    <View style={[styles.productsContainer, { height: '100%', width: w }]}>
                        <View style={styles.divider}></View>

                        {activity ?
                            <View style={{ flex: 1, backgroundColor: Colors.white, alignItems: 'center', justifyContent: 'center' }}>
                                <ImageBackground
                                    resizeMode='contain'
                                    style={[styles.productImageStyle, { width: w / 6, height: w / 3, alignItems: 'center' }]}
                                    source={require('../Assets/Loading.gif')}>

                                </ImageBackground>
                            </View>
                     :
                        <FlatList
                            style={{ flex: 1 }}
                            data={data}
                            numColumns={2}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('PDP', { itemDetails: item })} activeOpacity={0.8}
                                    style={{ backgroundColor: Colors.white, elevation: 5, width: w / 2.3, height: w / 2, borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', justifyContent: 'center', marginVertical: 5, marginHorizontal: 9 }}
                                    key={item.id}
                                >

                                    <ImageBackground
                                        resizeMode='contain'
                                        style={[styles.productImageStyle, { width: (w / 2) / 2, height: (w / 2) / 2, paddingVertical: 5 }]}
                                        source={require('../Assets/mi12.png')}>
                                        <View style={{ width: '100%', alignItems: 'flex-end', left: 25 }}>
                                            <TouchableOpacity activeOpacity={0.5} style={{ paddingTop: 5, }}>
                                                {item.price > 2000 ?
                                                    <Foundation name="heart" size={22} color={'red'} style={styles.icons} />
                                                    :
                                                    <EvilIcons name="heart" size={25} color={Colors.black} style={styles.icons} />
                                                }

                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>
                                    <View style={{ alignItems: 'center', justifyContent: 'center', height: (w / 2) / 2, width: '100%' }}>



                                        <Text numberOfLines={2} style={[styles.productText, { width: '90%' }]}>{item.name}</Text>
                                        <View style={{ flexDirection: 'row', width: '90%' }}>
                                            <Text numberOfLines={1} style={[styles.priceText, { paddingHorizontal: 8 }]}>₹{item.price}</Text>
                                            <Text numberOfLines={1} style={[styles.priceText, { textDecorationLine: 'line-through', color: Colors.gray }]}>₹{item.mrp}</Text>

                                        </View>
                                    </View>


                                </TouchableOpacity>
                            )}
                        />
                                            }
                    </View>
                }





<View>
            <Footer navigation={navigation}/>
          </View>


            </ScrollView>
            {/*  <View style={{ bottom: 0, position: 'absolute', zIndex: 1 }}>
        <BottomTab navigation={navigation} currentpage='home' />
      </View> */}
        </View>
    )
}

export default ListPage

const styles = StyleSheet.create({
    divider: {
        width: w, height: 1, backgroundColor: Colors.gray, marginVertical: 5
    },
    productText: {
        width: '90%',
        color: Colors.blackText,
        padding: 5, fontSize: 12
    },
    productsContainer: {
        marginVertical: 5, alignItems: 'center', width: w, height: w / 2
    },
    priceText: {
        color: Colors.blackText, fontSize: 14, fontWeight: '500',
    },
})