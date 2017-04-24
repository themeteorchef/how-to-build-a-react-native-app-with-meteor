import React from 'react';
import { StyleSheet, View } from 'react-native';
import CityList from './CityList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <CityList />
  </View>
  );

export default HomeScreen;
