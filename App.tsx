import { Picker, PickerIOS } from '@react-native-picker/picker';
import AppTextInput from 'app/components/Input/AppTextInput/AppTextInput';
import { OptionType } from 'app/constants/types/common';
import CreateItem from 'app/screens/CreateItem/CreateItem';
import ListingScreen from 'app/screens/ListingScreen/ListingScreen';
import Login from 'app/screens/Login/Login';
import { colors } from 'app/styles/global';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const [selectedItem, setSelectedItem] = useState<
    OptionType['value'] | null
  >();

  return (
    <View style={styles.container}>
      {/* <Account
        avatar={require('assets/images/avatar.jpg')}
        name='Khang Nguyen'
        email='khangng2100@gmail.com'
      /> */}

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
      {/* <Login /> */}
      <CreateItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
