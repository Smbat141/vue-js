<template>
   <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
               <router-link class="nav-item nav-link" exact to="/" active-class="active" >Home</router-link>
               <router-link class="nav-item nav-link" to="/car" active-class="active">Cars</router-link>
            </div>
         </div>
      </nav>
      <router-view></router-view>
   </div>
</template>

<script>
    export default {

    }
</script>

<style>
 .active{
      background: aqua;
   }
</style>

