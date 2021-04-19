<template>
<div class="">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css">
<footer class="footer pt-10 sm:mt-10">
        <div class="px-20 mx-8 md:hidden block md:border-t-8 border-white mb-5 flex flex-col">
          <img src="@/assets/swapper-logo.png" className="mx-auto my-auto  " alt="DT Swapper">
        </div>
    <div class="max-w-6xl m-auto text-gray-800 flex flex-row  md:flex-row">
        <!-- Col-1 -->
                <router-link class="pr-42  md:block hidden" to="/">
                  <img src="@/assets/swapper-logo.png" className="md:h-36" alt="DT Swapper">
                </router-link>
    <div className="mt-5 md:mt-10 md:mx-auto flex flex-col md:flex-col md:text-center text-center">
        <div class="text-white w-full h-full overflow-y-scroll">© 2021 DT. All rights reserved</div>

        <div></div>
        <div class="flex pb-5 px-3 pt-5 my-4
             border-t-0 md:border-t-8 border-white border-opacity-50 text-gray-400 text-2xl md:text-2xl 
            flex-row md:flex-row max-w-6xl gap md:mx-5 self-center">
                <a href="#fb" class="transform transition duration-500 hover:scale-150 w-6 mx-5">
                    <i class="uil uil-facebook-f"></i>
                </a>
                <a href="#twitter" class="transform transition duration-500 hover:scale-150 w-6 mx-5">
                    <i class="uil uil-twitter-alt"></i>
                </a>
                <a href="#youtbe" class="transform transition duration-500 hover:scale-150 w-6 mx-5">
                    <i class="uil uil-youtube"></i>
                </a>
                <a href="#linkdin" class="transform transition duration-500 hover:scale-150 w-6 mx-5">
                    <i class="uil uil-linkedin"></i>
                </a>
                <a href="#instagram" class="transform transition duration-500 hover:scale-150 w-6 mx-5">
                    <i class="uil uil-instagram"></i>
                </a>
        </div>
    </div>
    </div>

</footer>
</div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style>
.footer {
    background-color: #4e51b0;
}
.cool{
    height:0px;
    width:100px;
    border-top:auto solid #ffffff;
    border-bottom:auto solid #ffffff;
    border-left:auto solid transparent;
    border-right:auto solid transparent;
}
</style>