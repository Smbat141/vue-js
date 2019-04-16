<template>
    <div>
        <div class="container pt-3" id="inputs">
            <form v-on:submit.prevent>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Title" v-model="post.title">
                </div>
                <div class="form-group">
                    <label for="text">Text</label>
                    <textarea class="form-control" id="text" placeholder="Text" v-model="post.text"/>
                </div>
                <button type="submit" class="btn btn-primary" @click="addPost(post)" v-if="button == 'Submit'">{{button}}
                </button>
                <button type="submit" class="btn btn-primary" @click="changePost(post)" v-if="button == 'Edit'">{{button}}
                </button>
            </form>
            <br>
            <post
                    v-for="(p,index) of data"
                    :post="p"
                    :index="index"
                    @sendData="editPost($event,post)"
                    @deleteData="deleteData($event)"
            ></post>
        </div>
    </div>
</template>

<script>
    import Post from "./Post";

    export default {
        name: "Posts",
        data() {
            return {
                post:{
                    title: '',
                    text: '',
                    index: '',
                },
                button: 'Submit',
                data: [],
            }
        },
        components: {
            post: Post
        },
        methods: {
            addPost(post) {
                this.data.push(
                    {title: post.title, text: post.text}
                );
                post.title = '';
                post.text = '';
            },
            editPost(event,post) {
                post.title = event.title;
                post.text = event.text;
                post.index = event.index;
                this.button = 'Edit';
            },
            changePost(post) {
                this.data.map((key, index) => {
                    if (index == post.index) {
                        key.title = post.title
                        key.text = post.text
                        this.button = 'Submit'
                        post.title = '';
                        post.text = '';
                    }
                })
            },
            deleteData(event) {
                if (window.confirm('Delete this post?')) {
                    this.data.map((key, index) => {
                        if (index == event) {
                            this.data.splice(event, 1)
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
