import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../context/style';

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro</Text>
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
  text: {
    color: colors.textLight,
    fontSize: 28,
    fontFamily: fonts.bold,
  },
});
