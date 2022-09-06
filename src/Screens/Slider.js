import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ImageBackground, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios';

import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10

  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
export default class SwiperComponent extends Component {
  constructor(props) {
    super(props)
    
  }
  /* componentWillReceiveProps = () => {
    const timer = setTimeout(() => {
      getBannerData();
    }, 1500);
    return () => clearTimeout(timer);
  } */
  

  render() {
    return (
      <View style={{ flex: 1,borderRadius:10 }}>

          <Swiper style={styles.wrapper} showsButtons={false}
          autoplay={true} loop={true} activeDotColor={'red'} 
          dotColor={'#ddd'} animated={true} 
          >
            <View style={styles.slide1}>
              <ImageBackground
                style={{ height: '100%', width: '100%',borderRadius:50 }}
                source={{
                  uri: 'https://cdn.grabon.in/gograbon/images/web-images/uploads/1621488513434/today-electronics-offers.jpg'
                }}>
              </ImageBackground>
            </View>
            <View style={styles.slide1}>
              <ImageBackground
                style={{ height: '100%', width: '100%' ,borderRadius:50}}
                source={{
                  uri: 'https://static.india.com/wp-content/uploads/2015/10/snapdeal.jpg'
                }}>
              </ImageBackground>
            </View>
            <View style={styles.slide1}>
              <ImageBackground
                style={{ height: '100%', width: '100%' ,borderRadius:50}}
                source={{
                  uri: 'https://blog.grabon.in/wp-content/uploads/2018/10/Diwali-Offers-On-Electronics.jpg'
                }}>
              </ImageBackground>
            </View>

          </Swiper>
         
      </View>
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)