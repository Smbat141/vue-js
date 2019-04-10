<template>
    <div class="car">
        <h1>Child component</h1>
        <h1>{{ name }} / {{reverseText}}</h1>
        <h1>{{ year }}</h1>
        <button @click="changeName">Push</button>
        <button @click="changeNameAudi()">Change Audi</button>
        <button @click="changeCount">Change Count</button>
    </div>
</template>

<script>
    export default {
        name: "Car",
        props:{
            name:String,
            year:Number,
            changeNameAudi:Function,
            count:Number,
        },
        computed:{
            reverseText(){
                return this.name.split('').reverse().join('');
            }
        },
        methods:{
            changeName:function () {
                this.name = 'Mazda';
                this.$emit('changeName',this.name)
            },
            changeCount:function () {
                this.$emit('changeCount',this.count+1);
            }
        }

    }
</script>

<style>
    .car{
        border: 1px solid red;
    }
</style>
