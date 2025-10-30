import {
  BalooBhai2_400Regular,
  BalooBhai2_500Medium,
  BalooBhai2_600SemiBold,
  useFonts,
} from '@expo-google-fonts/baloo-bhai-2';
import { Stack } from 'expo-router';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, useAuth } from '../context/AuthContext';

function AppStack() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: '#2D211C', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="#FAD7A1" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    BalooBhai2_400Regular,
    BalooBhai2_500Medium,
    BalooBhai2_600SemiBold,
  });

  if (!loaded) {
    return (
      <View style={{ flex: 1, backgroundColor: '#2D211C', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="#FAD7A1" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
          <AppStack />
        </AuthProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}