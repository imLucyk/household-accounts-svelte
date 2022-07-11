<script lang="ts">
import moment from 'moment';
const calcDay = function(line, day) {
  const firstDay = moment().startOf('month');
  const calc = line*7 + day - firstDay.day();
  return moment(firstDay).add(calc, 'days').format('D');
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
    <!-- <div class="days">
      <div class="number">2</div>
      <div class="sum"></div>
    </div>
    <div class="days">
      <div class="number">3</div>
      <div class="sum">-128,500원</div>
    </div>
    <div class="days">
      <div class="number">4</div>
      <div class="sum">-4,500원</div>
    </div>
    <div class="days">
      <div class="number">5</div>
      <div class="sum">-125,600원</div>
    </div>
    <div class="days">
      <div class="number">6</div>
      <div class="sum">-128,500원</div>
    </div>
    <div class="days">
      <div class="number">7</div>
      <div class="sum">-128,500원</div>
    </div> -->
  </article>
  {/each}
  <!-- <article class="weekly-sum">-391,9300원</article>
  <article class="week">
    <div class="days">
      <div class="number">8</div>
      <div class="sum">-23,800원</div>
    </div>
    <div class="days">
      <div class="number">9</div>
      <div class="sum"></div>
    </div>
    <div class="days">
      <div class="number">10</div>
      <div class="sum">-128,500원</div>
    </div>
    <div class="days">
      <div class="number">11</div>
      <div class="sum">-4,500원</div>
    </div>
    <div class="days">
      <div class="number">12</div>
      <div class="sum">-125,600원</div>
    </div>
    <div class="days">
      <div class="number">13</div>
      <div class="sum">-128,500원</div>
    </div>
    <div class="days">
      <div class="number">14</div>
      <div class="sum">-128,500원</div>
    </div>
  </article>
  <article class="weekly-sum">-62,550원</article>
  <article class="week">
    <div class="days">
      <div class="number">15</div>
      <div class="sum">-23,800원</div>
    </div>
    <div class="days">
      <div class="number active">16</div>
      <div class="sum"></div>
    </div>
    <div class="days">
      <div class="number unselect">17</div>
      <div class="sum">-128,500원</div>
    </div>
    <div class="days">
      <div class="number unselect">18</div>
      <div class="sum">-4,500원</div>
    </div>
    <div class="days">
      <div class="number unselect">19</div>
      <div class="sum">-125,600원</div>
    </div>
    <div class="days">
      <div class="number unselect">20</div>
      <div class="sum">-128,500원</div>
    </div>
    <div class="days">
      <div class="number unselect">21</div>
      <div class="sum">-128,500원</div>
    </div>
  </article> -->
</section>
