import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React,{Component} from 'react'
import Swiper from 'react-native-swiper';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
						<View style={styles.container}>
							<Image style={styles.sliderImage} source={{uri:'https://i.pinimg.com/originals/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg'}}/>
						</View>
     <View style={styles.container}>
							<Image style={styles.sliderImage} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR53IcP5JWAJJOC5BwLemPPC7FJpwaj9XnZBVML8kIloXBJtG_zTfjBmgR0RuJ88-ELtsk&usqp=CAU'}}/>
						</View>
						<View style={styles.container}>
							<Image style={styles.sliderImage} source={{uri:'http://4.bp.blogspot.com/-1gTfeLFdUIA/Ujw8Bh0h_GI/AAAAAAAAACs/Mh0oGRVICWc/s1600/9x4+SSM+copy.jpg'}}/>
						</View>
      </Swiper>
    )
  }
}



const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	container: {
		margin: 5,
		borderRadius:10
	},
	sliderImage: {
		width:'100%',height:'100%',	borderRadius:10
	}
})






