<template>
    <div class="container  w-25 border p-2">
        <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
            <button type="button" class="btn ">All</button>
            <button type="button" class="btn">Active</button>
            <button type="button" class="btn ">Completed</button>
        </div>
        <form v-on:submit.prevent>
            <div class="form-group">
                <h1>Create a Todo list</h1>
                <input type="text" class="form-control"   placeholder="What do you want to do" v-model="title" @keyup.enter="addTask(data)">
            </div>

        </form>
        <app-post :data="d" v-for="d of data"></app-post>
    </div>
</template>

<script>
    import Post from "./Post";

    export default {
        name: "Posts",
        components:{
            appPost:Post
        },
        data(){
            return {
                title:'',
                data:[],
            }
        },
        methods:{
            addTask(data){
                data.push({title:this.title,edit:false})
                this.title='';
            }
        }

    }
</script>

<style scoped>

</style>
