import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import PDPHeader from '../Common/PDPHeader'
import Swiper from 'react-native-swiper'
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';


import { Colors } from '../Common/Colors';
import Path from '../Helper/Api';


const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

const ColorsAvailable = [
  { id: 0, color: 'Green', img: 'https://lh3.googleusercontent.com/UWBPU_X7CmuQWj8PxKBnGcWXNfxc_RAmxLQm75-U9scQt1HdI_qj3m4Lzv8avIBx02_vyepb_qH_zO9QacIvmBC90ntaf_MkbKny5xqZPsuw7-C7RjKIDH70fGTgBMzC8M-5=s512-c' },
  { id: 1, color: 'Black', img: 'https://d2xamzlzrdbdbn.cloudfront.net/products/c80017aa-0c51-4739-9642-725f5697430022230607_416x416.jpg' },
  { id: 2, color: 'Light pink', img: 'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/591946-Product-4-I-637944472977252885_800x800.jpg?v=1662002627' },
]

const PDP = ({ navigation, props, route }) => {
  const [mostlovedData, setMostlovedData] = useState([]);



  useEffect(() => {
    console.log(route.params.itemDetails);
    GetData();
  }, [])

  const GetData = () => {
    axios.get(Path.mostLoved).then(response => {
      if (response.data != null && response.data != undefined && response.data != '') {
        setMostlovedData(response.data);

      } else {
        console.log('Failed to Load Api')
      }
    });
  }

  /* route.params.itemDetails */
  return (
    <View style={{ flex: 1 }}>
      <PDPHeader navigation={navigation} button='back' />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {/*  <Text>{route.params.itemDetails.price}</Text> */}
        <View style={{ height: 300, width: w }}>
          {/* <View style={{ justifyContent: 'space-around', width: 50, height: 100, alignItems: 'center' }}>
                <EvilIcons name="heart" size={30} color={Colors.baclIcon} style={styles.icons} />
                <EvilIcons name="share-google" size={30} color={Colors.baclIcon} style={styles.icons} />
              </View> */}
          <Swiper style={{ height: 300 }}
            removeClippedSubviews={false}
            horizontal
            loop
            showsPagination={true}
            bounces={true}
            showsButtons={false}
            automaticallyAdjustContentInsets={true}
            autoplay={false} activeDotColor={'gray'}
            dotColor={'#ddd'} animated={true}
          >

            <View style={styles.slide1}>
              <ImageBackground
                style={{ height: '100%', width: w / 1.5, borderRadius: 50, }}
                source={{
                  uri: 'https://lh3.googleusercontent.com/UWBPU_X7CmuQWj8PxKBnGcWXNfxc_RAmxLQm75-U9scQt1HdI_qj3m4Lzv8avIBx02_vyepb_qH_zO9QacIvmBC90ntaf_MkbKny5xqZPsuw7-C7RjKIDH70fGTgBMzC8M-5=s512-c'
                }}>

              </ImageBackground>
            </View><View style={styles.slide1}>
              <ImageBackground
                style={{ height: '100%', width: w / 1.5, borderRadius: 50, }}
                source={{
                  uri: 'https://lh3.googleusercontent.com/UWBPU_X7CmuQWj8PxKBnGcWXNfxc_RAmxLQm75-U9scQt1HdI_qj3m4Lzv8avIBx02_vyepb_qH_zO9QacIvmBC90ntaf_MkbKny5xqZPsuw7-C7RjKIDH70fGTgBMzC8M-5=s512-c'
                }}>
              </ImageBackground>
            </View>
          </Swiper>
        </View>
        {/* ...........Bottom Starts now */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: Colors.baclIcon, fontWeight: '500', paddingHorizontal: 6, fontSize: 14 }}> <Text style={{ color: 'gray', paddingHorizontal: 5, fontSize: 12 }}> Color:</Text> Black</Text>
          <Text style={{ color: Colors.gray, fontWeight: '500', paddingHorizontal: 6 }}> <Text style={{ color: 'gray', paddingHorizontal: 5, fontSize: 12 }}>Available Color:</Text> 1</Text>
        </View>
        {/* ................ */}
        {/* <View style={{borderWidth:2,borderColor:Colors.themeColor}}>
          </View> */}
        <View style={{ width: w, height: 100, margin: 10 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={ColorsAvailable}
            horizontal
            keyExtractor={(item, index) => (item.id)}
            renderItem={({ item, index }) => {
              return (
                <>
                  <TouchableOpacity activeOpacity={0.5} style={{ borderWidth: 2, borderRadius: 10, borderColor: Colors.themeColor, marginHorizontal: 3, alignItems: 'center' }}>
                    <Image style={{ height: w / 5, width: w / 5, padding: 5, borderRadius: 10 }} source={{ uri: item.img }} />
                    <Text numberOfLines={2} style={{ color: Colors.baclIcon, marginTop: -3, fontWeight: '500' }}>{item.color}</Text>
                  </TouchableOpacity>
                </>
              )
            }}
          />
        </View>
        {/* ............................ */}
        <Text numberOfLines={3} style={{ marginHorizontal: 15, color: 'gray', fontWeight: '500', width: w }}>{route.params.itemDetails.name}</Text>
        <Text numberOfLines={3} style={{ marginHorizontal: 15, color: 'gray', fontWeight: '500', width: w, marginHorizontal: 10 }}>This Product is Amazing for this prce range,i9 5f25df5 FFG sdfhgs</Text>
        <Text style={{ marginHorizontal: 15, color: '#000', fontWeight: '700', fontSize: 16 }}>₹ {route.params.itemDetails.price}</Text>


        {/* .................Products Details........................ */}
        <View style={{ width: w, marginVertical: 5, backgroundColor: '#fff' }}>
          <View style={{ width: w }}>
            <Text style={{ padding: 10, fontSize: 16, fontWeight: '900', color: Colors.themeColor }}>Products Details</Text>
          </View>

          <View style={{ width: w, flexDirection: 'row' }}>
            <View style={{ width: w / 2 }}>
              <Text style={styles.leftText}>Color</Text>
              <Text style={styles.leftText}>Brand</Text>
              <Text style={styles.leftText}>Material</Text>
              <Text style={styles.leftText}>Cores</Text>
            </View>
            <View style={{ width: w / 2 }}>
            <Text style={styles.righttext}>Black</Text>
            <Text style={styles.righttext}>MI</Text>
            <Text style={styles.righttext}>Gold</Text>
            <Text style={styles.righttext}>Decca Core</Text>
            </View>
          </View>
          
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: w, padding: 10 }}>
            <Text style={{ color: '#000', }}>View All</Text>
            <AntDesign name="right" size={16} color={'#000'} style={{  }} />
          </TouchableOpacity>
         
        </View>




        {/* .................Similar Products........................ */}

        <View style={{ width: w, flex: 1, height: w / 1.3, backgroundColor: '#fff' }}>
          <View style={{ width: w }}>
            <Text style={{ padding: 10, fontSize: 18, fontWeight: '900', color: Colors.themeColor }}>Similar Products</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={mostlovedData}
            style={{ marginBottom: 10 }}
            horizontal
            keyExtractor={(item, index) => (item._id)}
            renderItem={({ item, index }) => {
              return (
                <>
                  <TouchableOpacity onPress={() => navigation.navigate('PDP')} activeOpacity={0.5} style={styles.popularProducts}>
                    <Image style={{ height: '50%', width: w / 4, borderRadius: 10 }} source={{ uri: 'https://lh3.googleusercontent.com/UWBPU_X7CmuQWj8PxKBnGcWXNfxc_RAmxLQm75-U9scQt1HdI_qj3m4Lzv8avIBx02_vyepb_qH_zO9QacIvmBC90ntaf_MkbKny5xqZPsuw7-C7RjKIDH70fGTgBMzC8M-5=s512-c' }} />
                    <Text numberOfLines={2} style={styles.nametext}>{item.name}</Text>
                    <Text numberOfLines={1} style={[styles.nametext, { fontSize: 16, color: 'green', fontWeight: '700' }]}>₹ {item.price}</Text>
                    <Text numberOfLines={1} style={[styles.nametext, { top: -8, textDecorationLine: 'line-through' }]}>₹ {item.mrp}</Text>
                  </TouchableOpacity>
                </>
              )
            }}
          />
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', width: w, padding: 10 }}>
            <Text style={{  color: '#000', }}>View All</Text>
            <AntDesign name="right" size={16} color={'#000'} style={{ }} />
          </TouchableOpacity>
        </View>


















      </ScrollView>
      <View style={{width:w,height:1.5}}></View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={()=> navigation.navigate('Cart')} style={styles.addtocartButtons}>
          <Text style={{ color: '#000', fontSize: 16, fontWeight: '500' }}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.addtocartButtons, { backgroundColor: '#5bc27c' }]}>
          <Text style={{ color: '#000', fontSize: 16, fontWeight: '500' }}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PDP

const styles = StyleSheet.create({
  icons: {
    elevation: 10
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10

  },
  addtocartButtons: {
    width: w / 2, backgroundColor: '#ccc', paddingVertical: 15,
    alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'
  },
  nametext: { fontSize: 12, fontWeight: '500', padding: 5, color: '#000', width: '90%' },
  popularProducts: {
    borderRadius: 5, marginHorizontal: 15,
    width: w / 3, height: w / 2,
    alignItems: 'center', flexDirection: 'column',
    borderWidth: 1, borderColor: '#ccc'
  },
  leftText:{paddingHorizontal:10,paddingVertical:5,color:'gray'},
  righttext:{paddingHorizontal:10,paddingVertical:5,color:'#000'}
})

