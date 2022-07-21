<script lang="ts">
import detailsStore from '../../stores/detailsStore';
const {details, detail} = detailsStore;
console.log($details, $detail);

let kind = '';
const kindNames = {
  category: '카테고리',
  methodsOfPayment: '결제수단'
};
let sort = 'expense';
const sortNames = {
  expense: '지출',
  income: '수입',
  account: '계좌',
  fixedCosts: '고정지출'
};
const methodsOfPaymentNames = {
  expense: '결제수단',
  income: '입금',
  account: '계좌',
  fixedCosts: '계좌'
};

const modalToggle = function(index, k) {
  document.body.classList.toggle('o-hidden');
  document.getElementsByClassName('modal-background')[index].classList.toggle('active');
  if (index === 1) {
    kind = k;
  }
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
    <span class="add" on:click="{() => modalToggle(0)}"><span class="material-icons font-16">add</span>내역 추가</span>
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

<div class="modal-background" on:click="{() => modalToggle(0)}">
  <form class="modal" on:click="{(event) => event.stopPropagation()}">
    <div class="modal-header">
      <div class="title">거래처</div>
      <div class="sum">
        <input type="text" class="line" on:keyup="{() => inputNumberFormat()}" bind:value={$detail.priseFormat} />
        <span class="won">원</span>
    </div>
    <div class="modal-body">
      <ul>
        <li>
          <label for="">분류</label>
          <input type="button" name="sort" value="지출" on:click="{() => {sort = 'expense'}}"/>
          <input type="button" name="sort" value="수입" on:click="{() => {sort = 'income'}}"/>
          <input type="button" name="sort" value="이체" on:click="{() => {sort = 'account'}}"/>
          <input type="button" name="sort" value="고정지출" on:click="{() => {sort = 'fixedCosts'}}"/>
        </li>
        <li>
          <label for="">카테고리</label>
          <input type="text" name="category" placeholder="미분류" on:click="{() => modalToggle(1, 'category')}"/>
        </li>
        <li>
          <label for="">거래처</label>
          <input type="text" name="use" placeholder="거래처명을 입력하세요" />
        </li>
        <li>
          <label for="">{methodsOfPaymentNames[sort]}</label>
          <input type="text" name="methodsOfPayment" placeholder="{methodsOfPaymentNames[sort]} 선택" on:click="{() => modalToggle(1, 'methodsOfPayment')}" />
        </li>
        <li>
          <label for="">날짜</label>
          <input type="date" name="date" placeholder="YYYY-MM-DD" />
        </li>
        <li>
          <label for="">메모</label>
          <input type="text" name="memo" placeholder="메모를 남겨보세요" />
        </li>
        <li>
          <label for="">예산에서 제외</label>
          <input type="checkbox" id="budget" name="details"/>
            이 내역을 예산에 포함합니다
        </li>
      </ul>
    </div>
    <div class="modal-footer">
      <button class="button-close" type="button" on:click="{() => modalToggle(0)}"><span class="material-icons">close</span></button>
      <button class="button-update" type="button"><span class="material-icons">edit_note</span></button>
    </div>
  </form>
</div>

<div class="modal-background" on:click="{() => modalToggle(1)}">
  <form class="modal" on:click="{(event) => event.stopPropagation()}">
    <div class="modal-header">
      <div class="title">{kindNames[kind]}를 선택하세요</div>
      <button type="button" on:click="{() => modalToggle(2)}">편집</button>
    </div>
    <div class="modal-body">
      <ul>
        <li>식료품</li>
        <li>생필품</li>
        <li>외식/카페/간식</li>
        <li>술/유흥</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button class="button-close" type="button" on:click="{() => modalToggle(1)}"><span class="material-icons">close</span></button>
    </div>
  </form>
</div>

<div class="modal-background" on:click="{() => modalToggle(2)}">
  <form class="modal" on:click="{(event) => event.stopPropagation()}">
    <div class="modal-header">
      <div class="title">{kindNames[kind]} 설정</div>
      <button type="button" on:click="{() => modalToggle(3)}">추가</button>
      <button type="button">편집</button>
    </div>
    <div class="modal-body">
      <ul>
        <li>식료품</li>
        <li>생필품</li>
        <li>외식/카페/간식</li>
        <li>술/유흥</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button class="button-close" type="button" on:click="{() => modalToggle(2)}"><span class="material-icons">close</span></button>
    </div>
  </form>
</div>

<div class="modal-background" on:click="{() => modalToggle(3)}">
  <form class="modal" on:click="{(event) => event.stopPropagation()}">
    <div class="modal-header">
      <div class="title">새로운 {sort} {kindNames[kind]}</div>
      <div>새로운 {sortNames[sort]} {kindNames[kind]}의 이름을 입력하세요</div>
      <input type="text" name="category-edit" placeholder="{kindNames[kind]} 이름" />
      <button type="button">취소</button>
      <button type="button">완료</button>
    </div>
    <div class="modal-body">
      <ul>
        <li>식료품</li>
        <li>생필품</li>
        <li>외식/카페/간식</li>
        <li>술/유흥</li>
      </ul>
    </div>
    <div class="modal-footer">
      <button class="button-close" type="button" on:click="{() => modalToggle(3)}"><span class="material-icons">close</span></button>
    </div>
  </form>
</div>
