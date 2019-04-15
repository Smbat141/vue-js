<template>
    <div>
        <h1>Car page</h1>
        <ul>
            <li v-for="car in 5" :key="car">
                <router-link :to="'/car/' + car">{{car}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Car"
    }
</script>

<style scoped>

</style>
