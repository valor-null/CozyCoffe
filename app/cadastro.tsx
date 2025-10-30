import { StyleSheet, Text, View } from 'react-native';

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
    backgroundColor: '#2D211C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FDE9C9',
    fontSize: 28,
    fontWeight: '700',
  },
});
