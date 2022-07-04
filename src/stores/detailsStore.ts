import { writable } from 'svelte/store';

export declare interface Detail {
  place: string,
  prise: number,
  priseFormat: string,
  category: string,
  payType: string,
  useAt: string,
}

const detail: Detail = {
  place: '크리스피크림 남영역',
  prise: 0,
  priseFormat: '',
  category: '도넛/핫도그',
  payType: '프렌즈 체크카드',
  useAt: '2022-05-16',
}

// const details: Array<Detail> = [];
const details: Detail[] = [];

class DetailsStore {
  details = writable(details);
  detail = writable(detail);
}

export default new DetailsStore();
