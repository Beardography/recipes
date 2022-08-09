<template>
    <main>
        <h1>All Recipes</h1>
        <ContentList path="/recipes" v-slot="{ list }">
            <div v-for="recipe in list" :key="recipe._path">
                <NuxtLink :to="recipe._path">
                    {{ recipe.title }}
                </NuxtLink>
            </div>
        </ContentList>
    </main>
</template>
