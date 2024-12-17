import { useEffect, useState } from 'react';

import Router from './routes/Router';
import Spinner from './components/ui/Spinner';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './styles/GlobalStyles';
import { initializeAuth } from './server/firebase/auth';

const App = () => {
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    initializeAuth().then(() => setAuthInitialized(true));
  }, []);

  if (!authInitialized) {
    return <Spinner />;
  }

  return (
    <>
      <Toaster />
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
