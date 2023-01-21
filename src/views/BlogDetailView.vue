<template>
    <div>
      <h1>博客文章</h1>
      <hr />
      <h2>文章 {{ $route.params.id }}</h2>
      <div>这是一片博客文章。</div>
      <div class="pt-2">
        <button class="btn btn-success me-1" @click="gotoHome">回到主页</button>
        <button class="btn btn-success me-1" @click="gotoAbout">关于画面</button>
        <button class="btn btn-success me-1" @click="gotoBlogs">博客列表</button>
        <button class="btn btn-success me-1" @click="gotoBlog(1)">
          博客文章1
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const gotoHome = () => {
    router.push("/");
  };
  
  const gotoAbout = () => {
    router.push({
      name: "about",
    });
  };
  
  const gotoBlogs = () => {
    router.push("/blogs");
  };
  
  const gotoBlog = (blogId) => {
    router.push({
      name: "blog",
      params: {
        id: blogId,
      },
    });
  };
  </script>