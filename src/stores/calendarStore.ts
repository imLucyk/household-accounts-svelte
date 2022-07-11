import { writable } from 'svelte/store';
import moment from 'moment';

class CalendarStore {
  firstDay = writable(moment().startOf('month'));
}

export default new CalendarStore();
