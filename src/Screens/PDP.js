import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import PDPHeader from '../Common/PDPHeader'
import Swiper from 'react-native-swiper'
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import { Colors } from '../Common/Colors';
import Path from '../Helper/api';
import Footer from '../Common/Footer';



const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

const ColorsAvailable = [
  { id: 0, color: 'Green', img: 'https://lh3.googleusercontent.com/UWBPU_X7CmuQWj8PxKBnGcWXNfxc_RAmxLQm75-U9scQt1HdI_qj3m4Lzv8avIBx02_vyepb_qH_zO9QacIvmBC90ntaf_MkbKny5xqZPsuw7-C7RjKIDH70fGTgBMzC8M-5=s512-c' },
  { id: 1, color: 'Black', img: 'https://d2xamzlzrdbdbn.cloudfront.net/products/c80017aa-0c51-4739-9642-725f5697430022230607_416x416.jpg' },
  { id: 2, color: 'Light pink', img: 'https://cdn.shopify.com/s/files/1/0024/9803/5810/products/591946-Product-4-I-637944472977252885_800x800.jpg?v=1662002627' },
]

const PDP = ({ navigation, props, route }) => {
  const [mostlovedData, setMostlovedData] = useState([]);
  // const [productDetails, setproductDetails] = useState([]);


  useEffect(() => {
    console.log(route.params.itemDetails);
    GetData();
  }, [])

  const ProductDetails = route.params.itemDetails;
  const GetData = () => {

    axios.get(Path.top).then(response => {
      if (response.data != null && response.data != undefined && response.data != '') {
        setMostlovedData(response.data);

      } else {
        console.log('Failed to Load Api')
      }
    });
  }

  /* route.params.itemDetails */



  const DeviderHorizontal = () => {
    return (
      <View style={{ height: 1.5, backgroundColor: Colors.c, width: w - 10, alignSelf: 'center' }}>

      </View>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <PDPHeader navigation={navigation} button='back' />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {/*  <Text>{route.params.itemDetails.price}</Text> */}
        <View style={{ height: h/2.5, width: w }}>
          {/* <View style={{ justifyContent: 'space-around', width: 50, height: 100, alignItems: 'center' }}>
                <EvilIcons name="heart" size={30} color={Colors.baclIcon} style={styles.icons} />
                <EvilIcons name="share-google" size={30} color={Colors.baclIcon} style={styles.icons} />
              </View> */}
          <Swiper style={{ height: h/2.5 }}
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
           

              {ProductDetails.images.map((item) => {
                return (
                  <Image
                    style={{width: '100%',height:'100%'}}
                    resizeMode={'contain'}
                    source={{
                      uri: item
                    }}>

                  </Image>
                )
              })}
              {/*  <FlatList
                style={{ flex: 1 }}
                data={ProductDetails}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <View style={styles.slide1}>
                    <Image
                      style={{ height: 200, width: 400  }}
                      source={{
                        uri: item.images[0]
                      }}>

                    </Image>

                  </View>
                )}
              /> */}

          

          </Swiper>
        </View>
        {/* ...........Bottom Starts now */}


        <View style={{ width: w }}>
          <Text numberOfLines={2} style={{ marginHorizontal: 15, color: Colors.black, fontWeight: '500', width: w, paddingVertical: 5, fontSize: 16 }}>{route.params.itemDetails.name}</Text>
        </View>
        <DeviderHorizontal />

        <View style={{ width: w, flexDirection: 'row', paddingVertical: 5, alignItems: 'center' }}>
          <Text style={{ marginHorizontal: 15, color: '#000', fontWeight: '500', fontSize: 16 }}>₹ {route.params.itemDetails.price}</Text>
          <Text style={{ color: Colors.gray, fontWeight: '500', fontSize: 12, textDecorationLine: 'line-through' }}>₹ {route.params.itemDetails.mrp}</Text>
          <Text style={{ color: Colors.offer, fontWeight: '500', fontSize: 14, paddingHorizontal: 10 }}>0% off</Text>
        </View>

        <DeviderHorizontal />
        <View style={{ width: w, flexDirection: 'row', paddingLeft: 15, alignItems: 'center' }}>
          <FontAwesome name="star-o" size={15} color={Colors.staricon} style={styles.icons} />
          <FontAwesome name="star-o" size={15} color={Colors.staricon} style={styles.icons} />
          <FontAwesome name="star-o" size={15} color={Colors.staricon} style={styles.icons} />
          <FontAwesome name="star-o" size={15} color={Colors.staricon} style={styles.icons} />
          <FontAwesome name="star-o" size={15} color={Colors.staricon} style={styles.icons} />
          <Text style={{ color: Colors.black, paddingHorizontal: 5 }}>0</Text>
        </View>
        <Text style={{ color: Colors.gray, paddingHorizontal: 15, fontSize: 12, paddingBottom: 5 }}>0 reviews</Text>
        <DeviderHorizontal />
        {/* Description */}
        <Text style={{ color: Colors.gray, fontSize: 12, paddingHorizontal: 5 }}>Description :</Text>
        <Text style={{ color: Colors.black, fontSize: 11, paddingHorizontal: 5, width: w }}>Sample Description</Text>


        {/* Price Selector */}
        <View style={styles.priceSelector}>
          <View style={{ width: '100%', flexDirection: 'row' }}>
            <Text style={{ color: Colors.black, padding: 5, width: (w - 20) / 2 }}>Price:</Text>
            <Text style={{ color: Colors.black, padding: 5, width: (w - 20) / 2, fontWeight: '700' }}>₹ {route.params.itemDetails.price}</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'row' }}>
            <Text style={{ color: Colors.black, padding: 5, width: (w - 20) / 2 }}>Status:</Text>
            <Text style={{ color: Colors.black, padding: 5, width: (w - 20) / 2 }}>{route.params.itemDetails.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Text>
          </View>
          <View style={{ width: '100%', flexDirection: 'row', paddingVertical: 5 }}>
            
            <Text style={{ color: Colors.black, padding: 5, width: (w - 20) / 2 }}>Qty:</Text>
            <TouchableOpacity activeOpacity={0.5} style={{ borderWidth: 0.5, borderRadius: 5,flexDirection:'row',alignItems:'center' }}>
              <Text style={{ color: Colors.black, padding: 5, width: 30 }}>1</Text>
          <FontAwesome name="angle-down" size={15} color={Colors.baclIcon} style={[styles.icons,{paddingHorizontal:10}]} />

            </TouchableOpacity>
          </View>
        </View>



        {/* .................Similar Products........................ */}


        <View style={{marginTop:20}}>
            <Footer navigation={navigation}/>
          </View>

      </ScrollView>
      <View style={{ width: w, height: 0.5,backgroundColor:'#000' }}></View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.addtocartButtons}>
          <Text style={{ color: '#000', fontSize: 16, fontWeight: '500' }}>Add To Cart</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={[styles.addtocartButtons, { backgroundColor: Colors.price }]}>
          <Text style={{ color: '#000', fontSize: 16, fontWeight: '500' }}>Buy Now</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default PDP

const styles = StyleSheet.create({
  icons: {
    marginHorizontal: 2, paddingVertical: 5
  },
  priceSelector: {
    borderRadius: 10,
    width: w - 20, alignSelf: 'center', borderWidth: 1,
    borderColor: Colors.c, marginVertical: 10
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10

  },
  addtocartButtons: {
    width: w - 10, paddingVertical: 15,
    alignItems: 'center', justifyContent: 'center',
     backgroundColor: '#fff',
  },
  nametext: { fontSize: 12, fontWeight: '500', padding: 5, color: '#000', width: '90%' },
  popularProducts: {
    borderRadius: 5, marginHorizontal: 5,
    width: w / 3, height: w / 2,
    alignItems: 'center', flexDirection: 'column',
    borderWidth: 1, borderColor: '#ccc'
  },
  leftText: { paddingHorizontal: 10, paddingVertical: 5, color: 'gray' },
  righttext: { paddingHorizontal: 10, paddingVertical: 5, color: '#000' }
})