import { MaterialCommunityIcons } from '@expo/vector-icons';
import defaultStyles, { colors } from 'app/styles/global';
import { isIos } from 'app/utils/platform';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

type Props = TextInputProps & {
  icon?: any;
};

const AppTextInput = (props: Props) => {
  const { icon, ...textInputResProps } = props;
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}

      <TextInput
        style={[styles.textInput, textInputResProps.style]}
        {...textInputResProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
  },
  textInput: {
    ...defaultStyles.text,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
