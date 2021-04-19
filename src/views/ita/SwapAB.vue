<template>
  <div class="home-wrapper">
    <div class="video-container  mb-5 h-1/2 flex flex-col justify-bewtween items-center align-center">
      <iframe class="responsive-iframe " src="https://drive.google.com/file/d/13KPmw6O9r0odP4dUc2vtzUbbvUa7eUkA/preview?start=1" allowfullscreen="true" allow="autoplay"></iframe>
    </div>
    <br />
    <div class="flex flex-col items-center align-center">
    <div
      class="overflow-y-scroll  text-left h-screen animated fadeInUp  shadow-inner max-w-md  p-8 bg-white md:rounded w-full md:h-auto md:shadow md:flex md:flex-row"
      v-show="currentStep === 1"
    >
      <ul
        class="list-decimal md:text-sm space-x-8 md:space-y-3 space-y-8 md:text-2xl overflow-ellipsis overflow-hidden"
      >
        <li class="ml-8">
          Apri
          <a className="text-blue-400" href="https://DTWallet.io/wallet/export"
            >Create Wallet </a
          >
        </li>
        <li>
          Accedi al tuo DTWallet con <img class="inline" src="https://img.icons8.com/color/48/000000/unlock.png"/>la combinazione di parole (mnemonico) o il documento "keystore" generato durante la creazione del tuo wallet.
        </li>
        <li>
Leggi gli avvertimenti con attenzione, e premi “I understand the risks. Continue” per continuare
        </li>
        <li>
Accertati che solo tu hai accesso a questo computer, e che nessuno possa vedere i contenuti del tuo schermo.
        </li>
        <li>Premi “Reveal Private Key”</li>
        <li>Copia la chiave privata del<img class="inline" src="https://img.icons8.com/color/48/000000/book-reading.png"/>  tuo DTWallet negli appunti.</li>
      </ul>
    </div>
    <div
      class="overflow-y-scroll  text-left h-screen animated fadeInUp  shadow-inner max-w-md  p-8 bg-white md:rounded w-full md:h-auto md:shadow md:flex md:flex-row"
      v-show="currentStep === 2"
    >
      <ul
        class="list-decimal md:text-sm space-x-8 md:space-y-3 space-y-8 md:text-2xl overflow-ellipsis overflow-hidden"
      >
        <li class="ml-8">
           Ti occorre un wallet Ethereum. Noi <img class="inline" src="https://img.icons8.com/color/48/000000/wallet--v2.png"/>of your
          <a className="text-blue-400" href="https://metamask.io/">consigliamo Metamask.io</a>
        </li>
        <li>Se è la prima volta che usi Metamask:</li>
        <ul class="list-disc text-md px-10">
          <li>Dopo aver installato Metamask. Clicca sull'icona per aprirlo.</li>
          <li>Clicca “Get Started”, e “Create Wallet”</li>
          <li>Accetta o rifiuta alla raccolta anonima di dati.</li>
          <li>Imposta la password che userai per accedere a Metamask.<img class="inline" src="https://img.icons8.com/color/48/000000/wallet--v2.png"/></li>
          <li>
ignora la verifica della serie mnemonica di parole, non occorre salvarlo
          </li>
        </ul>
        <li>
         Importa la chiave privata del tuo DTWallet nel wallet Metamask.<img  class="inline" src="https://img.icons8.com/color/48/000000/key.png"/>
        </li>
        <ul class="list-disc text-md px-10">
          <li>
Clicca sull'icona circolare in alto a destra della schermata Metamask, sulla destra dell'indicatore del Network
          </li>
          <li>. Seleziona "Import Account" dal menu a tendina.</li>
          <li>
             Incolla la chiave privata del tuo DTWallet generato nel<img class="inline" src="https://img.icons8.com/color/48/000000/overview-pages-1.png"/>. Paste the DTWallet private
           passaggio precedente e clicca "Import"
          </li>
        </ul>
        <li>
Ora dovresti vedere il nuovo indirizzo aggiunto a Metamask dal menu a tendina degli account. L'account sarà contrassegnato dal testo "Imported"
        </li>
      </ul>
    </div>
    <div class="text-xl font-bold" v-show="currentStep === 3">
      <br />
Adesso sei pronto per convertire i tuoi DTC in DTX. Assicurati di depositare ethers (ETH) nel wallet Ethereum che hai appena generato. ETH sono necessari per pagare le fees di transazione. Non sarà possibile trasferire DTX senza ETH sufficienti.<br />
      <a
      className="text-blue-400"
        href="https://ethereum.org/en/developers/docs/gas/"
      >
        Impara di più sul Gas qui.</a
      >
    </div>
    <div class="action-buttons mt-10">
      <button className="shadow-inner rounded-xl btn btn4" type="button" @click="backStep" v-show="currentStep > 1">
        Back
      </button>
      <button className="shadow-inner rounded-xl btn btn4" type="button" @click="nextStep" v-show="currentStep < 3">
        Next
      </button>
      <div className="my-7 ml-3">
      <router-link  to="/ita/calculationA" v-show="currentStep === 3"
        >Done</router-link
      ></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwapAB",
  data: () => ({
    currentStep: 1,
  }),
  methods: {
    backStep() {
      this.currentStep--;
    },
    nextStep() {
      this.currentStep++;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol {
  list-style: none;

}
li {

  margin-top: 2rem;
}
li::before {
  background: #662974;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: inline-block;
  line-height: 2rem;
  color: white;
  text-align: center;
  margin-right: 0.5rem;
}
ol ol li::before {
  background: #DE51FF;
}
ol ol ol li::before {
  background: #EE9EFF;
}

body {
  font-family: 'PT Serif', serif;
  opacity: 10%;
}
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
