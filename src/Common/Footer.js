import { Dimensions, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from './Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;
const Footer = ({ navigation }) => {


    const latitude = "17.698906";
    const longitude = "77.216225";
    const label = "15-92 Chitguppa, 585412, India";
    const url = Platform.select({
        ios: "maps:" + latitude + "," + longitude + "?q=" + label,
        android: "geo:" + latitude + "," + longitude + "?q=" + label
      });

    return (
        <View style={styles.Container}>
            <View style={styles.horizontalDevider}></View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <View>
                    <Text onPress={() => navigation.navigate('WebScreen', { url: 'privacypolicy' })} style={styles.policuText}>Privacy Policy</Text>
                    <Text onPress={() => navigation.navigate('WebScreen', { url: 'termsandconditions' })} style={styles.policuText}>Terms & Conditions</Text>
                    <Text onPress={() => navigation.navigate('WebScreen', { url: 'aboutus' })} style={styles.policuText}>About Us</Text>
                    <Text onPress={() => navigation.navigate('WebScreen', { url: 'refundpolicy' })} style={styles.policuText}>Refund Policy</Text>
                    <Text onPress={() => navigation.navigate('WebScreen', { url: 'shippingpolicy' })} style={styles.policuText}>Shipping Policy</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=> Linking.openURL(url)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="home" size={15} color={Colors.staricon} style={{ width: 20 }} />
                        <Text style={styles.policuText}>15-92 Chitguppa, 585412, India</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Linking.openURL('mailto:mufeez@retailcenter.io') } style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="envelope" size={12} color={Colors.staricon} style={{ width: 20 }} />
                        <Text style={styles.policuText}>mufeez@retailcenter.io</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> Linking.openURL(`tel:${+918483458427}`)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="phone" size={15} color={Colors.staricon} style={{ width: 20 }} />
                        <Text style={styles.policuText}>+918483458427</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    Container: {
        width: w - 20,
        alignSelf: 'center',
        bottom: 20,

    },
    policuText: {
        color: Colors.gray,
        fontWeight: '500',
        fontSize: 12,
        paddingVertical: 5
    },
    horizontalDevider: {
        backgroundColor: Colors.c,
        height: 1, width: '100%'
    }
})