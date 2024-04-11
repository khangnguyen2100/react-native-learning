import colors from 'app/constants/enums/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    marginVertical: 12,
  },
  // user info
  user_info_wrapper: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 20,
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  user_avatar: {
    borderRadius: 999,
    width: 70,
    height: 70,
  },
  user_content_wrapper: {
    flex: 1,
    rowGap: 4,
  },
  user_name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    color: colors.medium,
    fontWeight: '600',
    fontSize: 15,
  },

  // item
  item_wrapper: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    columnGap: 12,
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 1,
  },
  item_icon_wrapper: {
    borderRadius: 999,
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_icon: {
  },
  item_title: {
    fontWeight: '600',
    fontSize: 16,
  },
});
export default styles;
