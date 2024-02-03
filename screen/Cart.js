import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductProfileBox from '../buttom/CartItem';

const Main = () => {
  const tshirtData = [
    {"gender": "male", "image": require('../images/tshirt1.jpg'), "name": "T-shirt 1", "price": 300},
    // Add more t-shirt data
  ];

  const jeansData = [
    {"gender": "male", "image": require('../images/tshirt2.jpeg'), "name": "Jeans 1", "price": 450},
    // Add more jeans data
  ];

  const trouserData = [
    {"gender": "male", "image": require('../images/tshirt3.webp'), "name": "Trouser 1", "price": 350},
    // Add more trouser data
  ];

  return (
    <View style={styles.container}>
      <ProductProfileBox data={tshirtData} />
      <ProductProfileBox data={jeansData} />
      <ProductProfileBox data={trouserData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});

export default Main;
