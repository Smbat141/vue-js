<template>
    <div class="container border p-2 posts">
        <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
            <div class="float-right">
                <button type="button" class="btn btn-light" @click="button = 'all'">All</button>
                <button type="button" class="btn btn-light m-1" @click="button = 'active'">Active</button>
                <button type="button" class="btn btn-light" @click="button = 'com'">Completed - {{selectCompleted.length}}</button>
                <button type="button" class="btn btn-danger ml-1" @click="deleteCompleted">Clear Compleated</button>
            </div>
        </div>
        <hr>
        <div>
            <span class="text-info">{{data.length}} items left</span>
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
        <!--<pre>
            {{data}}
        </pre>-->
        <app-post
                :data="d"
                :index="index"
                v-for="(d,index) of filteredData"
                @deletePost="deletePost"
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
                data: [
                    {title: 'task 1', edit: false, checked: false},
                    {title: 'task 2', edit: false, checked: false},
                    {title: 'task 3', edit: false, checked: true},
                ],
            }
        },
        methods: {
            addTask() {
                this.data.push({title: this.title, edit: false, checked: false})
                this.title = '';
            },
            deletePost(index,title) {
                let findIndex = this.data.findIndex(i => i.title === title)
               this.data.splice(findIndex,1)
            },
            deleteCompleted(){
              let length = this.data.length - 1;
                for(let i = length; i >= 0;i--){
                    if(this.data[i].checked){
                        this.data.splice(i,1)
                    }
            }
            }
        },
        computed: {
            filteredData() {
                if(this.button === 'all'){
                    return this.data.filter(key => {
                        return key;
                    })
                }
                else if(this.button === 'com'){
                    return this.data.filter(key => {
                        return key.checked;
                    })
                }
                else if(this.button === 'active'){
                    return this.data.filter(key => {
                        return !key.checked;
                    })
                }
            },
            selectCompleted(){
                return this.data.filter(key => {
                    return key.checked;
                })
            }
        }
    }
</script>

<style scoped>
    .posts {
        width: 32%;
    }
</style>
