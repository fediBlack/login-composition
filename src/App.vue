<template>
  <!-- <header>
    
    <div class="">
      
      <nav>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}
</style>
