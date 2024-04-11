import { Picker, PickerIOS } from '@react-native-picker/picker';
import AppPicker from 'app/components/Input/AppPicker/AppPicker';
import AppTextInput from 'app/components/Input/AppTextInput/AppTextInput';
import { OptionType } from 'app/constants/types/common';
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
      <AppPicker
        options={[
          { label: 'Java', value: 1 },
          { label: 'Go lang', value: 2 },
          { label: 'Javascript', value: 3 },
          { label: 'React', value: 4 },
          { label: 'PHP', value: 5 },
        ]}
        selectedItem={selectedItem}
        onSelectedItem={value => setSelectedItem(value)}
        icon={'apps'}
        placeholder='Category'
      />
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
