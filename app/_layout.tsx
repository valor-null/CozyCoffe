import {
  BalooBhai2_400Regular,
  BalooBhai2_500Medium,
  BalooBhai2_600SemiBold,
  useFonts,
} from '@expo-google-fonts/baloo-bhai-2';
import { Stack } from 'expo-router';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { colors } from '../context/style';

const APP_BG = colors.background ?? '#2D211C';

function AppStack() {
  const { user } = useAuth();

  return (
    <Stack
      key={user ? 'auth' : 'guest'}
      initialRouteName={user ? 'home' : 'index'}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: APP_BG },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="cadastro" />
      <Stack.Screen name="home" />

      <Stack.Screen
        name="coffe"
        options={{
          animation: 'fade',
          contentStyle: { backgroundColor: APP_BG },
        }}
      />
      <Stack.Screen
        name="brunch"
        options={{
          animation: 'fade',
          contentStyle: { backgroundColor: APP_BG },
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts({
    BalooBhai2_400Regular,
    BalooBhai2_500Medium,
    BalooBhai2_600SemiBold,
  });

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: APP_BG }}>
      <SafeAreaProvider style={{ flex: 1, backgroundColor: APP_BG }}>
        <AuthProvider>
          <AppStack />
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
