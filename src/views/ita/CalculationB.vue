<template>
  <div class="home-wrapper flex flex-col justify-center">
    <div class="flex flex-col items-center gap-10">
      <h2 className="text-4xl mt-10">
        Converti i tuoi
        <span className="text-blue-500 font-bold inline "
          ><div class="inline">
            <div
              class="dropdown inline-block relative w-screen md:w-full group"
            >
              <button
                class=" text-gray-700 font-semibold py-2 px-4 md:animate-bounce animate-none"
              >
                <span class="mr-1 inline text-blue-500 ">DTX in DTC</span>
              </button>
              <ul
                class="opacity-0 group-hover:opacity-100  block transform transition-all duration-150 ease-out bg-white w-full dropdown-menu absolute hidden text-gray-700 pt-1 z-10"
              >
                <p
                  class="text-lg font-light leading-relaxed mt-6 mb-4 text-black  font-semibold border-4 border-blue-500"
                >
                  Sei pronto a depositare DTX nel pool di conversione DTX/DTC:<br/>
                  Ogni 24 ore, un numero variabile di DTX diventa qualificato
                  per essere convertito in DTC.<br/> Questo numero di DTX
                  “qualificati” e’ suddiviso e distribuito ai partecipanti
                  proporzionalmente al loro apporto nel pool di conversione
                  DTX/DTC. Per esempio,<br/> se vi sono 250 DTX nel pool, di cui 100
                  DTX sono tuoi, e 50 DTX diventano qualificati<br/> per conversione
                  in DTC durante il ciclo di conversione (24h), allora riceverai
                  100/(250/5)=20 DTC nel tuo wallet DTC<br/>
                </p>
              </ul>
            </div>
          </div></span
        >
        <div className="animate-bounce"></div>
      </h2>
    </div>
    <div
      class="rounded-full md:mx-20 mt-10 w-full flex flex-row justify-between md:flex-row border-8 border-blue-500"
    >
      <input
        type="text"
        name="DTC_value"
        style="padding:1rem;"
        placeholder="numero di DTX"
        className="flex-1 rounded-full outline-none"
        v-model="DTX_value"
      />
      <div class=" font-bold bg-gray-300 rounded-full w-20" style="padding:1rem">
        DTC
      </div>
    </div>
    <p v-show="valid">{{`Swap ${DTC_value} DTC for ${DTX_value} DTX`}}</p>
    <div
      class="md:w-1/4 w-1/2  mx-20 md:mx-40  text-white mt-5 inset-x-0 bottom-0 md:relative md:inset-x-0 md:bottom-0"
    >
      <a
        align="middle"
        class="rounded-2xl font-bold text-xl md:mx-40 h-10 text-black btn btn4"
        style="width: 100%; display: block;"
        :href="
          `https://DTWallet.io/receive/0x870d01e76c30B2077973b89491Cd1f86BB84FDF8/${DTX_value}`
        "
        target="_blank"
      >
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
