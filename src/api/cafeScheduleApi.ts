import { getFirestore, getDocs, collection } from 'firebase/firestore/lite';

import app from '@/server/firebase/initialize';
import { ICafeEventList } from '@/types/calendar';

const db = getFirestore(app);

// 카페 행사 조회
export const getCafeScheduleItems = async (): Promise<ICafeEventList[]> => {
  const schedulesCollectionRef = collection(
    db,
    'cafeSchedules',
    'dayus',
    'schedules',
  );
  const schedulesSnapshot = await getDocs(schedulesCollectionRef);

  const cafeEvents: ICafeEventList[] = [];

  schedulesSnapshot.forEach(scheduleDoc => {
    const scheduleData = scheduleDoc.data();

    if (scheduleData.title && scheduleData.start && scheduleData.end) {
      const startDate = scheduleData.start.toDate();
      const endDate = scheduleData.end.toDate();

      cafeEvents.push({
        eventId: scheduleData.eventId,
        title: scheduleData.title,
        start: startDate,
        end: endDate,
      });
    }
  });

  return cafeEvents;
};
