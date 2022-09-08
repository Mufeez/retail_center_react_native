import {Dimensions, FlatList, StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../Common/Header';
import BottomTab from '../Common/BottomTab';
import SwiperComponent from '../Common/Swiper';

const Data = [
  {name:'Mobile',id:0,image:'http://4.bp.blogspot.com/-1gTfeLFdUIA/Ujw8Bh0h_GI/AAAAAAAAACs/Mh0oGRVICWc/s1600/9x4+SSM+copy.jpg'},
  { name: 'Laptop', id: 1, image: 'https://www.digitaltrends.com/wp-content/uploads/2021/08/dell-xps-15-oled-2021-laptop.jpg?fit=720%2C720&p=1' },
  { name: 'Laptop', id: 2, image: 'https://static.toiimg.com/thumb/msid-80010563,width-1200,height-900,resizemode-4/.jpg' },
  { name: 'Laptop', id: 3, image: 'https://us.123rf.com/450wm/sugarwarrior/sugarwarrior1602/sugarwarrior160200141/51591850-fashion-clothing-infographics-template-concept-icons-design-for-your-product-or-design-web-and-mobil.jpg?ver=6' },
  { name: 'Laptop', id: 4, image: 'https://burst.shopifycdn.com/photos/makeup-beauty-flatlay.jpg?width=1200&format=pjpg&exif=1&iptc=1' },
  { name: 'Laptop', id: 5, image: 'https://www.digitaltrends.com/wp-content/uploads/2021/08/dell-xps-15-oled-2021-laptop.jpg?fit=720%2C720&p=1' },
  {name:'Laptop',id:6,image:'https://thumbs.dreamstime.com/b/lots-groceries-17001094.jpg'}
]

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState('');
  useEffect(() => {
    GetData();
  }, []);



  const GetData = () => {
    axios
      .get('https://www.mufeed.co.in/api/store/undefined/products/top')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      });
  };

  const renderItem = ({item}) =>( 
    
    <Item value={item.name} />
    
  )

  const Item = ({ value }) => (
    <Text style={{color:'#000'}}>{value}</Text>
  )
  return (
    <View
      style={{
        flex: 1,
       
        alignItems: 'center',
        justifyContent: 'center',
      }}>
				<Header navigation={navigation} />
      {/* Categories */}
      <View style={styles.catContainer}>
        {/*  */}
        <FlatList
          style={{flex:1}}
          data={Data}
          horizontal
          showsHorizontalScrollIndicator={false}
  renderItem={({ item, index }) => (
    <View
      style={{margin:5,paddingHorizontal:8}}
      key={item.id}
    >
      
      <TouchableOpacity style={styles.cartItem}>
        	<Image style={styles.catImageStyle} source={{uri:item.image}}/>
          <Text style={styles.catext}>{item.name}</Text>
        </TouchableOpacity>
      
    </View>
  )}
/>
       
</View>
      {/* .......... */}
     <View style={{width:w-20,height:h/4,backgroundColor:'#fff'.at,elevation:10}}>
      <SwiperComponent />
     </View>



      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: '#fff',
          height: h,
          width: w,
        }}>
        {/* {data.map(item => {
          <Text>{item.name}</Text>;
        })} */}
        {/* <View style={{ width: w, height: 100 }}>
          <FlatList
            style={{flex:1}}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
        </View> */}
        
      </View>
      
				<BottomTab navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  catImageStyle: {
    width: 40,
    height: 40,
    borderRadius:10
  },
  catContainer: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-around',
    width:w
  },
  cartItem: {
    alignItems:'center'
  },
  catext: {
    fontSize: 12,
    color: '#2aa198',
    fontWeight:'500'
  }
});
