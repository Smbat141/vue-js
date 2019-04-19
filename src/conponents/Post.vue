<template>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <div class="input-group-text">
                <input type="checkbox" v-model="data.checked" @change="completed">
            </div>
        </div>
        <span class="border text-center p-1 text-secondary" @dblclick="data.edit = true" v-show="data.edit == false">
                <h4 :class="{del:data.checked}">{{data.title}}</h4>
        </span>
        <input v-show="data.edit" type="text" v-model="data.title" @dblclick="data.edit = false" class="editInput">
        <div class="input-group-prepend">
            <button class="btn btn-danger rounded" @click="deletePost">X</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        data() {
            return {
            }
        },
        props: ['data', 'index'],
        methods: {
            deletePost() {
                this.$emit('deletePost', this.index,this.data.checked)
            },
            completed(){
                this.$emit('selectCompleted',this.data.checked)
            }

        }
    }
</script>

<style scoped>
    span {
        width: 85%;
    }

    .editInput {
        width: 85%;
    }

    .del {
        text-decoration: line-through;
    }
</style>
