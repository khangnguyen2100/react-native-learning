import defaultStyles from 'app/styles/global';
import React from 'react';
import { Platform, StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  fontSize?: number;
};

const AppText = (props: Props) => {
  const { children, style, color = '#222', fontSize = 18 } = props;

  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: fontSize,
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
    ...defaultStyles.text,
  },
});

export default AppText;
