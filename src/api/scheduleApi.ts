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

// 근무 스케줄 데이터 밀어넣기용 임시 코드
// export const postTest = async (user: IUserState, data: Partial<IEventList>) => {
//   try {
//     if (!user.email) {
//       throw new Error('로그인이 필요합니다.');
//     }

//     // 무작위 문자열로 id 생성
//     const eventId = getRandomString(20);
//     data.eventId = eventId;

//     // 현재 로그인한 유저의 문서 참조
//     const userDocRef = doc(db, 'workSchedules', user.email);

//     // 유저 문서가 존재하는지 확인하기
//     const userDocSnap = await getDoc(userDocRef);
//     if (userDocSnap.exists()) {
//       // 유저 문서가 이미 있는 경우 데이터 추가
//       const schedulesCollectionRef = collection(userDocRef, 'schedules');
//       await addDoc(schedulesCollectionRef, data);
//     } else {
//       // 유저 문서가 없는 경우 문서를 새로 생성 후 데이터 추가
//       await setDoc(userDocRef, {});
//       const schedulesCollectionRef = collection(userDocRef, 'schedules');
//       await addDoc(schedulesCollectionRef, data);
//     }
//   } catch (err) {
//     console.error('post schedule error!', err);
//     throw err;
//   }
// };

export const postPersonalScheduleItem = async (
  user: IUserState,
  data: Partial<IEventList>,
) => {
  try {
    if (!user.email) {
      throw new Error('로그인이 필요합니다.');
    }

    // 무작위 문자열로 id 생성
    const eventId = getRandomString(20);
    data.eventId = eventId;

    // 현재 로그인한 유저의 문서 참조
    const userDocRef = doc(db, 'personalSchedules', user.email);

    // 유저 문서가 존재하는지 확인하기
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      // 유저 문서가 이미 있는 경우 데이터 추가
      const schedulesCollectionRef = collection(userDocRef, 'schedules');
      await addDoc(schedulesCollectionRef, data);
    } else {
      // 유저 문서가 없는 경우 문서를 새로 생성 후 데이터 추가
      await setDoc(userDocRef, {});
      const schedulesCollectionRef = collection(userDocRef, 'schedules');
      await addDoc(schedulesCollectionRef, data);
    }
  } catch (err) {
    console.error('post schedule error!', err);
    throw err;
  }
};
