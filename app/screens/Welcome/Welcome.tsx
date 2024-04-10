import AppButton from 'app/components/common/AppButton/AppButton';
import AppText from 'app/components/common/AppText/AppText';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import styles from './styles';

const welcomeImage = require('assets/images/background.jpg');
const logoImage = require('assets/images/logo-red.png');

type Props = {};
const WelcomeScreen = (props: Props) => {
  return (
    <ImageBackground
      source={welcomeImage}
      style={styles.background}
      resizeMode='cover'
    >
      {/* logo */}
      <View style={styles.logo_container}>
        <Image style={styles.logo_container_image} source={logoImage} />
        <AppText style={styles.text}>Sell What You Don't Need</AppText>
      </View>

      {/* actions */}
      <View style={styles.buttons}>
        <AppButton type='primary' onPress={() => console.log('login tapped')}>
          Login
        </AppButton>
        <AppButton type='secondary'>Register</AppButton>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
