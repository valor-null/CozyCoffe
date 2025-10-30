import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
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
