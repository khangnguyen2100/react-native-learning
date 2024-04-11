import colors from 'app/constants/enums/colors';
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card_wrapper: {
    width: '100%',
  },
  card: {
    overflow: 'hidden',
    backgroundColor: colors.white,
    borderRadius: 15,
    width: '100%',
    minHeight: 250,

    elevation: 1,
    shadowColor: colors.black,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  content: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 12,
    rowGap: 8,
    textAlign: 'left',
  },
  name: {
    color: colors.black,
    fontWeight: '600',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});
export default styles;
