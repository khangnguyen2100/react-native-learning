import { colors } from 'app/styles/global';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  // logo
  logo_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 70,
    marginBottom: 50,
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
  form: {
    width: '100%',
    paddingHorizontal: 15,
    rowGap: 16,
  },
  loginBtn: {
    marginTop: 12,
  },
});

export default styles;
