<template>
    <div class="container border p-2 posts">
        <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
            <div class="float-right">
                <button type="button" class="btn btn-light">All</button>
                <button type="button" class="btn btn-light m-1">Active</button>
                <button type="button" class="btn btn-light">Completed - {{completed}}</button>
                <button type="button" class="btn btn-danger ml-1">Clear Compleated</button>
            </div>
        </div>
        <hr>
        <div>
            <span><a href="">{{data.length}} items left</a></span>
        </div>
        <hr>
        <form v-on:submit.prevent>
            <div class="form-group">
                <h1>Create a Todo list</h1>
                <input
                        type="text"
                        class="form-control"
                        placeholder="What do you want to do"
                        v-model="title"
                        @keyup.enter="addTask(data)"
                >
            </div>
        </form>
        <app-post
                :data="d"
                :index="index"
                v-for="(d,index) of data"
                @deletePost="deletePost"
                @selectCompleted="selectCompleted"
        >
        </app-post>
    </div>
</template>

<script>
    import Post from "./Post";

    export default {
        name: "Posts",
        components: {
            appPost: Post
        },
        data() {
            return {
                title: '',
                completed: 0,
                data: [],
            }
        },
        methods: {
            addTask(data) {
                data.push({title: this.title, edit: false, checked: false})
                this.title = '';
            },
            deletePost(event,checked) {
                this.data.splice(event, 1);
                if(checked){
                    this.completed--
                }
            },
            selectCompleted(event){
                if(event){
                    this.completed++
                }
                else{
                    this.completed--
                }
            }
        }

    }
</script>

<style scoped>
    .posts {
        width: 32%;
    }
</style>
