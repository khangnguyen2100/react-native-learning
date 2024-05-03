import AppPicker from 'app/components/Input/AppPicker/AppPicker';
import AppTextInput from 'app/components/Input/AppTextInput/AppTextInput';
import AppButton from 'app/components/common/AppButton/AppButton';
import { OptionType } from 'app/constants/types/common';
import { useFormik } from 'formik';
import React from 'react';
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import * as Yup from 'yup';
import styles from './styles';

const logoImage = require('assets/images/logo-red.png');

// type UserInfo
const formSchema = Yup.object().shape({
  title: Yup.string().required('Please enter title.'),
  price: Yup.number().nullable().required('Please enter price!').min(1),
  category: Yup.string().required('Please select category.'),
  description: Yup.string().nullable(),
});
type FormType = {
  title: string;
  price: number | null;
  category: number | string | null;
  description: string | null;
};

const categories: OptionType[] = [
  { label: 'Java', value: 1 },
  { label: 'PHP', value: 2 },
  { label: 'C#', value: 3 },
  { label: 'Javascript', value: 4 },
];

const CreateItem = () => {
  const form = useFormik({
    initialValues: {
      title: '',
      price: null,
      category: null,
      description: null,
    } as FormType,
    validationSchema: formSchema,
    onSubmit: (data: FormType) => {
      console.log('data onSubmit:', data);
    },
  });
  console.log('form.errors:', form.errors);
  console.log('form.values:', form.values);

  console.log('form.touched:', form.touched);

  const handleFormChange = (data: object) => {
    form.setValues({ ...form.values, ...data });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* logo */}
      <View style={styles.logo_container}>
        <Image style={styles.logo_container_image} source={logoImage} />
      </View>

      {/* form */}
      <View style={styles.form}>
        <AppTextInput
          placeholder='Title'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(value: string) => handleFormChange({ title: value })}
          error={form.errors.title}
          touched={form.touched.title}
          onBlur={() => {
            form.setFieldTouched('title');
          }}
        />
        <AppTextInput
          placeholder='Price'
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='numeric'
          onChangeText={(value: string) => handleFormChange({ price: value })}
          error={form.errors.price}
          touched={form.touched.price}
          onBlur={() => {
            form.setFieldTouched('price');
          }}
        />
        <AppPicker
          options={categories}
          selectedItem={form.values.category}
          placeholder='Category'
          onSelectedItem={value => handleFormChange({ category: value })}
          error={form.errors.category}
          touched={form.touched.category}
        />
        <AppTextInput
          placeholder='Description'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={(value: string) =>
            handleFormChange({ description: value })
          }
          numberOfLines={3}
          multiline
          maxLength={500}
          error={form.errors.description}
          touched={form.touched.description}
          onBlur={() => {
            form.setFieldTouched('description');
          }}
        />
        <AppButton
          style={styles.loginBtn}
          type='primary'
          onPress={() => form.handleSubmit()}
        >
          Login
        </AppButton>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateItem;
