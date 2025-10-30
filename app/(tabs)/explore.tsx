import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, fonts } from '../../context/style';

export default function Explore() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Explore</Text>
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
  text: {
    color: colors.textLight,
    fontFamily: fonts.bold,
    fontSize: 20,
  },
});
