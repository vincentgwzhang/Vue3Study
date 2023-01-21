<template>
    <div>
      <h1>博客一览2 (v-for)</h1>
  
      <ul class="list-group">
        <li class="list-group-item" v-for="blog in blogs" :key="blog.id">
          <RouterLink :to="`/blog/${blog.id}`">{{ blog.title }}</RouterLink>
        </li>
      </ul>
    </div>
  </template>
  
<script setup>
import { ref } from "vue";

const blogs = ref([
                    {
                        id: 1,
                        title: "博客文章1",
                    },
                    {
                        id: 2,
                        title: "博客文章2",
                    },
                    {
                        id: 3,
                        title: "博客文章3",
                    },
                    {
                        id: 4,
                        title: "博客文章4",
                    },
                    {
                        id: 5,
                        title: "博客文章5",
                    },
                ]);
</script>