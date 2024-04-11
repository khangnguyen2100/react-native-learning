import React from 'react';
import { Image, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import colors from 'app/constants/enums/colors';

type Props = {};
const image = require('assets/images/chair.jpg');

const ViewImageScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <View>
          <MaterialCommunityIcons name='close' color={colors.white} size={35} />
        </View>
        <View>
          <MaterialCommunityIcons
            name='trash-can-outline'
            color={colors.white}
            size={35}
          />
        </View>
      </View>
      <Image source={image} resizeMode='contain' style={styles.background} />
    </View>
  );
};

export default ViewImageScreen;
