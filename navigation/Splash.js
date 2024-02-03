import { StyleSheet,Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Loading from "./Loading";



const Splash = ({navigation}) => {
  useEffect(() =>{
    setTimeout (() =>{
      navigation.navigate('Home')
    }, 6000 );
  },[]);

  return (
    <View style={{flex: 1,}}>
      <Loading/>
    </View>
  );
  
}

export default Splash;