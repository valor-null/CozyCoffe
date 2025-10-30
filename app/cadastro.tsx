// app/cadastro.tsx
import { useRouter } from 'expo-router';
import { AnimatePresence, MotiView } from 'moti';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../context/style';

export default function Cadastro() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [avatar, setAvatar] = useState<'girl' | 'boy' | null>(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleAvatarSelect(a: 'girl' | 'boy') {
    setAvatar(a);
    setStep(2);
  }

  return (
    <View style={styles.container}>
      <AnimatePresence exitBeforeEnter>
        {step === 1 ? (
          <MotiView
            key="step1"
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -20 }}
            transition={{ duration: 400 }}
            style={styles.content}
          >
            <View style={styles.headerBox}>
              <Text style={styles.title}>Para começamos vamos fazer seu perfil</Text>
              <Text style={styles.subtitle}>Escolha uma opção</Text>
            </View>

            <View style={styles.avatarRow}>
              <TouchableOpacity style={styles.avatarCard} onPress={() => handleAvatarSelect('girl')}>
                <Image
                  source={require('../assets/images/girl.png')}
                  style={styles.avatarImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.avatarCard} onPress={() => handleAvatarSelect('boy')}>
                <Image
                  source={require('../assets/images/boy.png')}
                  style={styles.avatarImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text style={styles.loginLink}>Já possui uma conta? Fazer-Login</Text>
            </TouchableOpacity>
          </MotiView>
        ) : (
          <MotiView
            key="step2"
            from={{ opacity: 0, translateY: 15 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -15 }}
            transition={{ duration: 400 }}
            style={styles.content}
          >
            <View style={styles.headerBox}>
              <Text style={styles.title}>Responda as perguntas</Text>
            </View>

            <View style={styles.formBox}>
              <Text style={styles.label}>Seu nome:</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                placeholderTextColor="#9B7F5D"
                value={nome}
                onChangeText={setNome}
              />

              <Text style={[styles.label, { marginTop: 16 }]}>Email:</Text>
              <TextInput
                style={styles.input}
                placeholder="exemplo@email.com"
                placeholderTextColor="#9B7F5D"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Text style={[styles.label, { marginTop: 16 }]}>Senha:</Text>
              <TextInput
                style={styles.input}
                placeholder="*******"
                placeholderTextColor="#9B7F5D"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
              />

              <TouchableOpacity style={styles.loginButton} onPress={() => router.replace('/home')}>
                <Text style={styles.loginButtonText}>Acessar</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => setStep(1)} style={styles.switchAvatar}>
              <Text style={styles.switchAvatarText}>
                Trocar ícone
                {avatar ? avatar === 'girl' ? ' (atual: menina)' : ' (atual: menino)' : ''}
              </Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Já possui uma conta?</Text>
              <TouchableOpacity onPress={() => router.push('/login')}>
                <Text style={styles.footerLink}>Fazer-Login</Text>
              </TouchableOpacity>
            </View>
          </MotiView>
        )}
      </AnimatePresence>
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
    fontSize: 24,
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
  subtitle: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fonts.medium,
  },
  avatarRow: {
    flexDirection: 'row',
    gap: 16,
  },
  avatarCard: {
    width: 130,
    height: 130,
    backgroundColor: '#C9B082',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: '90%',
    height: '90%',
  },
  loginLink: {
    color: colors.textLight,
    fontFamily: fonts.bold,
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
  switchAvatar: {
    marginTop: 4,
    padding: 4,
  },
  switchAvatarText: {
    color: '#E1C39B',
    fontFamily: fonts.medium,
    fontSize: 12,
    textDecorationLine: 'none',
  },
});