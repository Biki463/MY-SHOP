import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const ProductProfileBox = ({ data }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/background.jpg')} // Replace with the actual path to your background image
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.profileContainer}>
          {/* You can add an overlay or additional styling for the profile image if needed */}
          <Text style={styles.name}>{data[0].gender}</Text>
          <Text style={styles.details}>Total Products: {data.length}</Text>
          {data.map((item, index) => (
            <View key={index} style={styles.productInfo}>
              <ImageBackground
                source={item.image} // Use the correct image source here
                style={styles.productImage}
              >
                {/* You can add an overlay or additional styling for the product image if needed */}
              </ImageBackground>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>रु {item.price}</Text>
            </View>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImageStyle: {
    opacity: 0.6, // You can adjust the opacity of the background image
  },
  profileContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Add a semi-transparent white background
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '80%',
  },
  productInfo: {
    marginBottom: 15,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    overflow: 'hidden', // Ensure image stays within rounded borders
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#666',
  },
});

export default ProductProfileBox;
