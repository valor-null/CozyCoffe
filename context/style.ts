import { Platform } from 'react-native';

export const colors = {
  background: '#2D211C',
  accent: '#C9B082',
  textLight: '#FAD7A1',
  white: '#FFFFFF',
  inputBg: '#FDE9C9',
  border: '#C9B082',
} as const;

export const fonts = {
  regular: 'BalooBhai2_400Regular',
  medium: 'BalooBhai2_500Medium',
  bold: 'BalooBhai2_600SemiBold',
  fallback: Platform.OS === 'ios' ? 'System' : 'sans-serif',
} as const;
