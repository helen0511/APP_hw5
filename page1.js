import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

const page1 = () =>{
    const { back, pic } = styles;
    return(
    <View style = {[back]}>
        <StatusBar hidden={true} />
        <Image source={require('./Asset/logo_twitch.png')}
                style={[pic]} />
    </View>
    );
};

const styles =StyleSheet.create({
    back: {
        flex:1,
        backgroundColor : '#6441a5',
        alignItems:'center',
        justifyContent:'center'
    },
    pic: {
        height:100,
        width:210
    }
});

export default page1;