import React from 'react';
import { Dimensions, Image, StyleSheet, ScrollView, Text } from 'react-native';

const { width, height } = Dimensions.get('window');
const london = require('../images/london.jpg');
const sanFran = require('../images/sanFran.jpg');
const newYork = require('../images/newYork.jpg');
const melbourne = require('../images/melbourne.jpg');

const styles = StyleSheet.create({
  image: {
    width,
    height: Math.floor(height * 0.3),
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 30,
    padding: 5,
    backgroundColor: 'transparent',
  },
});

const imageAndText = (imageSource, text) => (
  <Image source={imageSource} style={styles.image}>
    <Text style={styles.title}>
      {text}
    </Text>
  </Image>
);

const CityList = () => (
  <ScrollView>
    {imageAndText(newYork, 'New York')}
    {imageAndText(london, 'London')}
    {imageAndText(sanFran, 'San Francisco')}
    {imageAndText(melbourne, 'Melbourne')}
  </ScrollView>
);

export default CityList;
