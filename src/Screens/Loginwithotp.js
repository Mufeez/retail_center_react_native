import { StyleSheet, Text, TextInput, View, Dimensions, Image, TouchableOpacity ,Pressable, Keyboard, StatusBar} from 'react-native'
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonContainer, ButtonText } from '../Common/styles';
import OTPInput from './../Common/OTPInput';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const Loginwithotp = ({navigation}) => {
    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 4;    
    

    const PressFC = () =>{
        Keyboard.dismiss
        navigation.navigate('HomeScreen');
    }
  return (
    <View  style={styles.mainContainer}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.icons} onPress={()=> navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left-thin" size={35} color={"#000"}  />
            </TouchableOpacity>
        <Text style={{textAlign:'center',left:60,position:'absolute',fontSize:16,fontWeight:'500',color:'#000'}}>Login with OTP</Text>
        </View>


        <Text style={styles.fgpasswrd}>Code has been sent to  +91 8073245656</Text>
         {/* header Container */}
    <Pressable  style={styles.container} onPress={()=> PressFC()}>
      <OTPInput
        code={otpCode}
        
        setCode={setOTPCode}
        maximumLength={maximumCodeLength}
        setIsPinReady={setIsPinReady}
      />

      <ButtonContainer
        disabled={!isPinReady}
        style={{
          backgroundColor: !isPinReady ? "#000" : "#000000",borderRadius:25,width:w/1.4
        }}
      >
        <ButtonText
          style={{
            color: !isPinReady ? "gray" : "#fff",
          }}
        >
          Verify
        </ButtonText>
      </ButtonContainer>
      <StatusBar style="auto" />
    </Pressable>
    <Text style={styles.fgpasswrd}>Resend in 58 s</Text>
    </View>
  )
}

export default Loginwithotp

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'

  },
  inputContainer: {
    width: w / 1.3,
    backgroundColor: '#fff',
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
    color:'gray',
    fontWeight:'600',
    paddingVertical:10
  },
  icons:{
    paddingHorizontal:10,
    left:5,position:'absolute'
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header:{
    height:55,
    width:w,
    backgroundColor:'#fff',
    top:0,
    position:'absolute',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
  }

})