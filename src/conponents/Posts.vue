<template>
    <div class="container border p-2 posts">
        <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
            <div class="float-right">
                <button type="button" class="btn btn-light" @click="button = 'all'">All</button>
                <button type="button" class="btn btn-light m-1" @click="button = 'active'">Active</button>
                <button type="button" class="btn btn-light" @click="button = 'com'">Completed - {{selectCompleted}}</button>
                <button type="button" class="btn btn-danger ml-1" @click="deleteCompleted">Clear Compleated</button>
            </div>
        </div>
        <hr>
        <div>
            <span class="text-info"> items left</span>
            <span class="float-right text-info">double click twice to edit</span>
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
                        @keyup.enter="addTask"
                >
            </div>
        </form>
        <app-post
                v-for="d in filteredData"
                :data="d"
                :key="d.id"
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
                button:'all',
            }
        },
        methods: {
            addTask() {
               this.$store.commit('addPost',this.title)
                this.title = '';
            },
            deleteCompleted(){
              this.$store.commit('deleteCompleted')
            }
        },
        computed: {
            filteredData() {
               return this.$store.getters.filterData(this.button)
            },
            selectCompleted(){
                return this.$store.getters.selectCompleted;

            }
        }
    }
</script>

<style scoped>
    .posts {
        width: 32%;
    }
</style>
