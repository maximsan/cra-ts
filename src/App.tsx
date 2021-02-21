import { FC, useEffect } from 'react';
import { appTitle } from './config';

export const App: FC = () => {
  useEffect(() => {
    document.title = appTitle || '';
  }, []);

  return <div>Start prototype</div>;
};
