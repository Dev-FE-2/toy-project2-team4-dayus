import app from './firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const auth = getAuth(app);

export const signIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
