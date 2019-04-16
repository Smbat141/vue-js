<template>
    <div>
        <div class="container pt-3" id="inputs">
            <form v-on:submit.prevent>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Title" v-model="title">
                </div>
                <div class="form-group">
                    <label for="text">Text</label>
                    <textarea class="form-control" id="text" placeholder="Text" v-model="text"/>
                </div>
                <button type="submit" class="btn btn-primary" @click="addPost" v-if="button == 'Submit'">{{button}}
                </button>
                <button type="submit" class="btn btn-primary" @click="changePost" v-if="button == 'Edit'">{{button}}
                </button>
            </form>
            <br>
            <post
                    v-for="(post,index) of data"
                    :post="post"
                    :index="index"
                    @sendData="editPost($event)"
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
                title: '',
                text: '',
                index: '',
                button: 'Submit',
                data: [],
            }
        },
        components: {
            post: Post
        },
        methods: {
            addPost() {
                this.data.push(
                    {title: this.title, text: this.text}
                );
                this.title = '';
                this.text = '';
            },
            editPost(event) {
                this.title = event.title;
                this.text = event.text;
                this.index = event.index;
                this.button = 'Edit';
            },
            changePost() {
                this.data.map((key, index) => {
                    if (index == this.index) {
                        key.title = this.title
                        key.text = this.text
                        this.button = 'Submit'
                        this.title = '';
                        this.text = '';
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
