<template>
    <header>
        <h1> <NuxtLink to="/"> Our Recipes </NuxtLink></h1>
        <ul>
            <li> <NuxtLink to="/about"> About </NuxtLink></li>
            <li> <NuxtLink to="#"> Donate </NuxtLink></li>
        </ul>
    </header>
</template>

<style lang=scss scoped>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        border-bottom: 2px solid white;
        padding: 0.5rem 1rem;
        // justify-content: flex-end;

        a {
            text-decoration: none;
        }

        h1 {
            color: pink;
            margin: 0;
            font-size: 1.5rem;
        }

        ul {
            list-style-type: none;
            display: flex;
            flex-direction: row;
            gap: 1rem;
            margin-bottom: 0;
        }
    }
</style>