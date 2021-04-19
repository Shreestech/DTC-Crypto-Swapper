<template>
<div className="overflow-x-hidden">
  <Navigation />
  <router-view />
  <Footer/>
</div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>
@font-face {
  font-family: "Nunito";
}

body {
  margin: 0;
}

.home-wrapper {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 800px;
  margin: 0 auto;
}
.home-wrapper {
  position: relative;
  padding: 10px;
  padding-top: 1rem;
  min-height: calc(100vh - 70px);
}

.home-wrapper > img {
  position: relative;
  max-width: 500px;
  z-index: -1;
}

.home-wrapper .calculation-tools {
  max-width: 400px;
}

.home-wrapper .calculation-tools,
.home-wrapper .action-buttons {
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  z-index: 1;
}
.home-wrapper .action-buttons a.home-button {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 410px;
  height:200px;
  border: none;
}

.home-wrapper .action-buttons a.home-button.swap-a {
  background-image: url("assets/iconButtonA.png");
}

.home-wrapper .action-buttons a.home-button.swap-b {
  background-image: url("assets/iconButtonB.png");
}

.home-wrapper .calculation-tools input,
.home-wrapper .calculation-tools button,
.home-wrapper .action-buttons a,
.home-wrapper .action-buttons button {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #E0E0E0;
  padding: 2rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.home-wrapper .calculation-tools input:focus,
.home-wrapper .calculation-tools button:focus,
.home-wrapper .action-buttons button:focus {
  outline: none;
}

.text-left {
  text-align: left;
  font-size: 25px;
}

.video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.ml-1 {
  left: 2;
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
