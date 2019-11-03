import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.oneStyle}></View>
      <View style={styles.twoStyle}></View>
      <View style={styles.threeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  oneStyle: {
    width: 80,
    height: 60,
    borderWidth: 1,
    borderColor: 'red'

  },
  twoStyle: {
    width: 80,
    height: 60,
    borderWidth: 1,
    borderColor: 'green',
    top: 60
  },
  threeStyle: {
    width: 80,
    height: 60,
    borderWidth: 1,
    borderColor: 'purple',
    marginBottom: 0
  }
});

export default BoxScreen;
