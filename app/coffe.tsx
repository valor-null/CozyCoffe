import { useRouter } from 'expo-router';
import { MotiView } from 'moti';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../context/style';

const COFFEES = [
  {
    id: '1',
    title: 'Café Americano',
    desc: 'Espresso diluído na medida, sabor mais leve.',
    image: require('../assets/images/americano.png'),
    price: 'R$ 8,90',
  },
  {
    id: '2',
    title: 'Latte Cremoso',
    desc: 'Espresso com leite vaporizado e bem cremoso.',
    image: require('../assets/images/latte.png'),
    price: 'R$ 10,50',
  },
  {
    id: '3',
    title: 'Mocha de Chocolate',
    desc: 'Café com leite, chocolate e um toque doce.',
    image: require('../assets/images/mocha.png'),
    price: 'R$ 11,90',
  },
  {
    id: '4',
    title: 'Frappe Gelado',
    desc: 'Café batido gelado, perfeito pra refrescar.',
    image: require('../assets/images/frappe.png'),
    price: 'R$ 12,00',
  },
];

export default function CoffePage() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Nossos cafés</Text>
        <Text style={styles.subtitle}>Escolha um para ver detalhes</Text>
      </View>

      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        {COFFEES.map((item, index) => (
          <MotiView
            key={item.id}
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 120 * index, duration: 350 }}
            style={styles.card}
          >
            <View style={styles.imageBox}>
              <Image source={item.image} style={styles.image} resizeMode="contain" />
            </View>
            <View style={styles.info}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </View>
            <View style={styles.priceBox}>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
          </MotiView>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 70,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 14,
  },
  backButton: {
    position: 'absolute',
    top: -35,
    left: 20,
    padding: 4,
  },
  backText: {
    color: colors.textLight,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  title: {
    color: colors.textLight,
    fontFamily: fonts.bold,
    fontSize: 26,
  },
  subtitle: {
    color: colors.textLight,
    fontFamily: fonts.regular,
    fontSize: 14,
    marginTop: 2,
  },
  list: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    gap: 14,
  },
  card: {
    backgroundColor: '#B8835C',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    gap: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  imageBox: {
    width: 78,
    height: 78,
    backgroundColor: 'rgba(247,230,207,0.25)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  info: {
    flex: 1,
  },
  cardTitle: {
    color: '#fff',
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  cardDesc: {
    color: '#fff',
    fontFamily: fonts.regular,
    fontSize: 13,
    marginTop: 3,
    opacity: 0.92,
  },
  priceBox: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 14,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  priceText: {
    color: '#fff',
    fontFamily: fonts.bold,
    fontSize: 13,
  },
});
