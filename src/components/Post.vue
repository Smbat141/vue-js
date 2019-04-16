<template>
    <div class="row pt-3">
        <div class="col-sm-12 post">
            <h1>Post Title - {{post.title}}</h1>
            <p><b>Text : </b>{{post.text}}</p>
            <div class="float-right pb-3">
                <button class="btn btn-primary mr-3" @click="sendData">Edit</button>
                <button class="btn btn-danger" @click="deleteData">Delete</button>
            </div>

        </div>
    </div>

</template>

<script>

    export default {
        name: "Post",
        props: ['post', 'index'],
        methods: {
            sendData() {
                window.scrollTo(0, 0);
                this.$emit('sendData', {title: this.post.title, text: this.post.text, index: this.index});
            },
            deleteData() {
                this.$emit('deleteData', this.index);
            },
        },

    }
</script>

<style scoped>
    .post {
        border: 1px solid;
    }
</style>
