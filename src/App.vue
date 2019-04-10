<template>
  <div>
    <h1>Parent component</h1>
    <h1>{{name}}</h1>
    <app-counter :count="count"></app-counter>
    <br>
    <app-car
            :name="name"
            :year="year"
            @changeName="name=$event"
            :changeNameAudi="changeNametoAudi"
            :count="count"
            @changeCount="count=$event"
    ></app-car>
  </div>
</template>

<script>
import Car from "./components/Car";
import Counter from "./components/Counter";

export default {
  name: 'app',
  data(){
    return {
      msg:'Hello world vue',
      name:'Ford',
      year:2019,
      count:0,
    }
  },
  components:{
    appCar:Car,
    appCounter:Counter,
  },
  methods:{
    changeNametoAudi(){
      this.name = 'Audi';
    }
  }

}
</script>

