<template>
  <div class="home-wrapper fade-in">
    <div class="mx-2 flex flex-col items-center mt-10 md:mt-0 lg:mt-0 sm:mt-0 text-center bgimg bg-cover items-center content-center w-full h-full md:w-auto md:h-auto">
        <img class="my-10 mx-5 h-auto -mt-4 md:mt-0 w-full md:w-full md:h-screen sm:h-auto sm:w-auto lg:h-full" src="../../assets/iconHP.png" height="full" width="full" alt="logo" />
        <h1 className="text-3xl md:mr-0 mr-4">Welcometo the <span class="text-4xl font-bold">DTC/DTX Swapper</span> </h1>
    </div>

    <div class="action-buttons flex flex-col gap-4 items-center  md:flex-row scale-75 md:scale-100 transform">
      <router-link class="sm:h-auto sm:w-auto lg:h-screen home-button swap-a transform transition duration-500 hover:scale-110" to="/swap-a"></router-link>
      <router-link class="sm:h-auto sm:w-auto lg:h-screen home-button swap-b transform transition duration-500 hover:scale-110" to="/swap-b"></router-link>
    </div>        

  </div>
</template>

<script>
//import JJParallaxCard from 'jj-parallax-card'
export default {
  name: 'Home',
  components: {
    //JJParallaxCard,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.home-button{
  position: relative;
	-webkit-transition: 1.5s ease-in-out;
	transition: 2s ease-in-out;
	transform-style: preserve-3d;
}
.home-button:hover {
  scale: 125%;
}
h1::before {  
  transform: scaleX(0);
  transform-origin: bottom right;
}

h1:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

h1::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  inset: 0 0 0 0;
  background: hsl(200 100% 80%);
  z-index: -1;
  transition: transform .3s ease;
}

h1 {
  position: relative;
  font-size: 5rem;
}
.fade-in {
  animation: fadeIn ease 5s;
  -webkit-animation: fadeIn ease 5s;
  -moz-animation: fadeIn ease 10s;
  -o-animation: fadeIn ease 10s;
  -ms-animation: fadeIn ease 10s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@media (orientation: landscape) {
  body {
    grid-auto-flow: column;
  }
}
.dropdown:hover .dropdown-menu {
  display: block;
}


</style>
