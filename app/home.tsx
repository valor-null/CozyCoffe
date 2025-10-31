import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { MotiView } from 'moti';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { auth, db } from '../context/firebaseConfig';
import { colors, fonts } from '../context/style';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;
const CARD_COLOR = '#B8835C';

export default function HomePage() {
  const router = useRouter();
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || '');
  const [avatarKey, setAvatarKey] = useState(user?.photoURL || 'girl');

  useEffect(() => {
    if (!user?.uid) return;
    (async () => {
      try {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (snap.exists()) {
          const data = snap.data() as any;
          setName(data.name || user.displayName || 'NOME DO USUARIO');
          if (data.avatar) setAvatarKey(data.avatar);
        } else {
          setName(user.displayName || 'NOME DO USUARIO');
        }
      } catch (e) {
        setName(user?.displayName || 'NOME DO USUARIO');
      }
    })();
  }, [user]);

  const avatarSource =
    avatarKey === 'boy'
      ? require('../assets/images/boy.png')
      : require('../assets/images/girl.png');

  async function handleLogout() {
    await signOut(auth);
    router.replace('/');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <MotiView
          from={{ opacity: 0, translateY: -12 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 350 }}
          style={styles.avatarBox}
        >
          <View style={styles.avatarCircle}>
            <Image
              source={avatarSource}
              style={styles.avatarImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.userName}>{name || 'NOME DO USUARIO'}</Text>
        </MotiView>

        <MotiView
          from={{ opacity: 0, translateY: 6 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 120, duration: 350 }}
          style={styles.headerBox}
        >
          <Text style={styles.sectionTitle}>Nosso catálogo</Text>
        </MotiView>

        <View style={styles.optionsBox}>
          <MotiView
            from={{ opacity: 0, translateY: 18 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 200, duration: 350 }}
          >
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push('/coffe')}
              activeOpacity={0.9}
            >
              <View style={styles.iconSlot}>
                <Image
                  source={require('../assets/images/opcoes1.png')}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.cardTextBox}>
                <Text style={styles.cardTitle}>Quero ver{'\n'}os cafés</Text>
              </View>
            </TouchableOpacity>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 18 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 320, duration: 350 }}
          >
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push('/brunch')}
              activeOpacity={0.9}
            >
              <View style={styles.iconSlot}>
                <Image
                  source={require('../assets/images/opcoes2.png')}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.cardTextBox}>
                <Text style={styles.cardTitle}>Quero ver{'\n'}os lanches</Text>
              </View>
            </TouchableOpacity>
          </MotiView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  logoutBtn: {
    position: 'absolute',
    top: 40,
    right: 22,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.22)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 18,
  },
  logoutText: {
    color: '#fff',
    fontFamily: fonts.bold,
    fontSize: 13,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  avatarBox: {
    alignItems: 'center',
    gap: 10,
  },
  avatarCircle: {
    width: 160,
    height: 160,
    backgroundColor: '#D6B187',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    width: 132,
    height: 132,
  },
  userName: {
    color: colors.textLight,
    fontFamily: fonts.bold,
    fontSize: 14,
    letterSpacing: 0.4,
  },
  headerBox: {
    width: CARD_WIDTH,
    alignItems: 'center',
  },
  sectionTitle: {
    color: colors.textLight,
    fontFamily: fonts.bold,
    fontSize: 26,
    textAlign: 'center',
  },
  optionsBox: {
    width: CARD_WIDTH,
    gap: 16,
  },
  card: {
    backgroundColor: CARD_COLOR,
    borderRadius: 34,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    minHeight: 96,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 5,
  },
  iconSlot: {
    width: 140,
    height: 78,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardIcon: {
    width: 140,
    height: 218,
    transform: [{ scale: 1.12 }],
  },
  cardTextBox: {
    flex: 1,
    paddingLeft: 4,
  },
  cardTitle: {
    color: '#fffbf8',
    fontFamily: fonts.bold,
    fontSize: 24,
    lineHeight: 26,
    textAlign: 'center',
  },
});
