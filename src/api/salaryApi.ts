import {
  getFirestore,
  doc,
  collection,
  Query,
  orderBy,
  query,
  limit as limitQuery,
  getDocs,
  startAt,
} from 'firebase/firestore/lite';

import app from '@/server/firebase/initialize';
import { IUserState } from '@/store/slices/userSlice';
import { ISalary, SalaryListItem } from '@/types/salary';

const db = getFirestore(app);

export const getSalaryItem = async (user: IUserState) => {
  if (!user.email) {
    throw new Error('로그인이 필요합니다.');
  }

  try {
    const userDocRef = doc(db, 'personalSalary', user.email);
    const salaryDocRef = collection(userDocRef, 'salary');
    const salaryQuery = query(
      salaryDocRef,
      orderBy('paymentDate', 'desc'),
      limitQuery(1),
    );

    const snapShot = await getDocs(salaryQuery);

    const salaryData: ISalary[] = snapShot.docs.map(doc => {
      const data = doc.data();
      return {
        salarySn: data.salarySn,
        amount: data.amount,
        bank: data.bank,
        deductible: data.deductible,
        paymentDate: data.paymentDate.toDate(),
        totalAmount: data.totalAmount,
        tour: {
          startDate: data.tour.startDate.toDate(),
          endDate: data.tour.endDate.toDate(),
        },
      };
    });
    return salaryData[0];
  } catch (error) {
    throw new Error(`salary fetch error: ${error}`);
  }
};

export const getSalaryList = async (
  page: number,
  limit: number,
  user: IUserState,
) => {
  if (!user.email) {
    throw new Error('로그인이 필요합니다.');
  }

  try {
    const userDocRef = doc(db, 'personalSalary', user.email);
    let salaryDocRef: Query = collection(userDocRef, 'salary');

    salaryDocRef = query(
      salaryDocRef,
      orderBy('paymentDate', 'desc'),
      limitQuery(limit),
    );

    if (page) salaryDocRef = query(salaryDocRef, startAt(page * limit));

    const querySnapshot = await getDocs(salaryDocRef);
    const salaryData: SalaryListItem[] = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        salarySn: data.salarySn,
        amount: data.amount,
        bank: data.bank,
        deductible: data.deductible,
        paymentDate: data.paymentDate.toDate(),
        totalAmount: data.totalAmount,
        tour: {
          startDate: data.tour.startDate.toDate(),
          endDate: data.tour.endDate.toDate(),
        },
        title: `${data.paymentDate.toDate().getMonth() + 1}월 급여`,
      };
    });

    const totalPage = Math.ceil(querySnapshot.size);

    return {
      currentPage: page,
      totalPage: totalPage,
      data: salaryData,
    };
  } catch (error) {
    throw new Error(`ERROR MESSAGE: ${error}`);
  }
};
