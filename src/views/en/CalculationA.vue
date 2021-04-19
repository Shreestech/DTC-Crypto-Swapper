<template>
  <div class="home-wrapper flex flex-col justify-center">
    <div class="flex flex-col items-center gap-10">
      <h2 className="text-4xl mt-10">
        You're ready to convert your
        <span className="text-blue-500 font-bold inline "
          ><div class="inline">

  <div class="dropdown inline-block relative w-screen md:w-full group">
    <button class=" text-gray-700 font-semibold py-2 px-4 md:animate-bounce animate-none">
      <span class="mr-1 inline text-blue-500 ">DTC to DTX</span>
    </button>
    <ul class="opacity-0 group-hover:opacity-100  block transform transition-all duration-150 ease-out bg-white w-full dropdown-menu absolute hidden text-gray-700 pt-1 z-10">
            <p
              class="text-lg font-light leading-relaxed mt-6 mb-4 text-black  font-semibold border-4 border-blue-500"
            >
              You are now ready to send your DTC to the DTC/DTX conversion
              pool:<br /><br />
              Every 24 hours, a varying amount of DTC is eligible to be
              converted into DTX. <br /><br />This amount will be split
              proportionally to the pool size among the owners of the DTC in the
              conversion pool.<br /><br />
              For example if you're stake in the pool is 100 DTC, the pool size
              is 250 DTC, and the conversion cycle allows 50 DTC to be converted
              into DTX, then you will receive 100/(250/5)=20 DTX to your DTX
              address.
            </p>
    </ul>
  </div>

</div></span
        ><div className="animate-bounce"></div>
      </h2>
    </div>
    <div class="rounded-full md:mx-20 mt-10 w-full flex flex-row justify-between md:flex-row border-8 border-blue-500">
      <input
        type="text"
        name="DTC_value"
        placeholder="DTC Amount here"
        style="padding: 1rem;"
        className="flex-1 rounded-full outline-none"
        v-model="DTC_value"
      />
      <div>
      <div class="font-bold bg-gray-300 rounded-full w-20 " style="padding:1rem"><div>DTC</div></div></div>
    </div>
    <p v-show="valid">{{ `Swap ${DTC_value} DTC for ${DTX_value} DTX` }}</p>
    <div
    style="padding:1rem"
      class="md:w-1/4 w-1/2  mx-20 md:mx-40  text-white mt-5 inset-x-0 bottom-0 md:relative md:inset-x-0 md:bottom-0"
    >
      <a
        align="middle"
        class="rounded-2xl font-bold text-xl md:mx-40 h-10 text-black btn btn4"
        style="width: 100%; display: block;"
        @click="calculateDTX"
        target="_blank"
      >
        <div align="center" className="-mt-3">GO</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculationA",
  data: () => ({
    // valid: false,
     DTC_value: '',
    // DTX_value: '',
  }),
  methods: {
    calculateDTX() {
      this.$toast.info(`BUTTON CLICKED`);
      window.open(
        `https://DTWallet.io/receive/0x870d01e76c30B2077973b89491Cd1f86BB84FDF8/${self.DTC_value}`,
        "_blank"
      );
      // const api = "http://www.randomnumberapi.com/api/v1.0/random";
      // const self = this;
      // this.axios.get(api).then((response) => {
      //   self.DTX_value = response.data
      //   self.valid = true;
      // }).catch(function (error) {
      //   console.log(error)
      //   self.DTX_value = Math.random();
      //   // self.valid = false;
      //   self.valid = true;
      // })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
.v-toaster {
  right: 0;
  left: auto;
}
/* 
Note: you can also do this with Tailwind's group-hover. Unfortunately Tailwind CDN version does not include this variant, so you will have to adjust the tailwind.config.js file in your own project.

Example with group-hover: https://codesandbox.io/s/tailwind-dropdown-with-group-hover-gm9k9
 */
</style>
