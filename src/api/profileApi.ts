import { auth } from '@/server/firebase/auth';
import app from '@/server/firebase/initialize';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';

const db = getFirestore(app);

export const fetchUserData = async () => {
  const user = auth.currentUser;
  try {
    if (!user) {
      throw new Error('로그인 된 사용자가 없습니다');
    }

    const docRef = doc(db, 'personalData', user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error('사용자 데이터 없음');
    }
  } catch (error) {
    console.error('데이터 읽기 중 오류 발생', error);
    throw error;
  }
};

export const updateUserData = async ({
  name,
  email,
  phone,
  bankName,
  account,
}) => {
  const user = auth.currentUser;
  try {
    if (!user) {
      console.log('로그인 된 사용자가 없습니다');
      return null;
    }

    const userRef = doc(db, 'personalData', user.uid);
    await updateDoc(userRef, {
      userName: name,
      email: email,
      phone: phone,
      'bankSn.bankName': bankName,
      'bankSn.account': account,
    });
  } catch (error) {
    console.log('데이터 업데이트 중 오류 발생:', error);
  }
};
