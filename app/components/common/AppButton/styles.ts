import { colors } from 'app/styles/global';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  button_primary: {
    backgroundColor: colors.primary,
  },
  button_secondary: {
    backgroundColor: colors.secondary,
  },
  text: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.white,
  },
});

export default styles;
