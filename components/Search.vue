<template>
  <div>
    <input v-model="query" type="search" autocomplete="off" />

    <ul v-if="recipes.length">
      <li v-for="recipe of recipes" :key="recipe.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: recipe.slug } }">{{ recipe.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data () {
    //   const recipes = await this.$content('recipes').search('title').fetch();

    return {
      query: '',
      recipes: []
    }
  },
  watch: {
    async query (query) {
      if (!query) {
        this.recipes = []
        return
      }

      this.recipes = await this.$content('recipes')
        .only(['title', 'slug'])
        .limit(12)
        .search(query)
        .fetch()
    }
  }
}
</script>
