<template>
    <div>
        <app-posts></app-posts>
    </div>
</template>

<script>
    import Posts from "./components/Posts";
    export default {
        name: 'app',
        components: {
            appPosts: Posts
        },
    }
</script>

