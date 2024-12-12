import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore/lite';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import app from '@/server/firebase/initialize';
import { IEventList } from '@/types/calendar';
import { IUserState } from '@/store/slices/userSlice';

const db = getFirestore(app);
dayjs.locale('ko');

// 이벤트 조회
export const getPersonalScheduleItems = async (
  user: IUserState,
): Promise<IEventList[]> => {
  try {
    if (!user.email) {
      throw new Error('로그인이 필요합니다.');
    }

    // 현재 로그인한 유저의 문서 참조
    const userDocRef = doc(db, 'personalSchedules', user.email);
    // 유저 문서가 존재하는지 확인
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      return [];
    }

    const schedulesCollectionRef = collection(userDocRef, 'schedules');
    const querySnapshot = await getDocs(schedulesCollectionRef);

    const events: IEventList[] = [];
    querySnapshot.forEach(doc => {
      const data = doc.data();
      events.push({
        eventId: doc.id,
        title: data.title || '',
        start: data.start.toDate(),
        end: data.end.toDate(),
        color: {
          id: data.color?.id || 1,
          bgColor: data.color?.bgColor || '#f8f2a2',
          fontColor: data.color?.fontColor || '#000',
        },
        memo: data.memo || '',
      });
    });

    return events;
  } catch (err) {
    console.error('일정 데이터를 가져오는데 실패했어요!', err);
    throw err;
  }
};

// 이벤트 수정
export const updatePersonalScheduleItem = async (
  user: IUserState,
  eventId: string,
  updatedData: Partial<IEventList>,
) => {
  try {
    if (!user.email) {
      throw new Error('로그인이 필요합니다.');
    }

    // 현재 로그인한 유저의 문서 참조
    const userDocRef = doc(db, 'personalSchedules', user.email);
    // 수정할 일정 문서 참조
    const scheduleDocRef = doc(userDocRef, 'schedules', eventId);

    const dataToUpdate = {
      ...updatedData,
    };

    await updateDoc(scheduleDocRef, dataToUpdate);
  } catch (error) {
    console.error('일정 수정에 실패했어요!', error);
    throw error;
  }
};

// 이벤트 삭제
export const deletePersonalScheduleItem = async (
  user: IUserState,
  eventId: string,
) => {
  try {
    if (!user.email) {
      throw new Error('로그인이 필요합니다.');
    }

    // 현재 로그인한 유저의 문서 참조
    const userDocRef = doc(db, 'personalSchedules', user.email);
    // 삭제할 일정 문서 참조
    const scheduleDocRef = doc(userDocRef, 'schedules', eventId);

    await deleteDoc(scheduleDocRef);
  } catch (error) {
    console.error('일정 삭제에 실패했어요!', error);
    throw error;
  }
};
