import { StyleSheet, Text, TextInput, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';


const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const Login = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ width: w, alignItems: 'center' }}>
        <Image
          style={styles.tinyLogo}
          source={require('./../Assets/blue.png')}
        />
      </View>
      <View style={{ width: w, alignItems: 'center', marginVertical: 15 }}>
        <Text style={styles.logintext}>Login To Your Account</Text>
      </View>
      {/* /........../ */}
      <View style={styles.inputContainer}>
					<Ionicons name="mail" size={15} color={"#000"} style={styles.icons} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          clearTextOnFocus={'#000'}
          placeholderTextColor={'#ccc'}
        />
      </View>
      <View style={styles.inputContainer}>
      <Ionicons name="ios-lock-open" size={16} color={"#000"} style={styles.icons} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          clearTextOnFocus={'#000'}
          placeholderTextColor={'#ccc'}
        />
      </View>
      {/* ........Button......... */}
      <TouchableOpacity onPress={()=> navigation.navigate('Loginwithotp')} activeOpacity={0.7} style={[styles.inputContainer, { backgroundColor: '#000', marginVertical: 20, borderRadius: 25, elevation: 10,flexDirection:'column' }]}>
        <Text style={styles.LoginButton}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.fgpasswrd}>Forgot the Password?</Text>



    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'

  },
  inputContainer: {
    width: w / 1.3,
    backgroundColor: '#f0f2f5',
    borderRadius: 15,
    marginVertical: 8,
    flexDirection:'row',
    alignItems:'center'
  },
  input: {
    paddingHorizontal: 5,
    width:'100%'
  },
  imageStyle: {
    width: 100, height: 100
  },
  tinyLogo: {
    width: w / 1.2,
    height: h / 3.5,
    padding: 10
  },
  logintext: {
    color: '#000',
    fontSize: 25,
    fontWeight: '600'
  },
  LoginButton: {
    marginVertical: 13,
    textAlign: 'center',
    color: '#fff', fontWeight: '500',
    fontSize: 15
  },
  fgpasswrd:{
    fontSize:14,
    color:'#000',
    fontWeight:'600'
  },
  icons:{
    paddingHorizontal:10
  }

})