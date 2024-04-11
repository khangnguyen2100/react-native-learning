import colors from 'app/constants/enums/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content_wrapper: {
    rowGap: 4,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 12,
  },
  title: {
    color: colors.black,
    fontWeight: '700',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});

export default styles;
