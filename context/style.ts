import { Platform } from 'react-native';

export const colors = {
    background: '#2D211C',
    accent: '#C9B082',
    textLight: '#FAD7A1',
    white: '#FFFFFF',
};

export const fonts = {
    regular: 'Baloo2_400Regular',
    medium: 'Baloo2_500Medium',
    title: 'Baloo2_600SemiBold',
    bold: 'Baloo2_600SemiBold',
    fallback: Platform.OS === 'ios' ? 'System' : 'sans-serif',
};