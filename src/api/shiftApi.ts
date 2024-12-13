import {
  getFirestore,
  doc,
  getDocs,
  addDoc,
  collection,
  query,
  where,
  Query,
  orderBy,
  limit as limitQuery,
  startAfter,
} from 'firebase/firestore/lite';
import 'dayjs/locale/ko';

import app from '@/server/firebase/initialize';
import { IUserState } from '@/store/slices/userSlice';
import { ShiftListItem } from '@/types/shift';

const db = getFirestore(app);

// export const getShiftList = async (
//   page: number,
//   limit = 10,
//   workType: string,
//   approvalType: string,
// ) => {
//   const params = { page, limit, workType, approvalType };
//   try {
//     const response = await axiosInstance.get('/shiftList', {
//       params: params,
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     throw new Error(`ERROR MESSAGE: ${error}`);
//   }
// };

export const getShiftList = async (
  page: number,
  limit = 10,
  workType: string,
  approvalType: string,
  user: IUserState,
) => {
  if (!user.email) {
    throw new Error('로그인이 필요합니다.');
  }

  const userDocRef = doc(db, 'shiftCorrection', user.email);
  let shiftDocRef: Query = collection(userDocRef, 'shift');

  if (workType !== '') {
    shiftDocRef = query(shiftDocRef, where('workType', '==', workType));
  }

  if (approvalType !== '') {
    shiftDocRef = query(shiftDocRef, where('approvalType', '==', approvalType));
  }

  if (page * limit > 0)
    shiftDocRef = query(
      shiftDocRef,
      orderBy('timestamp', 'desc'),
      limitQuery(page * limit),
    );
  const querySnapshot = await getDocs(shiftDocRef);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  shiftDocRef = query(shiftDocRef, startAfter(lastVisible));

  const workData: ShiftListItem[] = querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      workDate: data.workDate.toDate(),
      shiftSn: data.shiftSn,
      workTitle: data.workTitle,
      approvalType: data.approvalType,
    };
  });

  const totalPage = Math.ceil(workData.length / limit);
  return {
    currentPage: page,
    totalPage: totalPage,
    data: workData,
  };
};

export const postShiftCorrection = async (
  workType: string,
  workTime: string,
  explanation: string,
  date: Date,
  user: IUserState,
) => {
  try {
    if (!user.email) {
      throw new Error('로그인이 필요합니다.');
    }

    // 현재 로그인한 유저의 문서 참조
    const userDocRef = doc(db, 'shiftCorrection', user.email);
    const shiftDocRef = collection(userDocRef, 'shift');

    const createShift = {
      workType,
      workTime,
      explanation,
      workDate: date,
      approvalDate: null,
      approvalType: '보류',
      shiftSn: `shift_${Math.floor(10000000 + Math.random() * 90000000)}`,
      workTitle: workType,
    };

    await addDoc(shiftDocRef, createShift);
  } catch (error) {
    console.error('근무 정정 신청에 실패하였습니다.', error);
    throw error;
  }
};
