import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const customTopBar = () => (
  <View style={styles.Container}>
    <Image source={require('../../../assets/img/money.png')} />
  </View>
)

styles = StyleSheet.create({
  Container: {
    paddingTop: 5
  }
})



export default customTopBar