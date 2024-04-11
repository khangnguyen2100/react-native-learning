import colors from 'app/constants/enums/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  author_wrapper: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 20,
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  author_avatar: {
    borderRadius: 999,
    width: 70,
    height: 70,
  },
  author_content_wrapper: {
    flex: 1,
    rowGap: 0,
  },
  author_name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author_items_count: {
    color: colors.medium,
    fontWeight: '600',
    fontSize: 15,
  },
});

export default styles;
