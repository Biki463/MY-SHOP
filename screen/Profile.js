import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/background.jpg')} // Replace with the actual path to your background image
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.profileContainer}>
          <ImageBackground
            source={require('../images/BIKI.jpg')} // Replace with the actual path to your profile image
            style={styles.profileImage}
          >
            {/* You can add an overlay or additional styling for the profile image if needed */}
          </ImageBackground>
          <Text style={styles.name}>Biki Kumar Sah</Text>
          <Text style={styles.details}>From Nepal</Text>
          <Text style={styles.details}>
            Studying at KPR Institute of Engineering and Technology
          </Text>
          <Text style={styles.details}>B.E in Computer Science</Text>
          <Text style={styles.details}>Android Developer | React Native Enthusiast</Text>
          <Text style={styles.details}>Created an app for internship assignment</Text>
          <Text style={styles.details}>Spent nearly 23 hours to complete the app</Text>
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    overflow: 'hidden', // Ensure image stays within rounded borders
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  details: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
});

export default ProfileScreen;
