import { isIos } from 'app/utils/platform';
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#fC5C65',
  secondary: '#4ECDC4',
  background: '#f8f4f4',
  medium: '#6e6969',
  blue: 'dodgerblue',
  danger: '#ff5252',
  black: '#222',
  white: 'white',
};

const defaultStyles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: isIos ? 'Avenir' : 'Roboto',
  },
});
export default defaultStyles;
