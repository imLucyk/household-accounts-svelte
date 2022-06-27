<script lang="ts">
import Footer from "./components/Footer.svelte";
import Header from "./components/Header.svelte";
import Nav from "./components/Nav.svelte";
import State from "./components/State.svelte";
import Router from 'svelte-spa-router';
import routes from './routes.ts';
</script>

<div>
  <Header></Header>
  <State></State>
  <Router {routes}/>
  <Nav></Nav>
  <Footer></Footer>
</div>
