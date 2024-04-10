import colors from 'app/constants/enums/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  button: {
    width: 50,
    height: 50,
  },
  delete_btn: {
    backgroundColor: colors.primary,
  },
  next_btn: {
    backgroundColor: colors.secondary,
  },
  // background
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default styles;
