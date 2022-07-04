import { writable } from 'svelte/store';

export declare interface Detail {
  name: string,
  prise: number,
  category: string,
  payType: string,
  useAt: string,
}

const detail: Detail = {
  name: '크리스피크림 남영역',
  prise: 5400,
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
