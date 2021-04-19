<template>
  <div class="home-wrapper ">
    <div class="video-container  mb-5 ">
      <iframe class="responsive-iframe " src="https://drive.google.com/file/d/1oqCtcjMU4nFPSEIwGMg-b1kFQ3f4nKYE/preview?start=1"  allowfullscreen="true" allow="autoplay"></iframe>
    </div>
    <br />
    <div class="flex flex-col items-center align-center">
    <div
      class="overflow-y-scroll  text-left h-screen animated fadeInUp  shadow-inner max-w-md  p-8 bg-white md:rounded w-full md:h-auto md:shadow md:flex md:flex-row"
      v-show="currentStep === 1"
    >
      <ul
        class="overflow-x-scroll list-decimal md:text-sm space-x-8 md:space-y-3 space-y-8 md:text-2xl overflow-ellipsis overflow-hidden"
      >
        <li class="ml-8">Access DTWallet</li>
        <ul class="list-disc text-md px-10 ">
          <li class="whitespace-pre-line">If you do not have an DTWallet, click <a class="text-blue-400" href="http://dtwallet.io/wallet/create">Here</a> and follow the wallet creation procedure
<svg xmlns="http://www.w3.org/2000/svg"  class="inline" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"  width="54px" height="54px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 10.001 10.001;" xml:space="preserve">
<circle style="fill:#FFDF47;" cx="255.997" cy="255.996" r="255.996"/>
<path style="fill:#FEC000;" d="M512,256.001c0-34.27-6.751-66.959-18.969-96.833L384.901,51.035l-68.626,16.666l-13.452-19.725  l-148.209,57.077h-39.64c-23.699,0-43.089,19.39-43.089,43.09v225.344c0,14.266,7.032,26.963,17.794,34.817l93.033,93.033  c23.22,6.927,47.816,10.665,73.288,10.665C397.385,512,512,397.385,512,256.001z"/>
<rect x="162.948" y="77.601" transform="matrix(-0.9718 0.236 -0.236 -0.9718 596.0664 229.996)" style="fill:#004DB1;" width="242.643" height="146.134"/>
<rect x="98.065" y="86.033" transform="matrix(-0.9332 0.3594 -0.3594 -0.9332 478.1513 230.3483)" style="fill:#0088FF;" width="239.198" height="147.174"/>
<polygon style="fill:#006EF5;" points="355.714,185.316 302.823,47.976 256,66.007 256,223.716 "/>
<path style="fill:#E67500;" d="M394.841,416.575H114.974c-23.699,0-43.09-19.39-43.09-43.09V148.141  c0-23.699,19.39-43.09,43.09-43.09h279.867c23.699,0,43.09,19.39,43.09,43.09v225.344  C437.931,397.184,418.54,416.575,394.841,416.575z"/>
<path style="fill:#C06200;" d="M394.841,105.053H256v311.522h138.841c23.699,0,43.09-19.39,43.09-43.09V148.141  C437.931,124.442,418.54,105.053,394.841,105.053z"/>
<path style="fill:#990011;" d="M321.064,210.97c-27.529,0-49.844,22.316-49.844,49.844c0,27.527,22.316,49.843,49.844,49.843  h125.308V210.97L321.064,210.97L321.064,210.97z"/>
<circle style="fill:#AEADB3;" cx="320.393" cy="260.813" r="29.372"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></li>
          <li>If you already have an DTWallet, head to <a className="text-blue-500" href="https://DTWallet.io/unlockwallet">Here.</a></li>
        </ul>
        <li><svg version="1"  class="inline" width="54px" height="54px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
    <path fill="#424242" d="M24,4c-5.5,0-10,4.5-10,10v4h4v-4c0-3.3,2.7-6,6-6s6,2.7,6,6v4h4v-4C34,8.5,29.5,4,24,4z"/>
    <path fill="#FB8C00" d="M36,44H12c-2.2,0-4-1.8-4-4V22c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v18C40,42.2,38.2,44,36,44z"/>
    <circle fill="#C76E00" cx="24" cy="31" r="3"/>
</svg>Unlock your DTWallet with your password and either the mnemonic or keystore file that was generated when you first created your wallet.
        </li>
        <li>Click “EXPORT” located on the top bar of your DTWallet home screen.</li>
        <li>Read the warning carefully, and press “I understand the risks. Continue”<svg version="1.1" class="inline" width="54px" height="54px" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g>
	<path fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
		M297,337.5c0,43.44,32.4,79.32,74.35,84.77c3.65,0.48,7.37,0.73,11.15,0.73c4.59,0,9.1-0.36,13.5-1.07V495H18V68h94.5v63h189V68
		H396v185.07c-4.4-0.71-8.91-1.07-13.5-1.07c-3.78,0-7.5,0.25-11.15,0.73C329.4,258.18,297,294.06,297,337.5z"/>
	<path fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M297,337.5c0,43.44,32.4,79.32,74.35,84.77v33.01H42.65V107.72h69.85V131h189v-23.28h69.85v145.01 C329.4,258.18,297,294.06,297,337.5z"/>
	<path fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M301.5,50v81h-189V50h63.01c-0.01-0.16-0.01-0.33-0.01-0.5c0-17.4,14.1-31.5,31.5-31.5s31.5,14.1,31.5,31.5c0,0.17,0,0.34-0.01,0.5 H301.5z"/>
		<circle fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="207.5" cy="45.5" r="4.5"/>
		<circle fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="85.5" cy="193.5" r="4.5"/>
		<circle fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="85.5" cy="247.5" r="4.5"/>
		<circle fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="85.5" cy="301.5" r="4.5"/>
		<circle fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="85.5" cy="355.5" r="4.5"/>
		<line fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="117" y1="189" x2="261" y2="189"/>
		<line fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="117" y1="252" x2="261" y2="252"/>
		<line fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="117" y1="306" x2="261" y2="306"/>
		<line fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="117" y1="360" x2="261" y2="360"/>
	<path fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M468,337.5c0,42.63-31.19,77.97-72,84.43c-4.4,0.71-8.91,1.07-13.5,1.07c-3.78,0-7.5-0.25-11.15-0.73
		C329.4,416.82,297,380.94,297,337.5s32.4-79.32,74.35-84.77c3.65-0.48,7.37-0.73,11.15-0.73c4.59,0,9.1,0.36,13.5,1.07 C436.81,259.53,468,294.87,468,337.5z"/>
		<polyline fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="342,315 382.5,355.5 495,243 	"/>
</g>
</svg></li>
        <li>Make sure no one is looking at your screen, or has access to your computer.</li>
        <li>Press “Reveal Private Key”</li>
        <li>Copy your DTWallet’s private key to your clipboard.</li>
      </ul>
    </div>
    <div
      class="overflow-y-scroll  text-left h-screen animated fadeInUp  shadow-inner max-w-md  p-8 bg-white md:rounded w-full md:h-auto md:shadow md:flex md:flex-row"
      v-show="currentStep === 2"
    >
      <ul
        class="list-decimal md:text-sm space-x-8 md:space-y-3 space-y-8 md:text-2xl overflow-ellipsis overflow-hidden"
      >
        <li class="ml-8"><svg class="inline" width="54px" height="54px" id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><title>testМонтажная область 6</title><path d="M20.24,49.27l29,17a1.5,1.5,0,0,0,1.52,0l29-17a1.5,1.5,0,0,0,.5-2.11l-29-45a1.56,1.56,0,0,0-2.52,0l-29,45a1.5,1.5,0,0,0,.5,2.11ZM51.5,62.38V42l18.17,5.35a1.5,1.5,0,1,0,.85-2.88l-19-5.6V8.09L76.89,47.47Zm-3-54.29V62.38L23.11,47.47Z"/><path d="M80.14,58a1.5,1.5,0,0,0-1.87-.33L50.09,73.51h-.18L21.73,57.69a1.5,1.5,0,0,0-1.92,2.23l29,37,.05.05.14.15.09.08.17.11.1.05.22.08.09,0a1.43,1.43,0,0,0,.65,0l.09,0,.22-.08.1-.05.17-.11.09-.08.14-.15.05-.05,29-37A1.5,1.5,0,0,0,80.14,58ZM48.5,76.16v15.5L26.81,64Zm3,15.5V76.16L73.19,64Z"/><path d="M44,41.16A1.5,1.5,0,0,0,42.16,40l-13,3A1.5,1.5,0,1,0,29.84,46l13-3A1.5,1.5,0,0,0,44,41.16Z"/></svg>First thing, you need an Ethereum wallet. Use any wallet of your choice. We recommend Metamask.io</li>
        <li>If it’s the first time setting up Metamask</li>
        <ul class="list-disc text-md px-10">
          <li>Open Metamask</li>
          <li>Click “Get Started”, and “Create Wallet”<svg xmlns="http://www.w3.org/2000/svg"  class="inline" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"  width="54px" height="54px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 10.001 10.001;" xml:space="preserve">
<circle style="fill:#FFDF47;" cx="255.997" cy="255.996" r="255.996"/>
<path style="fill:#FEC000;" d="M512,256.001c0-34.27-6.751-66.959-18.969-96.833L384.901,51.035l-68.626,16.666l-13.452-19.725  l-148.209,57.077h-39.64c-23.699,0-43.089,19.39-43.089,43.09v225.344c0,14.266,7.032,26.963,17.794,34.817l93.033,93.033  c23.22,6.927,47.816,10.665,73.288,10.665C397.385,512,512,397.385,512,256.001z"/>
<rect x="162.948" y="77.601" transform="matrix(-0.9718 0.236 -0.236 -0.9718 596.0664 229.996)" style="fill:#004DB1;" width="242.643" height="146.134"/>
<rect x="98.065" y="86.033" transform="matrix(-0.9332 0.3594 -0.3594 -0.9332 478.1513 230.3483)" style="fill:#0088FF;" width="239.198" height="147.174"/>
<polygon style="fill:#006EF5;" points="355.714,185.316 302.823,47.976 256,66.007 256,223.716 "/>
<path style="fill:#E67500;" d="M394.841,416.575H114.974c-23.699,0-43.09-19.39-43.09-43.09V148.141  c0-23.699,19.39-43.09,43.09-43.09h279.867c23.699,0,43.09,19.39,43.09,43.09v225.344  C437.931,397.184,418.54,416.575,394.841,416.575z"/>
<path style="fill:#C06200;" d="M394.841,105.053H256v311.522h138.841c23.699,0,43.09-19.39,43.09-43.09V148.141  C437.931,124.442,418.54,105.053,394.841,105.053z"/>
<path style="fill:#990011;" d="M321.064,210.97c-27.529,0-49.844,22.316-49.844,49.844c0,27.527,22.316,49.843,49.844,49.843  h125.308V210.97L321.064,210.97L321.064,210.97z"/>
<circle style="fill:#AEADB3;" cx="320.393" cy="260.813" r="29.372"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></li>
          <li>(dis)Agree to anonymized data collection</li>
          <li>Setup a password you’ll use to access your Metamask wallet</li>
          <li>you can skip the mnemonic verification, we won’t be using this address anyways</li>
        </ul>
        <li><svg xmlns="http://www.w3.org/2000/svg"  class="inline" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"  width="54px" height="54px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 10.001 10.001;" xml:space="preserve">
<circle style="fill:#FFDF47;" cx="255.997" cy="255.996" r="255.996"/>
<path style="fill:#FEC000;" d="M512,256.001c0-34.27-6.751-66.959-18.969-96.833L384.901,51.035l-68.626,16.666l-13.452-19.725  l-148.209,57.077h-39.64c-23.699,0-43.089,19.39-43.089,43.09v225.344c0,14.266,7.032,26.963,17.794,34.817l93.033,93.033  c23.22,6.927,47.816,10.665,73.288,10.665C397.385,512,512,397.385,512,256.001z"/>
<rect x="162.948" y="77.601" transform="matrix(-0.9718 0.236 -0.236 -0.9718 596.0664 229.996)" style="fill:#004DB1;" width="242.643" height="146.134"/>
<rect x="98.065" y="86.033" transform="matrix(-0.9332 0.3594 -0.3594 -0.9332 478.1513 230.3483)" style="fill:#0088FF;" width="239.198" height="147.174"/>
<polygon style="fill:#006EF5;" points="355.714,185.316 302.823,47.976 256,66.007 256,223.716 "/>
<path style="fill:#E67500;" d="M394.841,416.575H114.974c-23.699,0-43.09-19.39-43.09-43.09V148.141  c0-23.699,19.39-43.09,43.09-43.09h279.867c23.699,0,43.09,19.39,43.09,43.09v225.344  C437.931,397.184,418.54,416.575,394.841,416.575z"/>
<path style="fill:#C06200;" d="M394.841,105.053H256v311.522h138.841c23.699,0,43.09-19.39,43.09-43.09V148.141  C437.931,124.442,418.54,105.053,394.841,105.053z"/>
<path style="fill:#990011;" d="M321.064,210.97c-27.529,0-49.844,22.316-49.844,49.844c0,27.527,22.316,49.843,49.844,49.843  h125.308V210.97L321.064,210.97L321.064,210.97z"/>
<circle style="fill:#AEADB3;" cx="320.393" cy="260.813" r="29.372"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>Import your DTWallet private key generated in the previous step into Metamask.</li>
        <ul class="list-disc text-md px-10">
          <li>Click the circle icon at the top right corner of your MetaMask pop-up next to the network indicator.</li>
          <li>Select “Import Account” on the dropdown menu</li>
          <li>You will be directed to the Import page. Paste the DTWallet private key and click “Import”.</li>
        </ul>
        <li>You should be able to see the newly added account in the dropdown menu with an "Imported" tag next to the account.</li>
      </ul>
    </div>
    <div class="text-xl font-bold" v-show="currentStep === 3">
      <br />
    Success! you can now proceed to swap your DTX for DTC. You will only be able to use the wallet you just generated to conduct the swaps. In order to initiate a DTX to DTC swap please fund your newly generated Ethereum account with the DTX you wish to exchange. Make sure your Ethereum account holds enough ethers (ETH) to be able to pay for network transactions fees. You won’t be able to send DTX unless you have sufficient Gas. <br /><a href="https://ethereum.org/en/developers/docs/gas/"> Learn more about Gas here.</a>
 <br />
    </div>
    <div class="action-buttons mt-10">
      <button className="shadow-inner rounded-xl btn btn4" type="button" @click="backStep" v-show="currentStep > 1">
        Back
      </button>
      <button className="shadow-inner rounded-xl btn btn4" type="button" @click="nextStep" v-show="currentStep < 3">
        Next
      </button>
      <div className="my-7 ml-3">
      <router-link  to="/calculationB" v-show="currentStep === 3"
        >Done</router-link
      ></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwapAB',
  data: () => ({
    currentStep: 1
  }),
  methods: {
    backStep() {
      this.currentStep--;
    },
    nextStep() {
      this.currentStep++;
    },
    openstuff(){
      document.location='/calculationB'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol {
  list-style: none;
  counter-reset: my-awesome-counter;
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
}

</style>
