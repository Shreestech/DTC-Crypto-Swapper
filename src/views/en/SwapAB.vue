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
          Head to
          <a className="text-blue-400" href="https://DTWallet.io/wallet/export"
            >Here</a
          >
        </li>
        <li>
          When prompted, unlock <img class="inline" src="https://img.icons8.com/color/48/000000/unlock.png"/>your DTWallet with your password and either the
          mnemonic or keystore file that was generated when you first created
          your wallet.
        </li>
        <li>
          Read the warning carefully, and press “I understand the risks.
          Continue”
        </li>
        <li>
          Make sure no one is looking at your screen, or has access to your
          computer.
        </li>
        <li>Press “Reveal Private Key”</li>
        <li>Copy your DTWallet’s private key<img class="inline" src="https://img.icons8.com/color/48/000000/book-reading.png"/> to your clipboard.</li>
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
          First thing, you need an Ethereum wallet. Use any wallet <img class="inline" src="https://img.icons8.com/color/48/000000/wallet--v2.png"/>of your
          choice. We recommend Metamask.io
        </li>
        <li>If it’s the ofirst time setting up Metamask</li>
        <ul class="list-disc text-md px-10">
          <li>Open Metamask</li>
          <li>Click “Get Started”, and “Create Wallet”</li>
          <li>(dis)Agree to anonymized data collection</li>
          <li>Setup a password you’ll use to access your Metamask wallet<img class="inline" src="https://img.icons8.com/color/48/000000/wallet--v2.png"/></li>
          <li>
            You can skip the mnemonic verification, we won’t be using this
            address anyways
          </li>
        </ul>
        <li>
          Import your DTWallet private key generated in the previous step into
          Metamask.<img  class="inline" src="https://img.icons8.com/color/48/000000/key.png"/>
        </li>
        <ul class="list-disc text-md px-10">
          <li>
            Click the circle icon at the top right corner of your MetaMask
            pop-up next to the network indicator.
          </li>
          <li>Select “Import Account” on the dropdown menu</li>
          <li>
            You will be directed to the Import page<img class="inline" src="https://img.icons8.com/color/48/000000/overview-pages-1.png"/>. Paste the DTWallet private
            key and click “Import”.
          </li>
        </ul>
        <li>
          You should be able to see the newly added account in the dropdown menu
          with an "Imported" tag next to the account.
        </li>
      </ul>
    </div>
    <div class="text-xl font-bold" v-show="currentStep === 3">
      <br />
      Success! you can now proceed to swap your DTC for DTX. Make sure to fund
      your newly generated Ethereum account with ethers (ETH) to be able to make
      transactions in the ethereum network. You won’t be able to send DTX unless
      you have sufficient Gas. <br />
      <a className="text-blue-400"
        href="https://ethereum.org/en/developers/docs/gas/"
      >
        Learn more about Gas here.</a
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
      <router-link  to="/calculationA" v-show="currentStep === 3"
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
