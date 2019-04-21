<template>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <div class="input-group-text">
                <!--<input type="checkbox"  v-model="data.checked" class="c">-->
                <span v-bind:class="[data.checked ? checkedClass : squareClass]" @click="data.checked = !data.checked"></span>
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
                checkedClass:'fa fa-check-square',
                squareClass:'fa fa-square'
            }
        },
        props: ['data', 'index'],
        methods: {
            deletePost() {
                this.$emit('deletePost', this.index,this.data.title)
            },

        },

    }
</script>

<style scoped>
    span {
        width: 80%;
    }

    .editInput {
        width: 80%;
    }

    .del {
        text-decoration: line-through;
    }

    test{
        background-color: aqua;
    }

</style>
