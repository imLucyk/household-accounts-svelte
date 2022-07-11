<script lang="ts">
import calendarStore from '../stores/calendarStore';
import moment from 'moment';

const {firstDay} = calendarStore;
const addMonth = (plusMinus) => {
  firstDay.update(() => {
    return moment($firstDay).add(plusMinus, 'months');
  });
}
</script>

<nav class="month">
  <span class="material-icons" on:click="{() => addMonth(-1)}">arrow_left</span>
  <span class="month">{moment($firstDay).format('M')}월</span>
  <span class="material-icons" on:click="{() => addMonth(1)}">arrow_right</span>
</nav>
<section class="current">
  <div class="amount">
    <ul>
      <li><span class="label">지출</span><span class="amount">991,580원</span></li>
      <li><span class="label">수입</span><span class="amount income">0원</span></li>
    </ul>
  </div>
  <div>
    <button class="analysis">분석</button>
  </div>
</section>