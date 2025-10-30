import { useRouter } from 'expo-router';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, fonts } from '../context/style';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.content}>
        <MotiView
          from={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 400 }}
          style={styles.headerBox}
        >
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Bem-vindo de volta ao Cozy Coffe</Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 15 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 150, duration: 400 }}
          style={styles.formBox}
        >
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="exemplo@email.com"
            placeholderTextColor="#9B7F5D"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={[styles.label, { marginTop: 16 }]}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="*******"
            placeholderTextColor="#9B7F5D"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={() => router.replace('/')}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        </MotiView>

        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 350, duration: 300 }}
          style={styles.footer}
        >
          <Text style={styles.footerText}>Ainda não tem conta?</Text>
          <TouchableOpacity onPress={() => router.push('/cadastro')}>
            <Text style={styles.footerLink}>Criar conta</Text>
          </TouchableOpacity>
        </MotiView>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    gap: 18,
  },
  headerBox: {
    alignItems: 'center',
  },
  title: {
    color: colors.textLight,
    fontSize: 34,
    fontFamily: fonts.bold,
  },
  subtitle: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.medium,
  },
  formBox: {
    width: '100%',
    backgroundColor: 'rgba(253, 233, 201, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(201, 176, 130, 0.45)',
    borderRadius: 22,
    padding: 18,
    gap: 8,
  },
  label: {
    color: colors.textLight,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  input: {
    backgroundColor: colors.inputBg,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: colors.background,
    fontFamily: fonts.regular,
  },
  loginButton: {
    backgroundColor: colors.accent,
    paddingVertical: 12,
    borderRadius: 18,
    marginTop: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: colors.background,
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
    gap: 4,
  },
  footerText: {
    color: colors.white,
    fontFamily: fonts.regular,
  },
  footerLink: {
    color: colors.textLight,
    fontFamily: fonts.bold,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    padding: 6,
  },
  backText: {
    color: colors.textLight,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
});