import { useRouter } from 'expo-router';
import { MotiView } from 'moti';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../context/style';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;

export default function HomePage() {
  const router = useRouter();
  const userName = 'NOME DO USUARIO';

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <MotiView
          from={{ opacity: 0, translateY: -12 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 350 }}
          style={styles.avatarBox}
        >
          <View style={styles.avatarCircle}>
            <Image
              source={require('../assets/images/girl.png')}
              style={styles.avatarImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.userName}>{userName}</Text>
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

const CARD_COLOR = '#B8835C';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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
    textAlign: "center"
  },
});
