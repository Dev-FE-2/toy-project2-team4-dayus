/*eslint-disable*/

import { DocumentData } from 'firebase/firestore';

export type ChildProps = {
  onSendData: (data: DocumentData | null) => void;
};
