<template>
    <header>
        <h1> Cool Beans </h1>
        <!-- <ul>
            <li> Test 1 </li>
            <li> Test 2 </li>
            <li> Test 3 </li>
        </ul> -->
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
        padding: 0 1rem;
        // justify-content: flex-end;
    }

    h1 {
        color: pink;
        margin: 0;
        font-size: 2rem;
    }

    // ul {
    //     list-style-type: none;
    //     display: flex;
    //     flex-direction: row;
    //     gap: 1rem;
    //     margin-bottom: 0;
    // }
</style>