/*eslint-disable*/

import { DocumentData } from 'firebase/firestore';

export type ChildProps = {
  onSendData: (data: DocumentData | null) => void;
};

export type ProfileInfoProps = {
  title: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};
