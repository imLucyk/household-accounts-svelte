<script lang="ts">
import moment from 'moment';
import calendarStore from '../../stores/calendarStore';

const {firstDay} = calendarStore;

$: calcDay = function(line, day) {
  // const firstDay = moment().startOf('month');
  const calc = line*7 + day - $firstDay.day();
  return moment($firstDay).add(calc, 'days').format('D');
}
</script>

<section class="calendar">
  <article class="day-of-the-week">
    <span class="week sun">일</span>
    <span class="week mon">월</span>
    <span class="week tue">화</span>
    <span class="week wed">수</span>
    <span class="week thu">목</span>
    <span class="week fri">금</span>
    <span class="week sat">토</span>
  </article>
  <article class="weekly-sum">-537,100원</article>
  {#each [0, 1, 2, 3, 4, 5] as line, i}
  <article class="week">
    {#each [0, 1, 2, 3, 4, 5, 6] as day, j}
    <div class="days">
      <div class="number">{calcDay(line, day)}</div>
      <div class="sum">쓴돈</div>
    </div>
    {/each}
  </article>
  {/each}
</section>
