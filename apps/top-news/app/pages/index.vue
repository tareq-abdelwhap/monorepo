<script lang="ts" setup>
import { articles } from '@/utils/articles.json'

console.log(process.env.NODE_ENV)
</script>

<template>
  <main>
    <h1 class="article__heading">Top News</h1>
    <HydrationStatus />
    <section class="article__section">
      <LazyArticleCard
        v-for="article in articles"
        :key="article.title"
        :article="article"
      />
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');

.article {
  &__heading {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
  }
  &__section {
    font-family: 'Open Sans', sans-serif;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
  }
}
</style>
