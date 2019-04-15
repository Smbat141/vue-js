<template>
    <div class="row pt-3" >
        <div class="col-sm-12 post">
            <h1>Post Title - {{title}}</h1>
            <p><b>Text : </b>{{text}}</p>
            <p><b>Age : </b>{{age}}</p>
        </div>
    </div>

</template>

<script>

    export default {
        name: "Post",
        props: ['title', 'text','age'],
    }
</script>

<style scoped>
    .post{
        border: 1px solid;

    }
</style>
