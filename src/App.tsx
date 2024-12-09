import { useEffect, useState } from 'react';
import Router from './routes/Router';
import { GlobalStyle } from './styles/GlobalStyles';
import { initializeAuth } from './server/firebase/auth';
import Spinner from './components/ui/Spinner';

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
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
