import { clearUser, setUser } from '@/store/slices/userSlice';
import app from './initialize';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import store from '@/store/index';

export const auth = getAuth(app);

export const signIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const initializeAuth = (): Promise<void> => {
  return new Promise(resolve => {
    onAuthStateChanged(auth, user => {
      if (user) {
        store.dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            providerData: user.providerData,
          }),
        );
      } else {
        store.dispatch(clearUser());
      }
      resolve();
    });
  });
};
