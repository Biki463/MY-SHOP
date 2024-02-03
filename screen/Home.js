import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

import Search from './Head';
import Cart from './Cart';

import Profile from './Profile';
import Head from './Head';


const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);



  return (
    <View style={{flex: 1}}>
      {selectedTab == 0 ? (
        <Head />
      ): selectedTab == 1 ? (
        <Cart />
      ) : selectedTab == 2 ? (
        < Search/>
      ) : (
        <Profile />
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 70,
          flexDirection: 'row',
          backgroundColor: '#fff',
          elevation: 5,
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../images/home.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 0 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: selectedTab == 1 ? 'green' : '#000',
            justifyContent: 'center',
            borderRadius: 25,
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../images/bag.png')}
            style={{width: 24, height: 24, tintColor: '#fff'}}
          />
        
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={require('../images/heart.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 2 ? '#000' : '#8e8e8e',
            }}
          />
         
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../images/user.png')}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 3 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
