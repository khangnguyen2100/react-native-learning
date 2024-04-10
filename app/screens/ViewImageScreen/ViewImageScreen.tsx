import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

type Props = {};
const image = require('assets/images/chair.jpg');

const ViewImageScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <View style={[styles.button, styles.delete_btn]}></View>
        <View style={[styles.button, styles.next_btn]}></View>
      </View>
      <Image source={image} resizeMode='contain' style={styles.background} />
    </View>
  );
};

export default ViewImageScreen;
