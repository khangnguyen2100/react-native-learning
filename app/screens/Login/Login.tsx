import AppTextInput from 'app/components/Input/AppTextInput/AppTextInput';
import AppButton from 'app/components/common/AppButton/AppButton';
import { useFormik } from 'formik';
import React from 'react';
import { Image, View } from 'react-native';
import * as Yup from 'yup';
import styles from './styles';

const logoImage = require('assets/images/logo-red.png');

// type UserInfo
const formSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Please enter your email.')
    .label('Email'),
  password: Yup.string()
    .required('Please enter your password!')
    .min(6, 'Password must be greater than 6 charactor')
    .label('Password'),
});
type LoginDataType = {
  email: string;
  password: string;
};
const Login = () => {
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as LoginDataType,
    validationSchema: formSchema,
    onSubmit: (data: LoginDataType) => {
      console.log('data onSubmit:', data);
    },
  });
  console.log('error', form.errors);
  console.log('touch', form.touched);

  const handleFormChange = (data: object) => {
    form.setValues({ ...form.values, ...data });
  };
  return (
    <View style={styles.container}>
      {/* logo */}
      <View style={styles.logo_container}>
        <Image style={styles.logo_container_image} source={logoImage} />
      </View>

      {/* form */}
      <View style={styles.form}>
        <AppTextInput
          placeholder='Email'
          icon={'email'}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          textContentType='emailAddress'
          onChangeText={(value: string) => handleFormChange({ email: value })}
          error={form.errors.email}
          touched={form.touched.email}
          onBlur={() => {
            form.setFieldTouched('email');
          }}
        />
        <AppTextInput
          placeholder='Password'
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='password'
          secureTextEntry
          icon={'lock'}
          onChangeText={(value: string) =>
            handleFormChange({ password: value })
          }
          error={form.errors.password}
          touched={form.touched.password}
          onBlur={() => {
            form.setFieldTouched('password');
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
    </View>
  );
};

export default Login;
