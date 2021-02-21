import { Interpolation, ThemeProvider } from '@emotion/react';
import { Global } from '@emotion/react';
import React, { FC } from 'react';
import { CssReset } from './CssReset';
import { theme, Theme } from './theme';

export const GlobalStylesProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssReset />
      <Global
        styles={(theme) => {
          console.log('theme', theme);
          return theme as Interpolation<Theme>;
        }}
      />
      {children}
    </ThemeProvider>
  );
};
