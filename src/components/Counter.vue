<template>
    <div>
        <h1>Child component</h1>
        <h1>Counter - {{count}}</h1>
    </div>
</template>

<script>
    export default {
        name: "Counter",
       props:{
            count:Number,
       }
    }
</script>

<style scoped>
div{
    border: 1px solid red;
}
</style>
