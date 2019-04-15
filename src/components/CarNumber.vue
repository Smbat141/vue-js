<template>
    <div>
        <h1>Hello i am a car number {{id }}</h1>
        <button class="btn btn-primary" @click="backPage">Back</button>

        <router-link class="btn btn-info" :to="'/car/' + id + '/info'">Read more</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "CarNumber",
        data() {
            return {
                id: this.$route.params['id'],
            }
        },
        methods: {
            backPage() {
                this.$router.push('/car');

            }
        }

    }
</script>

<style scoped>

</style>
