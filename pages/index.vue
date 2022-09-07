<template>
    <div>
        <Nav />
        <h1>All Recipes</h1>
        <main class="home">
            <ul>
                <ContentList path="/recipes" v-slot="{ list }">
                    <li v-for="recipe in list" :key="recipe._path">
                        <NuxtLink :to="recipe._path">
                            {{ recipe.title }}
                        </NuxtLink>
                    </li>
                </ContentList>
            </ul>
        </main>
    </div>
</template>