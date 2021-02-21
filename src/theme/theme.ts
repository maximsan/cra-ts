import { Theme as EmotionTheme } from '@emotion/react';
import { styles } from './styles';
import { foundations } from './foundations';

export const theme: Partial<EmotionTheme> = {
  styles,
  ...foundations,
};

export type Theme = typeof theme;
