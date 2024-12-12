import app from '@/server/firebase/initialize';
import { IUserState } from '@/store/slices/userSlice';
import { IEventList } from '@/types/calendar';
import getRandomString from '@/utils/getRandomString';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from 'firebase/firestore/lite';

const db = getFirestore(app);

export const postPersonalScheduleItem = async (
  user: IUserState,
  data: Partial<IEventList>,
) => {
  try {
    // 무작위 문자열로 id 생성
    const eventId = getRandomString(20);
    data.eventId = eventId;

    // 현재 로그인한 유저의 문서 참조
    const userDocRef = doc(db, 'personalSchedules', user.email!);

    // 유저 문서가 존재하는지 확인하기
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      // 유저 문서가 이미 있는 경우 데이터 추가
      const schedulesCollectionRef = collection(userDocRef, 'schedules');
      await addDoc(schedulesCollectionRef, data);

      // console.log('userDocSnap 있음', schedulesCollectionRef);
    } else {
      // 유저 문서가 없는 경우 문서를 새로 생성 후 데이터 추가
      await setDoc(userDocRef, {});
      const schedulesCollectionRef = collection(userDocRef, 'schedules');
      await addDoc(schedulesCollectionRef, data);

      // console.log('userDocSnap 없음', schedulesCollectionRef);
    }
  } catch (err) {
    console.error('post schedule error!', err);
  }
};
