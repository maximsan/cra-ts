import { FC, useEffect } from 'react';
import { appTitle } from './config';
import { Box } from './components/Box';

export const App: FC = () => {
  useEffect(() => {
    document.title = appTitle || '';
  }, []);

  return (
    <Box width={[200, 400]} color='red.600' m={[1, 2]} p='5' bg='gray.200'>
      Start prototype
    </Box>
  );
};
