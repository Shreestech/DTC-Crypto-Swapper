<template>
  <div class="home-wrapper">
    <div class="flex flex-col items-center gap-10">
    <img src="../../assets/iconNavBA.png" class="md:w-1/2 w-full" alt="logo" />
    <h2 class="text-2xl">Does your DTWallet.io address match the Ethereum address which holds your DTX?</h2>
    </div>
    <div class="action-buttons">
      <router-link class="group rounded-2xl w-56 flex flex-col btn btn4" to="/swap-b-b"><span className="group-hover:text-white font-bold">No</span></router-link>
      <button class="group rounded-2xl w-56 flex flex-col btn btn4" type="button" @click="openModal()"><span className="group-hover:text-white font-bold">I don't know...</span></button>
      <router-link class="group rounded-2xl w-56 flex flex-col btn btn4" to="/calculationB"><span className="group-hover:text-white font-bold">Yes</span></router-link>

    </div>

    <div class="animated fadeIn fixed z-50 pin overflow-auto bg-smoke-dark flex" v-show="modalIsOpen">
      <div
      @click="closeModal()"
        class="h-screen animated fadeInUp fixed shadow-inner max-w-md md:relative top-24 md:top-0 pin-b pin-x align-top justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow md:flex md:flex-col"
      >
    <div class="mx-20 md:m-auto mb-3 items-center text-center"> 
      <img src="../../assets/iconInfoMod.png" class="rounded-full align-center" align="center" alt="logo" width="100" />
     </div>
        <p class="text-xl leading-normal mb-8 text-center mx-10 ">
              <ol class="list-decimal text-sm space-x-8 md:text-2xl ">
                <li>Follow <a className="text-blue-400" href="https://metamask.zendesk.com/hc/en-us/articles/360015289512-How-to-copy-your-MetaMask-Account-Public-Address-" target="_blank">these instructions if you’re using Metamask</a>, or <a href="https://kb.myetherwallet.com/en/getting-started/how-to-access-your-wallet/" target="_blank">these instructions if you’re using MyEtherWallet</a> to find your Ethereum’s address.</li>
                <li>Head to <a className="text-blue-400" href="https://DTWallet.io/unlock">https://DTWallet.io/unlock</a> and unlock your DTWallet with either the mnemonic or keystore file that was generated when you first created your wallet.</li>
                <li>Compare the wallet addresses generated from step 1 and 2.</li>
              </ol>
        </p>
        <div class="inline-flex justify-center md:hidden">
          <button
          type="button"
          @click="closeModal()"
            class="bg-grey-lighter flex-1 border-b-2 md:flex-none border-green ml-2 hover:bg-green-lightest text-grey-darkest font-bold py-4 px-6 rounded"
          >
            Understood
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
  name: "SwapAA",
  data: () => ({
    modalIsOpen: false,
  }),
  methods: {
    openModal() {
      this.modalIsOpen = true;
    },
    closeModal() {
      this.modalIsOpen = false;
    },
  },
};
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
  background-color: #e0e0e0e0;
  z-index: 9999;
}

.modal-content {
  position: relative;
  max-width: 400px;
  padding: 3rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #ffffff;
}

span.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
body{
  margin: 0;
  padding: 0;
  background: #2d3436;
}
.middle{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.btn{
  position: relative;
  display: block;
  color: white;
  font-size: 14px;
  font-family: "montserrat";
  text-decoration: none;
  margin: 30px 0;
  border: 2px solid #4e51b0;
  padding: 14px 60px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;
}
.btn::before{
  background: #4e51b0;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: -1;
  transition: all 0.6s ease;
}

.btn1::before{
  width: 0%;
  height: 100%;
}

.btn1:hover::before{
  width: 100%;
}


.btn2::before{
  width: 100%;
  height: 0%;
}
.btn2:hover::before{
  height: 100%;
}

.btn3::before{
  width: 100%;
  height: 0%;
  transform: translate(-50%,-50%) rotate(45deg);
}
.btn3:hover::before{
  height: 380%;
}

.btn4::before{
  width: 100%;
  height: 0%;
  transform: translate(-50%,-50%) rotate(-45deg);
}
.btn4:hover::before{
  height: 380%;
}

</style>
