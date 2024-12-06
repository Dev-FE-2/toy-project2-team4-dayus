import { useEffect, useState } from 'react';
import Router from './routes/Router';
import { GlobalStyle } from './styles/GlobalStyles';
import { initializeAuth } from '@/store/store';
import Spinner from './components/ui/Spinner';

const App = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      await initializeAuth();
      setIsInitialized(true);
    };
    initialize();
  });

  if (!isInitialized) {
    return <Spinner />;
  }

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
