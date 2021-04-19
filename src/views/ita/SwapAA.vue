<template>
  <div class="home-wrapper">
    <div class="flex flex-col items-center gap-10">
    <img src="../../assets/iconNavAA.png"  class="md:w-full w-full" alt="logo" />
    <h2 class="text-2xl">Il tuo indirizzo Ethereum è identico all'indirizzo DTWallet.io?</h2>
    </div>
    <div class="action-buttons">
 
      <router-link class="group rounded-2xl w-56 flex flex-col btn btn4" to="/ita/swap-a-b"><span className="group-hover:text-white font-bold">No</span></router-link>
      <button class="group rounded-2xl w-56 flex flex-col btn btn4" type="button" @click="openModal()"><span className="group-hover:text-white font-bold">Non lo so…</span></button>

     <router-link class="group rounded-2xl w-56 flex flex-col btn btn4" to="/ita/calculationA"><span className="group-hover:text-white font-bold">Si</span></router-link>
    </div>

    <div class="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex flex-row" v-show="modalIsOpen">
      <div
      @click="closeModal()"
        class="transition: all 0.6s ease; h-screen animated fadeInUp fixed shadow-inner max-w-md md:relative top-24 md:top-0 pin-b pin-x align-top justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow md:flex md:flex-col"
      >
    <div class="mx-20 md:m-auto mb-3 items-center text-center ">      <img src="../../assets/iconInfoMod.png" class="rounded-full align-center" align="center" alt="logo" width="100" />
 </div>
        <p class="text-xl leading-normal mb-8 text-center mx-10 ">
              <ol class="list-decimal text-sm space-x-8 md:text-2xl ">
                <li>Segui <a className="text-blue-400" href="https://metamask.zendesk.com/hc/en-us/articles/360015289512-How-to-copy-your-MetaMask-Account-Public-Address-" target="_blank">queste istruzioni se stai usando Metamask</a>, o <a href="https://kb.myetherwallet.com/en/getting-started/how-to-access-your-wallet/" target="_blank">queste istruzioni se usi MyEtherWallet</a> per identificare il tuo indirizzo Ethereum.</li>
                <li>Vai a<a className="text-blue-400" href="https://DTWallet.io/unlock">https://DTWallet.io/unlock</a>ed accedi al tuo DTWallet con la combinazione di parole (mnemonico) o il documento "keystore" generato durante la creazione del tuo wallet.</li>
                <li> Controlla che gli indirizzi identificati nei passaggi precedenti sono uguali. Puoi usare <a className="text-blue-400"  href="https://text-compare.com/">questo sito</a> per paragonarli</li>
              </ol>
        </p>
        <div class="inline-flex justify-center md:hidden">
          <button
          type="button"
          @click="closeModal()"
            class="bg-grey-lighter flex-1 border-b-2 md:flex-none border-green ml-2 hover:bg-green-lightest text-grey-darkest font-bold py-4 px-6 rounded"
          >
            Chiudi
          </button>
        </div>
        <span class="absolute pin-t pin-r pt-4 px-4">
          <svg
            class="h-12 w-12 text-grey hover:text-grey-darkest"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwapAA',
  data: () => ({
      modalIsOpen: false,
  }),
  methods: {
      openModal() {
          this.modalIsOpen = true;
      },
      closeModal() {
          this.modalIsOpen = false;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #E0E0E0E0;
  z-index: 9999;
}

.modal-content {
  position: relative;
  max-width: 400px;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
  background: #FFFFFF;
}

span.modal-close {
  top: 15px;
  right: 15px;
  width: 5rem;
  cursor: pointer;
}
</style>
