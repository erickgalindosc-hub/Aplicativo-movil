
import type { ComponentProps } from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';

import { useColorScheme } from './useColorScheme';
import Colors from '@/constants/Colors';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & ComponentProps<typeof DefaultText>;
export type ViewProps = ThemeProps & ComponentProps<typeof DefaultView>;
