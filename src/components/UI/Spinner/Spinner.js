import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const spinner = () => <ActivityIndicator size="large" color="#0e7a1d" />

styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})



export default spinner