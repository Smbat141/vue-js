<template>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input">
                </div>
            </div>
            <span class="border text-center p-1 text-secondary"><h4>{{data.title}}</h4></span>
            <div class="input-group-prepend">
                <button class="btn btn-primary mr-1 rounded">edit</button>
                <button class="btn btn-danger rounded">x</button>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Post",
        props: ['data']
    }
</script>

<style scoped>
    span{
        width: 66%;
    }
</style>
