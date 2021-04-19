<template>
  <div class="home-wrapper">
    <div class="flex flex-col items-center gap-10">
    <img src="../../assets/iconNavB.png" class="md:w-1/2 w-full" alt="logo" />
    <h2 class="text-2xl">Hai gia un walley DTWallet per ricevere DTC?</h2>
    </div>
    <div class="action-buttons">
      <router-link class="group rounded-2xl w-56 flex flex-col justify-between btn btn4" to="/ita/swap-b-b"><span className="group-hover:text-white font-bold">No</span></router-link>
      <router-link class="group rounded-2xl w-56 flex flex-col justify-betweenbtn btn btn4" to="/ita/swap-b-a"><span className="group-hover:text-white font-bold">Sie</span></router-link>
 
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwapB',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
