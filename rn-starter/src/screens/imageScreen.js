import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/imageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Foresst'
        imagetoShow={require('../../assets/forest.jpg')}
        score={8}
      />
      <ImageDetail
        title='Beach'
        imagetoShow={require('../../assets/beach.jpg')}
        score={7}
      />
      <ImageDetail
        title='Mountain'
        imagetoShow={require('../../assets/mountain.jpg')}
        score={9}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
