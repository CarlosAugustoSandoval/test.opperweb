<template>
  <div id="linex" class="justify-between text-center align-middle font-poppins font-normal text-sm mt-11 mb-5">
    <div class="linex1"/>
    <span class="hidden md:block">Regístrate también con</span>
    <span class="block md:hidden">Logueate con RRSS</span>
    <div class="linex2"/>
  </div>
  <div class="flex justify-around items-center mb-6 px-4">
    <social-button social-network="instagram"/>
    <social-button social-network="twitter"/>
    <social-button social-network="facebook"/>
  </div>
</template>

<script>
import SocialButton from './SocialButton.vue'
export default {
  name: 'SocialSection',
  components: {
    SocialButton
  }
}
</script>

<style scoped>
#linex {
  text-align: center;
  position:relative;
}

.linex1::after  {
  content: '';
  position: absolute;
  width:20%;
  left:0px;
  top:50%;
  border: 1px solid #FFFFFF;
  background: white;
  z-index:50;
}

.linex2::after  {
  content: '';
  position: absolute;
  width:20%;
  right:0px;
  top:50%;
  border: 1px solid #FFFFFF;
  background: white;
  z-index:50;
}
</style>