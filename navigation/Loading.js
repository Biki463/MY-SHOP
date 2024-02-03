import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';

const LoadingPage = () => {
  const [heartbeats] = useState([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]);

  useEffect(() => {
    const heartbeatAnimations = heartbeats.map((heartbeat, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(heartbeat, {
            toValue: 1,
            duration: 1000 + index * 200,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
          Animated.timing(heartbeat, {
            toValue: 0,
            duration: 1000 + index * 200,
            easing: Easing.ease,
            useNativeDriver: true,
          }),
        ])
      )
    );

    heartbeatAnimations.forEach(animation => animation.start());

    return () => {
      heartbeatAnimations.forEach(animation => animation.stop());
    };
  }, []);

  const heartbeatStyles = heartbeats.map((heartbeat, index) => ({
    transform: [
      {
        scale: heartbeat.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.9 + index * 0.1],
        }),
      },
    ],
  }));

  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logo} />
      <View style={styles.heartbeatContainer}>
        {heartbeats.map((_, index) => (
          <Animated.View
            key={index}
            style={[styles.heartbeatIcon, heartbeatStyles[index]]}
          >
           
            <Image
              source={require('../images/icon3.png')}
              style={styles.heartIcon}
            />
          </Animated.View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  heartbeatContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartbeatIcon: {
    marginHorizontal: 10,
  },
  heartIcon: {
    width: 30,
    height: 40,
   resizeMode:'cover',
    tintColor: 'black',
   
    
    
    },
});

export default LoadingPage;