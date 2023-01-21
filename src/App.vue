<template>
  <header>
    <div class="d-flex flex-row-reverse text-secondary">
          {{ globalData.name }} / {{ globalData.uid }}
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">主页</RouterLink>
        <RouterLink to="/about">关于</RouterLink>
        <RouterLink to="/blogs">博客</RouterLink>
        <RouterLink to="/blogs2">博客 2</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { reactive, provide } from "vue";

const globalData = reactive({
  uid: 1001,
  name: "Koma",
  email: "xiaoma@komavideo.com",
});

provide("globalData", globalData);
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>