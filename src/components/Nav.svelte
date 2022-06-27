<script>
import {link} from 'svelte-spa-router'
import active from 'svelte-spa-router/active'
</script>

<nav class="pages">
  <ul>
    <li><a href="/" use:link use:active>내역</a></li>
    <li><a href="/calendar" use:link use:active>달력</a></li>
    <li><a href="/budget" use:link use:active>예산</a></li>
  </ul>
</nav>