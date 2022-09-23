import { Dimensions, FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Common/Header';
import BottomTab from '../Common/BottomTab';
import SwiperComponent from '../Common/Swiper';
import Api from '../Helper/api';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Colors } from '../Common/Colors';
import Path from '../Helper/api';
import Footer from '../Common/Footer';

const Data = [
  { name: 'Mobile', id: 0, image: 'http://4.bp.blogspot.com/-1gTfeLFdUIA/Ujw8Bh0h_GI/AAAAAAAAACs/Mh0oGRVICWc/s1600/9x4+SSM+copy.jpg' },
  { name: 'Laptop', id: 1, image: 'https://www.digitaltrends.com/wp-content/uploads/2021/08/dell-xps-15-oled-2021-laptop.jpg?fit=720%2C720&p=1' },
  { name: 'Laptop', id: 2, image: 'https://static.toiimg.com/thumb/msid-80010563,width-1200,height-900,resizemode-4/.jpg' },
  { name: 'Laptop', id: 3, image: 'https://us.123rf.com/450wm/sugarwarrior/sugarwarrior1602/sugarwarrior160200141/51591850-fashion-clothing-infographics-template-concept-icons-design-for-your-product-or-design-web-and-mobil.jpg?ver=6' },
  { name: 'Laptop', id: 4, image: 'https://burst.shopifycdn.com/photos/makeup-beauty-flatlay.jpg?width=1200&format=pjpg&exif=1&iptc=1' },
  { name: 'Laptop', id: 5, image: 'https://www.digitaltrends.com/wp-content/uploads/2021/08/dell-xps-15-oled-2021-laptop.jpg?fit=720%2C720&p=1' },
  { name: 'Laptop', id: 6, image: 'https://thumbs.dreamstime.com/b/lots-groceries-17001094.jpg' }
]
const Sponsored = [
  { name: 'Hottest Deals!', id: 0, offer: 'Up to 40% Off', image: 'https://cdn.flipshope.com/blog/wp-content/uploads/2020/08/Snapdeal-Deals-of-the-day.jpg' },
  { name: 'Made to fit me', id: 1, offer: 'Up to 30% Off', image: 'https://cdn2.vectorstock.com/i/1000x1000/43/26/one-day-special-offer-sale-banner-vector-18474326.jpg' },
  { name: 'Save big!', id: 2, offer: 'Up to 40% Off', image: 'https://www.kindpng.com/picc/m/746-7469355_offer-big-sale-png-transparent-png.png' },
  { name: '1.89" | BT Calling', id: 4, offer: 'Sale Tomorrow', image: 'https://media.istockphoto.com/vectors/one-day-sale-banner-vector-id922791506?b=1&k=20&m=922791506&s=612x612&w=0&h=WdYXdBWj5DOq6wRxAIJAYy2pePPixniGFAQkfsSlnko=' },
  { name: 'Mad For Gaming', id: 5, offer: 'From ₹499', image: 'https://www.pondicherryshopping.com/image/catalog/get500off.jpg' },
  { name: 'Buds Pro', id: 6, offer: 'From ₹999', image: 'http://www.byitaly.com/media/wysiwyg/coupon-codes-italian-food-online-shop.jpg' }
]


const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState('');
  const [sellingData, setTopSellingData] = useState('');
  const [topDealsData, setTopDealsData] = useState('');
  const [activity, setactivity] = useState(true);
  const [noData, setNoData] = useState(false);


  useEffect(() => {
    GetData();
    TopSelling();
    TopDeals();
  }, []);


  const TopDeals = () => {
    setactivity(true)
    axios.get(Path.topDeals).then(response => {
      if (response.data != '' && response.data != null && response.data != undefined) {
        // console.log(response.data);
        setTopDealsData(response.data);
        setactivity(false)

      } else {

      }

    });
  };
  const TopSelling = () => {
    axios.get(Path.topSelling).then(response => {
      if (response.data != '' && response.data != null && response.data != undefined) {
        //console.log(response.data);
        setTopSellingData(response.data);
      } else {

      }

    });
  };

  const GetData = () => {
    axios.get(Path.top)
      .then(response => {
        if (response.data != '' && response.data != null && response.data != undefined) {
          // console.log(response.data);
          setData(response.data);
        } else {

        }

      });
  };

  if (noData) {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <ImageBackground
          resizeMode='contain'
          style={[styles.productImageStyle, { width: w, height: w, paddingVertical: 5, alignItems: 'center', justifyContent: 'flex-end' }]}
          source={require('../Assets/nodatagif.gif')}>
          <Text style={{ fontSize: 25, color: Colors.black }}>No Data Found</Text>
        </ImageBackground>
      </View>
    )
  } else {
    return (
      <View style={{ flex: 1, height: h, backgroundColor: Colors.white }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginBottom: 45 }}>

          <View style={{ zIndex: 1 }}>
            <Header currentScreen={'Retail Center'} navigation={navigation} />
          </View>


          {activity ?
            <View style={{ backgroundColor: Colors.c, alignItems: 'center', justifyContent: 'center', width: w, height: h - 120 }}>
              <ImageBackground
                resizeMode='contain'
                style={[styles.productImageStyle, { width: 50, height: 50, }]}
                source={require('../Assets/Loading.gif')}>

              </ImageBackground>
            </View>
            :
            <>

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
                      style={{ margin: 5, paddingHorizontal: 8 }}
                      key={item.id}
                    >
                      <TouchableOpacity style={styles.cartItem}>
                        <Image style={styles.catImageStyle} source={{ uri: item.image }} />
                        <Text style={styles.catext}>{item.name}</Text>
                      </TouchableOpacity>

                    </View>
                  )}
                />

              </View>
              {/* .......... */}
              <View style={{ width: w, height: h / 4, borderRadius: 20, alignItems: 'center' }}>
                <SwiperComponent navigation={navigation} />
              </View>
              {/* ..........Top Selling.......... */}
              <View style={styles.productsContainer}>
                <View style={styles.devider}></View>
                <View style={{ width: w }}>
                  <Text style={{ color: Colors.blackText, paddingHorizontal: 15, fontWeight: '500', fontSize: 16 }}>Top Selling</Text>
                </View>
                {/*  */}
                <FlatList
                  style={{ flex: 1 }}
                  data={sellingData}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <View
                      style={{ margin: 5, backgroundColor: Colors.white, elevation: 5, width: w / 4, height: w / 2.8, borderRadius: 10 }}
                      key={item._id}
                    >

                      <TouchableOpacity onPress={() => navigation.navigate('PDP', { itemDetails: item })} activeOpacity={0.8} style={styles.cartItem}>
                        <ImageBackground
                          style={styles.productImageStyle}
                          source={{
                            uri: item.images[0]
                          }}>
                          {/*  <TouchableOpacity activeOpacity={0.5} style={{ width: '95%', alignItems: 'flex-end', paddingTop: 10 }}>
                            <View style={{ backgroundColor: Colors.white, borderRadius: 10, paddingVertical: 2 }}>
                              <EvilIcons name="heart" size={20} color={Colors.baclIcon} style={styles.icons} />
                            </View>
                          </TouchableOpacity> */}
                        </ImageBackground>
                        <Text numberOfLines={1} style={styles.productText}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around', paddingHorizontal: 5 }}>

                          <Text numberOfLines={1} style={styles.priceText}>₹{item.price}</Text>

                          <TouchableOpacity style={{}}>
                            <EvilIcons name="plus" size={25} color={Colors.baclIcon} style={styles.icons} />
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>

                    </View>
                  )}
                />

              </View>
              {/* .........................Top Deals....................... */}
              <View style={styles.productsContainer}>
                <View style={styles.devider}></View>
                <View style={{ width: w }}>
                  <Text style={{ color: Colors.blackText, paddingHorizontal: 15, fontWeight: '500', fontSize: 16 }}>Top Selling</Text>
                </View>
                {/*  */}
                <FlatList
                  style={{ flex: 1 }}
                  data={topDealsData}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <View
                      style={{ margin: 5, backgroundColor: Colors.white, elevation: 5, width: w / 4, height: w / 2.8, borderRadius: 10 }}
                      key={item._id}
                    >

                      <TouchableOpacity onPress={() => navigation.navigate('PDP', { itemDetails: item })} activeOpacity={0.8} style={styles.cartItem}>
                        <ImageBackground
                          style={styles.productImageStyle}
                          source={{
                            uri: item.images[0]
                          }}>
                          {/*  <TouchableOpacity activeOpacity={0.5} style={{ width: '95%', alignItems: 'flex-end', paddingTop: 10 }}>
                            <View style={{ backgroundColor: Colors.white, borderRadius: 10, paddingVertical: 2 }}>
                              <EvilIcons name="heart" size={20} color={Colors.baclIcon} style={styles.icons} />
                            </View>
                          </TouchableOpacity> */}
                        </ImageBackground>
                        <Text numberOfLines={1} style={styles.productText}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around', paddingHorizontal: 5 }}>

                          <Text numberOfLines={1} style={styles.priceText}>₹{item.price}</Text>

                          <TouchableOpacity style={{}}>
                            <EvilIcons name="plus" size={25} color={Colors.baclIcon} style={styles.icons} />
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>

                    </View>
                  )}
                />

              </View>

              {/* .........................Most Loved....................... */}

              <View style={styles.productsContainer}>
                <View style={styles.devider}></View>
                <View style={{ width: w }}>
                  <Text style={{ color: Colors.blackText, paddingHorizontal: 15, fontWeight: '500', fontSize: 16 }}>Top Selling</Text>
                </View>
                {/*  */}
                <FlatList
                  style={{ flex: 1 }}
                  data={data}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <View
                      style={{ margin: 5, backgroundColor: Colors.white, elevation: 5, width: w / 4, height: w / 2.8, borderRadius: 10 }}
                      key={item._id}
                    >

                      <TouchableOpacity onPress={() => navigation.navigate('PDP', { itemDetails: item })} activeOpacity={0.8} style={styles.cartItem}>
                        <ImageBackground
                          style={styles.productImageStyle}
                          source={{
                            uri: item.images[0]
                          }}>
                          {/*  <TouchableOpacity activeOpacity={0.5} style={{ width: '95%', alignItems: 'flex-end', paddingTop: 10 }}>
                            <View style={{ backgroundColor: Colors.white, borderRadius: 10, paddingVertical: 2 }}>
                              <EvilIcons name="heart" size={20} color={Colors.baclIcon} style={styles.icons} />
                            </View>
                          </TouchableOpacity> */}
                        </ImageBackground>
                        <Text numberOfLines={1} style={styles.productText}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around', paddingHorizontal: 5 }}>

                          <Text numberOfLines={1} style={styles.priceText}>₹{item.price}</Text>

                          <TouchableOpacity style={{}}>
                            <EvilIcons name="plus" size={25} color={Colors.baclIcon} style={styles.icons} />
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>

                    </View>
                  )}
                />

              </View>
              {/* .........................SponSored....................... */}

              <View style={[styles.productsContainer, { height: 350 }]}>
                <View style={styles.devider}></View>
                <View style={{ width: w }}>
                  <Text style={{ color: Colors.blackText, paddingHorizontal: 15, fontWeight: '500', fontSize: 16 }}>Sponsored</Text>
                </View>
                {/*  */}
                <FlatList
                  style={{ flex: 1 }}
                  data={Sponsored}
                  numColumns={3}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <View
                      style={{ margin: 5, backgroundColor: Colors.white, elevation: 5, width: w / 3.5, height: w / 2.8 }}
                      key={item.id}
                    >
                      <TouchableOpacity onPress={() => navigation.navigate('ListPage')} activeOpacity={0.8} style={styles.cartItem}>
                        <ImageBackground
                          style={styles.productImageStyle}
                          source={{
                            uri: item.image
                          }}>

                        </ImageBackground>
                        <Text numberOfLines={1} style={[styles.productText, { color: Colors.gray }]}>{item.name}</Text>
                        <Text numberOfLines={1} style={[styles.priceText, { fontSize: 12 }]}>{item.offer}</Text>
                      </TouchableOpacity>

                    </View>
                  )}
                />

              </View>
            </>}

          <View>
            <Footer navigation={navigation}/>
          </View>



        </ScrollView>
        <View style={{ bottom: 0, position: 'absolute', zIndex: 0 }}>
          <BottomTab navigation={navigation} currentpage='home' />
        </View>
      </View>
    );
  }


};

export default HomeScreen;

const styles = StyleSheet.create({
  catImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 10
  },
  catContainer: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-around',
    width: w
  },
  cartItem: {
    alignItems: 'center'
  },
  catext: {
    fontSize: 12,
    color: Colors.blackText,
    fontWeight: '500'
  },
  productImageStyle: {
    width: '100%', height: (w / 2.8) / 1.6, borderRadius: 10, margin: 2
  },

  productText: {
    width: '100%',
    color: Colors.blackText,
    padding: 5, fontSize: 12
  },
  productsContainer: {
    marginVertical: 5, alignItems: 'center', width: w, height: w / 2.3
  },
  priceText: {
    color: Colors.blackText, fontSize: 14, textAlign: 'left', fontWeight: '500', width: '90%'
  },
  devider: {
    width: w, height: 1, backgroundColor: Colors.lightgray
  }
});
