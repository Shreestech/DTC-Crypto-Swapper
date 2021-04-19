<template>
  <div class="home-wrapper flex flex-col justify-center">
    <h2 className="text-4xl mt-10 ">Calculate how many DTC you’ll <span className="text-blue-500 font-bold dropdown dropdown-transition">get for your DTX</span>.</h2>
    <div class="rounded-full md:mx-20 mt-10 w-full flex flex-row justify-between md:flex-row border-8 border-blue-500">
      <input
        type="text"
        name="DTC_value"
        style="padding:1rem"
        placeholder="DTX Amount here"
        className="flex-1 rounded-full outline-none"
        v-model="DTX_value"
      />
      <div class=" ont-bold bg-gray-300 rounded-full w-40" style="padding:1rem">DTX</div>
    </div>
    <p v-show="valid">{{`Swap ${DTC_value} DTC for ${DTX_value} DTX`}}</p>
    <div
    style="padding:1rem;"
      class="md:w-1/4 w-1/2  mx-20 md:mx-40  text-white mt-5 inset-x-0 bottom-0 md:relative md:inset-x-0 md:bottom-0"
    >
        <a
        align="middle"
         class="rounded-2xl font-bold text-xl md:mx-40 h-10 text-black btn btn4"
        style="width: 100%; display: block;"
          :href="`https://DTWallet.io/receive/0x870d01e76c30B2077973b89491Cd1f86BB84FDF8/${DTX_value}`"
          target="_blank">
          <div align="center" className="-mt-3">GO</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalculationA',
  data: () => ({
      valid: false,
      DTC_value: '',
      DTX_value: '',
  }),
  methods: {
    calculateDTC() {
      const api = "http://www.randomnumberapi.com/api/v1.0/random";
      const self = this;
      this.axios.get(api).then((response) => {
        self.DTX_value = response.data
        self.valid = true;
      }).catch(function (error) {
        console.log(error)
        self.DTX_value = Math.random();
        // self.valid = false;
        self.valid = true;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  z-index: 99;
}

.dropdown-btn {
  padding: 10px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 10px 27px;
  font-family: "Saira Semi Condensed", sans-serif;
}

.dropdown-transition .dropdown-content {
  display: none;
  position: absolute;
  min-width: 100px;
  background: #fff;
  padding: 10px;
}

.dropdown-transition:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  text-decoration: none;
  margin: 10px 0;
  display: block;
  color: #07a;
  font-size: 21px;
}

.dropdown-content::before {
  position: absolute;
  content: "";
  border: 5px solid transparent;
  z-index: 1;
  bottom: 100%;
  border-top-width: 0;
  border-bottom-color: #fff;
  left: 25px;
}

.dropdown-content p {
  text-decoration: none;
  margin: 0px 0;
  display: block;
  color: #666;
  font-size: 16px;
  width: 300px;
}
</style>
