<template>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input">
                </div>
            </div>
                <span class="border text-center p-1 text-secondary" @dblclick="data.edit = true"  v-show="data.edit == false">
                    <h4>{{data.title}}</h4>
                </span>
            <input v-show="data.edit" type="text"  v-model="data.title" @dblclick="data.edit = false">
            <div class="input-group-prepend">
                <button class="btn btn-danger rounded">x</button>
            </div>
        </div>
    
</template>

<script>
    export default {
        name: "Post",
        props: ['data'],
        data(){
          return {
              titleTeg:``,
              newTitle:'',
          }
        },
        methods:{

        }
    }
</script>

<style scoped>
    span{
        width: 79%;
    }
</style>
