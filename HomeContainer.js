import { Dimensions, FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import Header from './src/Common/Header';
import Path from './src/Helper/Api';
import { Colors } from './src/Common/Colors';
import BottomTab from './src/Common/BottomTab';
import SwiperComponent from './src/Screens/Slider';
const Data = [
  { name: 'Mobile', id: 0, image: 'http://4.bp.blogspot.com/-1gTfeLFdUIA/Ujw8Bh0h_GI/AAAAAAAAACs/Mh0oGRVICWc/s1600/9x4+SSM+copy.jpg' },
  { name: 'Laptop', id: 1, image: 'https://www.digitaltrends.com/wp-content/uploads/2021/08/dell-xps-15-oled-2021-laptop.jpg?fit=720%2C720&p=1' },
  { name: 'Laptop', id: 2, image: 'https://static.toiimg.com/thumb/msid-80010563,width-1200,height-900,resizemode-4/.jpg' },
  { name: 'Laptop', id: 3, image: 'https://us.123rf.com/450wm/sugarwarrior/sugarwarrior1602/sugarwarrior160200141/51591850-fashion-clothing-infographics-template-concept-icons-design-for-your-product-or-design-web-and-mobil.jpg?ver=6' },
  { name: 'Laptop', id: 4, image: 'https://burst.shopifycdn.com/photos/makeup-beauty-flatlay.jpg?width=1200&format=pjpg&exif=1&iptc=1' },
  { name: 'Laptop', id: 5, image: 'https://www.digitaltrends.com/wp-content/uploads/2021/08/dell-xps-15-oled-2021-laptop.jpg?fit=720%2C720&p=1' },
  { name: 'Laptop', id: 6, image: 'https://thumbs.dreamstime.com/b/lots-groceries-17001094.jpg' }
]
const SuggestedProductsData = [
  { name: 'Mobile', id: 0, image: 'https://thumbs.dreamstime.com/b/lots-groceries-17001094.jpg', offerper: 'Min 60% off' },
  { name: 'Mobile', id: 1, image: 'https://thumbs.dreamstime.com/b/lots-groceries-17001094.jpg', offerper: 'Upto 60% off' },
  { name: 'Mobile', id: 3, image: 'https://thumbs.dreamstime.com/b/lots-groceries-17001094.jpg', offerper: 'Min 50% off' },
  { name: 'Mobile', id: 3, image: 'https://thumbs.dreamstime.com/b/lots-groceries-17001094.jpg', offerper: 'Under ₹500' }


]
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

const HomeContainer = ({ navigation }) => {
  const [mostlovedData, setMostlovedData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [topDealsData, setTopDealsData] = useState([]);
  useEffect(() => {
    GetData();
    GetProductsData();
    GetTopDealsData();
  }, []);

  const GetData = () => {
    axios.get(Path.mostLoved).then(response => {
      if (response.data != null && response.data != undefined && response.data != '') {
        setMostlovedData(response.data);

      } else {
        console.log('Failed to Load Api')
      }
    });
  }

  const GetProductsData = () => {
    axios.get(Path.popular).then(response => {
      if (response.data != null && response.data != undefined && response.data != '') {
        setProductsData(response.data);

      } else {
        console.log('Failed to Load Api')
      }
    });
  }

  const GetTopDealsData = () => {
    axios.get(Path.topDeals).then(response => {
      if (response.data != null && response.data != undefined && response.data != '') {
        setTopDealsData(response.data);

      } else {
        console.log('Failed to Load Api')
      }
    });
  }

  return (

    <View
      style={{
        flex: 1,
        alignItems: 'center',
        width: w, justifyContent: 'center'
      }}>
      <ScrollView style={{ flex: 1, marginBottom: 60 }}>
        <Header navigation={navigation} />
        {/* Categories */}
        <View style={styles.catContainer}>
          {/*  */}
          <FlatList
            style={{ flex: 1 }}
            data={Data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View
                style={{ margin: 5, paddingHorizontal: 8 ,elevation:10}}
                key={item.id}
              >
                <TouchableOpacity onPress={()=> navigation.navigate('PDP')} style={[styles.cartItem,{elevation:10}]}>
                  <Image style={styles.catImageStyle} source={{ uri: item.image }} />
                  <Text style={styles.catext}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        {/* .......... */}
        <View style={{ width: w - 10, height: h / 4.5, margin: 5, borderRadius: 10 }}>
          <SwiperComponent navigation={navigation} />
        </View>
        {/* ..........Swiper Ends...... */}
        {/* ..........Suggested Products........... */}
        {/*  <View style={styles.SuggestedProducts}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: w - 10, alignItems: 'center' }}>
            <View style={{ margin: 10 }}>
              <Text style={{ color: '#000', fontSize: 12 }}>Deals Of The Day</Text>
              <View style={{ flexDirection: 'row', }}>
                <Text style={{ fontSize: 10, color: 'gray' }}>Ends in</Text>
                <View style={{ backgroundColor: '#2aa198', borderRadius: 5, paddingHorizontal: 5, marginHorizontal: 5 }}>
                  <Text style={{ padding: 2, fontSize: 10 }}>15h : 10m : 12s</Text></View>
              </View>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('PDP')} style={{ backgroundColor: '#2aa198', borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginHorizontal: 5 }}>
              <FontAwesome name="chevron-right" size={18} color={"#ccc"} style={styles.SuggestedProductsicons} />
            </TouchableOpacity>
          </View>
          <FlatList
            style={{ flex: 1 }}
            data={SuggestedProductsData}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View
                style={{ margin: 5, backgroundColor: '#fff', height: w / 2.5, padding: 10, borderRadius: 10, width: w / 2.2 }}

              >
                <TouchableOpacity onPress={()=> navigation.navigate('PDP')} key={item.id} style={styles.SuggestedItem}>
                  <Image style={styles.SuggestedImageStyle} source={{ uri: item.image }} />
                  <Text style={styles.catext}>{item.name}</Text>
                  <Text style={styles.catext}>{item.offerper}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View> */}
        {/* ..........Popular............. */}

        <View style={{ width: w-15, margin: 5, flex: 1, height: w / 1.5,  }}>
          <View style={{ width: w }}>
            <Text style={{ padding: 10, fontSize: 20, fontWeight: '900', color: Colors.themeColor }}>Popular</Text>
          </View>
          <FlatList
            style={{ flex: 1 }}
            showsHorizontalScrollIndicator={false}
            data={productsData}
            horizontal
            keyExtractor={(item, index) => (item._id)} 
            renderItem={({ item, index }) => {
              return (
                <>
                  <TouchableOpacity onPress={()=> navigation.navigate('PDP',{itemDetails : item})}  activeOpacity={0.5} style={styles.popularProducts}>
                    <Image style={{ height: '50%', width: w / 4, borderRadius: 10 }} source={{ uri: 'https://lh3.googleusercontent.com/UWBPU_X7CmuQWj8PxKBnGcWXNfxc_RAmxLQm75-U9scQt1HdI_qj3m4Lzv8avIBx02_vyepb_qH_zO9QacIvmBC90ntaf_MkbKny5xqZPsuw7-C7RjKIDH70fGTgBMzC8M-5=s512-c' }} />
                    <Text numberOfLines={2} style={styles.nametext}>{item.name}</Text>
                    <Text numberOfLines={1} style={[styles.nametext, { fontSize: 16, color: 'green', fontWeight: '700' }]}>₹ {item.price}</Text>
                    <Text numberOfLines={1} style={[styles.nametext, { top: -8, textDecorationLine: 'line-through' }]}>₹ {item.mrp}</Text>
                  </TouchableOpacity>
                </>
              )
            }}
          />
        </View>
        {/* ..........TopDeals............. */}

        <View style={{ width: w-15, margin: 5, flex: 1, height: w / 1.5 }}>
          <View style={{ width: w }}>
            <Text style={{ padding: 10, fontSize: 20, fontWeight: '900', color: Colors.themeColor }}>Top Deals</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={topDealsData}
            horizontal
            keyExtractor={(item, index) => (item._id)}
            renderItem={({ item, index }) => {
              return (
                <>
                  <TouchableOpacity onPress={()=> navigation.navigate('PDP')} activeOpacity={0.5} style={styles.popularProducts}>
                    <Image style={{ height: '50%', width: w / 4, borderRadius: 10 }} source={{ uri: 'https://lh3.googleusercontent.com/UWBPU_X7CmuQWj8PxKBnGcWXNfxc_RAmxLQm75-U9scQt1HdI_qj3m4Lzv8avIBx02_vyepb_qH_zO9QacIvmBC90ntaf_MkbKny5xqZPsuw7-C7RjKIDH70fGTgBMzC8M-5=s512-c' }} />
                    <Text numberOfLines={2} style={styles.nametext}>{item.name}</Text>
                    <Text numberOfLines={1} style={[styles.nametext, { fontSize: 16, color: 'green', fontWeight: '700' }]}>₹ {item.price}</Text>
                    <Text numberOfLines={1} style={[styles.nametext, { top: -8, textDecorationLine: 'line-through' }]}>₹ {item.mrp}</Text>
                  </TouchableOpacity>
                </>
              )
            }}
          />
        </View>
        {/* ..........mOST LOVED............. */}
        <View style={{ width: w-15, margin: 5, flex: 1, height: w / 1.5 }}>
          <View style={{ width: w }}>
            <Text style={{ padding: 10, fontSize: 20, fontWeight: '900', color: Colors.themeColor }}>Most Loved</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={mostlovedData}
            horizontal
            keyExtractor={(item, index) => (item._id)}
            renderItem={({ item, index }) => {
              return (
                <>
                  <TouchableOpacity onPress={()=> navigation.navigate('PDP')} activeOpacity={0.5} style={styles.popularProducts}>
                    <Image style={{ height: '50%', width: w / 4, borderRadius: 10 }} source={{ uri: 'https://lh3.googleusercontent.com/UWBPU_X7CmuQWj8PxKBnGcWXNfxc_RAmxLQm75-U9scQt1HdI_qj3m4Lzv8avIBx02_vyepb_qH_zO9QacIvmBC90ntaf_MkbKny5xqZPsuw7-C7RjKIDH70fGTgBMzC8M-5=s512-c' }} />
                    <Text numberOfLines={2} style={styles.nametext}>{item.name}</Text>
                    <Text numberOfLines={1} style={[styles.nametext, { fontSize: 16, color: 'green', fontWeight: '700' }]}>₹ {item.price}</Text>
                    <Text numberOfLines={1} style={[styles.nametext, { top: -8, textDecorationLine: 'line-through' }]}>₹ {item.mrp}</Text>
                  </TouchableOpacity>
                </>
              )
            }}
          />
        </View>
        {/* */}

      </ScrollView>
      <View style={{ bottom: 0, position: 'absolute', }}>
        <BottomTab navigation={navigation} currentpage = 'home' />
      </View>
    </View>


  );
};

export default HomeContainer;

const styles = StyleSheet.create({
  catImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  catContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    width: w
  },
  cartItem: {
    alignItems: 'center'
  },
  catext: {
    fontSize: 12,
    color: Colors.themeColor,
    fontWeight: '500'
  },
  SuggestedProducts: {
    backgroundColor: '#ddd',
    alignItems: 'center',
    flex: 1,
    width: w,
    borderRadius: 10,

  },
  SuggestedItem: {
    alignItems: 'center'
  },
  SuggestedImageStyle: {
    width: w / 4, height: w / 4
  },
  SuggestedProductsicons: {
    marginHorizontal: 8,
    paddingVertical: 6,
  },
  nametext: { fontSize: 12, fontWeight: '500', padding: 5, color: '#000', width: '90%' },
  popularProducts: {
    backgroundColor: '#fff',
    borderRadius: 5, marginHorizontal: 5,
    width: w / 3, height: w / 2,
    alignItems: 'center', flexDirection: 'column',
    elevation: 10
  },
});
