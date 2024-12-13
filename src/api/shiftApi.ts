import { getFirestore, doc, addDoc, collection } from 'firebase/firestore/lite';
import 'dayjs/locale/ko';

import app from '@/server/firebase/initialize';
import { IUserState } from '@/store/slices/userSlice';

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
