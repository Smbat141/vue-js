<template>
    <div>
        <div class="container pt-3">
            <form v-on:submit.prevent>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Title" v-model="title">
                </div>
                <div class="form-group">
                    <label for="text">Text</label>
                    <textarea class="form-control" id="text" placeholder="Text" v-model="text"/>
                </div>
                <div class="form-group">
                    <label for="age">Age</label>
                    <input type="text" class="form-control" id="age" placeholder="Age" v-model="age">

                </div>
                <button type="submit" class="btn btn-primary" @click="addPost">Submit</button>
            </form>
            <br>
            <post v-for="post of data"  :title="post.title" :text="post.text" :age="post.age"></post>
        </div>
    </div>
</template>

<script>
    import Post from "./Post";

    export default {
        name: "Posts",
        data(){
            return {
                title:'',
                text:'',
                age:'',
                data:[],
            }
        },
        components:{
          post:Post
        },
        methods:{
            addPost(){
                this.data.push(
                    {title : this.title, text : this.text, age : this.age}
                    );
                this.title = '';
                this.text = '';
                this.age = '';
            }
        }
    }
</script>

<style scoped>

</style>
