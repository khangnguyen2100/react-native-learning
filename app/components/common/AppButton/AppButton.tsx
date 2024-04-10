import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type Props = {
  type?: 'primary' | 'secondary';
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
};

const AppButton = (props: Props) => {
  const { type = 'primary', children, onPress } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'primary' ? styles.button_primary : styles.button_secondary,
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
