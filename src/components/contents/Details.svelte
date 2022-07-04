<script lang="ts">
import detailsStore from '../../stores/detailsStore';
const {details, detail} = detailsStore;
console.log($details, $detail);

const modalToggle = function() {
  document.body.classList.toggle('o-hidden');
  document.getElementsByClassName('modal-background')[0].classList.toggle('active');
}

const comma = (str) => {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

const uncomma = (str) => {
  str = String(str);
  return str.replace(/[^\d]+/g, '');
} 

const inputNumberFormat = () => {
  detail.update(() => {
    return {
      ...$detail,
      prise: Number(uncomma($detail.priseFormat)),
      priseFormat: comma(uncomma($detail.priseFormat)),
    };
  });
}
</script>

<section class="payments">
  <div class="filter">
    <span class="full-details">전체 내역<span class="material-icons font-16">expand_more</span></span>
    <span class="add" on:click="{() => modalToggle()}"><span class="material-icons font-16">add</span>내역 추가</span>
  </div>
  <article class="daily">
    <div class="daily-title">
      <span class="day">16일 오늘</span>
      <span class="payment">-5,400원</span>
    </div>
    <div class="daily-detail">
      <div><img src="./images/coffee.png" width="35" alt="Coffee"></div>
      <div class="daily-detail-goods">
        <div class="place">크리스피크림 남영역</div>
        <div class="note">도넛/핫도그 | 프렌즈 체크카드</div>
      </div>
      <div class="daily-payment">-5,400원</div>
    </div>
  </article>
  <article class="daily">
    <div class="daily-title">
      <span class="day">15일 일요일</span>
      <span class="payment">-57,150원</span>
    </div>
    <div class="daily-detail">
      <div><img src="./images/food.png" width="35" alt="Food"></div>
      <div class="daily-detail-goods">
        <div class="place">네번째집</div>
        <div class="note">한식 | 프렌즈 체크카드</div>
      </div>
      <div class="daily-payment">-35,000원</div>
    </div>
    <div class="daily-detail">
      <div><img src="./images/basket.png" width="35" alt="Cart"></div>
      <div class="daily-detail-goods">
        <div class="place">씨유이태원점</div>
        <div class="note">편의점 | 프렌즈 체크카드</div>
      </div>
      <div class="daily-payment">-3,900원</div>
    </div>
    <div class="daily-detail">
      <div><img src="./images/basket.png" width="35" alt="Cart"></div>
      <div class="daily-detail-goods">
        <div class="place">씨유이태원점</div>
        <div class="note">편의점 | 프렌즈 체크카드</div>
      </div>
      <div class="daily-payment">-4,500원</div>
    </div>
    <div class="daily-detail">
      <div><img src="./images/basket.png" width="35" alt="Cart"></div>
      <div class="daily-detail-goods">
        <div class="place">씨유이태원점</div>
        <div class="note">편의점 | 프렌즈 체크카드</div>
      </div>
      <div class="daily-payment">-13,750원</div>
    </div>
  </article>
</section>

<div class="modal-background" on:click="{() => modalToggle()}">
  <form class="modal" on:click="{(event) => event.stopPropagation()}">
    <h3 class="modal-header">Edit</h3>
    <table class="modal-table">
      <tbody>
        <tr>
          <input type="text" maxlength="14" on:keyup="{() => inputNumberFormat()}" bind:value={$detail.priseFormat} />
          <th>
            <span>원</span>
          </th>
        </tr>
        <tr>
          <th>
            <span>사용처</span>
          </th>
          <td><input type="text" name="grocery-name" placeholder="Name" /></td>
        </tr>
        <tr>
          <th>
            <span>카테고리</span>
          </th>
          <td><input type="date" name="grocery-expire" placeholder="YYYY-MM-DD" /></td>
        </tr>
        <tr>
          <th>
            <span>결제수단</span>
          </th>
          <td><input type="text" name="grocery-name" placeholder="Name" /></td>
        </tr>
        <tr>
          <th>
            <span>날짜</span>
          </th>
          <td><input type="date" name="grocery-expire" placeholder="YYYY-MM-DD" /></td>
        </tr>
      </tbody>
    </table>
    <div class="modal-footer">
      <button class="button-close" type="button" on:click="{() => modalToggle()}"><span class="material-icons">close</span></button>
      <button class="button-update" type="button"><span class="material-icons">edit_note</span></button>
    </div>
  </form>
</div>
