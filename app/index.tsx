import { useRouter } from 'expo-router';
import { MotiView } from 'moti';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../context/style';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, translateY: -15 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 500 }}
        style={styles.textBox}
      >
        <Text style={styles.subtitle}>
          Seu café de gatinhos, melhores opções de café e melhores preços
        </Text>
      </MotiView>

      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 150, duration: 500 }}
        style={styles.imageBox}
      >
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </MotiView>

      <MotiView
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 300, duration: 500 }}
        style={styles.buttonWrapper}
      >
        <TouchableOpacity style={styles.button} onPress={() => router.push('/cadastro')}>
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </MotiView>

      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 450, duration: 400 }}
        style={styles.loginBox}
      >
        <Text style={styles.loginText}>Ja possui uma conta?</Text>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.loginLink}>Fazer-Login</Text>
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 14,
  },
  textBox: {
    maxWidth: 350,
  },
  subtitle: {
    color: colors.textLight,
    fontSize: 23,
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: fonts.bold,
  },
  imageBox: {
    width: 310,
    height: 250,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 12,
  },
  button: {
    backgroundColor: colors.accent,
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 40,
  },
  buttonText: {
    color: colors.background,
    fontSize: 18,
    fontFamily: fonts.bold,
  },
  loginBox: {
    marginTop: 10,
    alignItems: 'center',
  },
  loginText: {
    color: colors.white,
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  loginLink: {
    color: colors.textLight,
    fontSize: 13,
    textDecorationLine: 'none',
    marginTop: 4,
    fontFamily: fonts.bold,
  },
});
