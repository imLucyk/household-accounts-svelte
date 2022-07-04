<script>
import {link} from 'svelte-spa-router'
import active from 'svelte-spa-router/active'
</script>

<nav class="pages">
  <ul>
    <li href="/" use:active><a href="/">내역</a></li>
    <li href="/calendar" use:active><a href="/calendar" use:link>달력</a></li>
    <li href="/budget" use:active><a href="/budget" use:link>예산</a></li>
  </ul>
</nav>
