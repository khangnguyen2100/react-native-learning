import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from 'app/components/common/AppText/AppText';
import defaultStyles, { colors } from 'app/styles/global';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

type Props = TextInputProps & {
  icon?: any;
  background?: 'white' | 'gray';
  error?: string;
  touched?: boolean;
};

const AppTextInput = (props: Props) => {
  const {
    icon,
    background = 'gray',
    error,
    touched,
    ...textInputResProps
  } = props;
  return (
    <View>
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              background === 'gray' ? colors.background : colors.white,
          },
        ]}
      >
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
          placeholderTextColor={'#999'}
        />
      </View>
      {error && touched && <AppText style={styles.error}>{error}</AppText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 25,
    padding: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    ...defaultStyles.text,
    width: '90%',
  },
  error: {
    color: colors.danger,
    opacity: 0.8,
    marginLeft: 2,
    marginTop: 3,
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
