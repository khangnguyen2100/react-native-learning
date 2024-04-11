import colors from 'app/constants/enums/colors';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
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
  },
});
export default AppSafeView;
