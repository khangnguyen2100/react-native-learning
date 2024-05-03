import { colors } from 'app/styles/global';
import { isAndroid } from 'app/utils/platform';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
type Props = {
  children: React.ReactNode;
};

const AppSafeView = ({ children }: Props) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingTop: isAndroid ? Constants.statusBarHeight : 0,
  },
});
export default AppSafeView;
