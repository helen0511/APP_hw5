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
    const { icom, icom2, head, headtext, img, img2, bar, row, row2, btn, rowtext, card, color } =styles;
    return(
        <View>
            <View style={[head]}>
                <View style={[bar]}>
                    <Image source={require('./Asset/icon_search.png')} style={[icom]}/>
                    <Text style={[headtext]}>Search</Text>
                </View>
            <Image source={require('./Asset/btn_cast.png')} style={[icom2]}/>
            </View>
            <View style={[row]}>
              <Image source={require('./Asset/img_leagueoflegends.png')} style={[img]}/>
              <Image source={require('./Asset/img_counterstrike.png')} style={[img2]}/>
            </View>
            <View style={[row]}>
              <Image source={require('./Asset/img_hearthstone.png')} style={[img]}/>
              <Image source={require('./Asset/img_dota2.png')} style={[img2]}/>
            </View>
            <View style={[row]}>
              <Image source={require('./Asset/img_h1z1.png')} style={[img]}/>
              <Image source={require('./Asset/img_destiny.png')} style={[img2]}/>
            </View>
            <View style={[row2]}>
              <View style={[card]}>
                <Image source={require('./Asset/btn_games_selected.png')} style={[btn]}/>
                <Text style={[rowtext,color]}>  Games</Text>
              </View>
               <View style={[card]}>
                <Image source={require('./Asset/btn_channels.png')} style={[btn]}/>
                <Text style={[rowtext]}>Channels</Text>
              </View>
               <View style={[card]}>
                <Image source={require('./Asset/btn_following.png')} style={[btn]}/>
                <Text style={[rowtext]}> Following</Text>
              </View>
               <View style={[card]}>
                <Image source={require('./Asset/btn_me.png')} style={[btn]}/>
                <Text style={[rowtext]}>     Me</Text>
              </View>
            </View>           
        </View>
    );
}

const styles = StyleSheet.create({
  color: {
    color:'#6441a5'
  },
  card: {
    justifyContent: 'center',
  },
  rowtext: {
    marginTop:-15,
    fontSize:10,
    color:'rgb(187,187,187)',
  },
  btn: {
    height:45,
    width:45,
  },
  row2: {
    flexDirection:'row',
     justifyContent: 'space-around',
  },
  row: {
    flexDirection:'row',
  },
    bar: {
    height:30,
    width: 320,
    marginLeft:8.5,
    marginTop:6.5,
    flexDirection:'row',
    backgroundColor:'rgb(49,31,83)'
    },
  img: {
    margin:5,
    marginBottom:-5,
    height:180,
    width: 180,
  },
  img2: {
    margin:5,
    marginBottom:0,
    marginLeft:0,
    height:180,
    width: 180,
  },
  icom: {
    width: 20,
    height: 20,
    position:'absolute',
    left:11,
    top:5
  },
  icom2: {
    width: 35,
    height: 32,
    position:'absolute',
    top:21,
    right:6
  },
  head:{
    width: 375,
    height: 64,
    backgroundColor:'#6441a5',
    justifyContent: 'center',
  },
  headtext: {
    fontSize:15,
    color:'#fff',
    marginLeft:32,
    marginTop:5,
  }
});
export default page2;