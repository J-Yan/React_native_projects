import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imagetoShow, title, score }) => {
  return (
    <View>
      <Image source={imagetoShow}/>
      <Text>{title}</Text>
      <Text>image score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
