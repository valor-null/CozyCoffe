import {
  Baloo2_400Regular,
  Baloo2_500Medium,
  Baloo2_600SemiBold,
  useFonts,
} from '@expo-google-fonts/baloo-2';
import { Stack } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  const [loaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_500Medium,
    Baloo2_600SemiBold,
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
        <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
