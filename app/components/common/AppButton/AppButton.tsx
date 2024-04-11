import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './styles';

type Props = {
  type?: 'primary' | 'secondary';
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

const AppButton = (props: Props) => {
  const { type = 'primary', children, style, onPress } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'primary' ? styles.button_primary : styles.button_secondary,
        style,
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
