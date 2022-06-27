import Details from './components/contents/Details.svelte';
import Calendar from './components/contents/Calendar.svelte';
import Budget from './components/contents/Budget.svelte';

const routes = {
  '/': Details,
  '/calendar': Calendar,
  '/budget': Budget
};

export default routes;
