import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from 'app/components/common/AppButton/AppButton';
import AppText from 'app/components/common/AppText/AppText';
import { OptionType } from 'app/constants/types/common';
import defaultStyles, { colors } from 'app/styles/global';
import React, { useState } from 'react';
import {
  FlatList,
  GestureResponderEvent,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const PickerItem = (props: {
  item: OptionType;
  onPress?: (
    value: OptionType['value'],
    item: OptionType,
    event: GestureResponderEvent,
  ) => void;
}) => {
  const { item, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress ? e => onPress(item.value, item, e) : undefined}
    >
      <AppText style={[styles.listItem]}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

type Props = {
  icon?: any;
  placeholder: string;
  selectedItem: OptionType['value'] | null | undefined;
  onSelectedItem: (
    value?: OptionType['value'] | null,
    item?: OptionType,
    event?: GestureResponderEvent,
  ) => void;
  options: OptionType[];
};
const AppPicker = (props: Props) => {
  const { icon, placeholder, options, selectedItem, onSelectedItem } = props;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleClearSelectedItem = () => {
    onSelectedItem(null);
    handleCloseModal();
  };

  const handleGetSelectedItemLabel = (
    value: OptionType['value'] | undefined | null,
  ) => {
    return options.find(item => item.value === value)?.label;
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={handleOpenModal}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          <AppText style={[styles.textInput]}>
            {handleGetSelectedItemLabel(selectedItem) ?? (
              <AppText style={styles.placeholder}>{placeholder}</AppText>
            )}
          </AppText>
          <MaterialCommunityIcons
            name={'chevron-down'}
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      {/* modal */}
      <Modal visible={isModalOpen} animationType='slide'>
        <FlatList
          data={options}
          keyExtractor={item => item.value.toString()}
          style={styles.list}
          renderItem={({ item }) => (
            <PickerItem
              item={item}
              onPress={(value, item, e) => {
                onSelectedItem(value, item, e);
                handleCloseModal();
              }}
            />
          )}
          extraData={selectedItem}
        />
        <View style={styles.buttons}>
          <AppButton
            style={styles.button}
            type='primary'
            onPress={handleClearSelectedItem}
          >
            Clear
          </AppButton>
          <AppButton
            style={styles.button}
            type='secondary'
            onPress={handleCloseModal}
          >
            Close
          </AppButton>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 25,
    backgroundColor: colors.white,
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    marginTop: 24,
    marginHorizontal: 8,
  },
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  textInput: {
    ...defaultStyles.text,
    flex: 1,
    width: '100%',
    fontWeight: '600',
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    columnGap: 12,
    paddingHorizontal: 8,
    paddingVertical: 20,
  },
  button: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },

  placeholder: {
    color: '#999',
  },
});
export default AppPicker;
