<script setup>
import BaseLayout from '@/components/layouts/BaseLayout.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>
<template>
  <BaseLayout>
    <section class="w-full bg-white p-10 rounded-2xl">
      <div class="flex justify-center gap-10 mb-10">
        <router-link to="registration" class="text-grey" exact-active-class="text-primary"
          >Створити аккаунт</router-link
        >
        <router-link to="login" class="text-grey" exact-active-class="text-primary"
          >Увійти</router-link
        >
      </div>
      <router-view></router-view>
    </section>
  </BaseLayout>
</template>
