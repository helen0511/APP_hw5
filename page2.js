import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

const page2 = () => {
    const { icom, icom2, head, headtext, section, sectext, sec1, img, img2 } =styles;
    return(
        <View>
            <View style={[head]}>
            <Image source={require('./Asset/btn_back.png')} style={[icom]}/>
            <Text style={[headtext]}>Hearthstone</Text>
            <Image source={require('./Asset/btn_following.png')} style={[icom2]}/>
            </View>
            <View style={[section]}>
                <Text style={[sectext]}>LIVE</Text>
                <Text style={[sectext]}>RECENT</Text>
            </View>
            <View style={[sec1]}></View>
            <Image source={require('./Asset/img_firebat.png')} style={[img]}/>
            <Image source={require('./Asset/img_forsen.png')} style={[img]}/>
            <Image source={require('./Asset/img_kolento.png')} style={[img2]}/>
        </View>
    );
}

const styles = StyleSheet.create({
  img: {
    margin:5,
    marginBottom:0,
    height:200,
    width: 365,
  },
  img2: {
    margin:5,
    height:144,
    width: 365,
  },
  section: {
      flexDirection:'row',
      height:40,
      width: 375,
  },
  sectext: {
    flex:1,
    fontSize: 13,
    color:'#6441a5',
    textAlign:'center',
    padding:14
  },
  sec1: {
      height:5,
      width: 187.5,
      backgroundColor:'#6441a5',
  },  
  icom: {
    width: 28,
    height: 25,
    position:'absolute',
    left:15,
    marginTop:5,
    top:22
  },
  icom2: {
    width: 45,
    marginTop:5,
    height: 40,
    position:'absolute',
    top:17,
    right:0
  },
  head:{
    width: 375,
    height: 60,
    backgroundColor:'#6441a5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headtext: {
    marginTop:13,
    fontSize:18,
    color:'#fff',
  }
});
export default page2;