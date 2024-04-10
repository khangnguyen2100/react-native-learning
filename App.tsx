import colors from 'app/constants/enums/colors';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import WelcomeScreen from './app/screens/Welcome/Welcome';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}
      <StatusBar style='auto' />
    </SafeAreaView>
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
