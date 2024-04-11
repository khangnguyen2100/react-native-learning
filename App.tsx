import colors from 'app/constants/enums/colors';
import Account from 'app/screens/Account/Account';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Account
        avatar={require('assets/images/avatar.jpg')}
        name='Khang Nguyen'
        email='khangng2100@gmail.com'
      />

      {/* <CardDetail
        card={{
          id: 1,
          price: 100,
          thumbnailUrl: require('assets/images/jacket.jpg'),
          title: 'Red jacket for sale',
          description: 'In good condition',
        }}
        author={{
          avatar: require('assets/images/avatar.jpg'),
          name: 'Khang Nguyen',
          itemsCount: 5,
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
