import { isAndroid } from 'app/utils/platform';
import React from 'react';
import { Platform, StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  heading: 'h1' | 'h2' | 'h3' | 'h4';
};
const headingLookup = {
  h1: 32,
  h2: 26,
  h3: 22,
  h4: 20,
};
const AppHeading = (props: Props) => {
  const { children, style, color = '#222', heading = 'h3' } = props;

  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: headingLookup[heading],
          color: color,
        },
        style ? style : {},
      ]}
    >
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: 'Avenir',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
  },
});

export default AppHeading;