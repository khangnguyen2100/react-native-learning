import { colors } from 'app/styles/global';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },

  // logo
  logo_container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    top: '6%',
  },
  logo_container_image: {
    width: 100,
    height: 100,
  },
  text: {
    fontWeight: '500',
    fontSize: 24,
    color: colors.black,
    marginTop: 6,
  },

  // actions
  buttons: {
    width: '100%',
    rowGap: 10,
    marginBottom: 25,
    paddingHorizontal: 15,
  },
});

export default styles;
