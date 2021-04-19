<template>
  <div class="home-wrapper">
    <div class="flex flex-col items-center gap-10">
    <img src="../../assets/iconNavA.png"  class="md:w-1/2 w-full" alt="logo" />
    <h2 class="text-2xl">Do you already have an Ethereum Address to store your DTX?</h2>
    </div>
    <div class="action-buttons">
            <router-link class="group rounded-2xl w-56 flex flex-col justify-between btn btn4" to="/swap-a-b"><span className="group-hover:text-white font-bold">No</span></router-link>
      <router-link class="group rounded-2xl w-56 flex flex-col justify-between btn btn4" to="/swap-a-a"><span className="group-hover:text-white font-bold">Yes</span></router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SwapA',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
