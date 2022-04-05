<template>
  <div class="grid grid-cols-1 grid-rows-1 sm:grid-cols-1 md:grid-cols-2 h-full">
    <div class="h-full bg-gradient-to-b from-first-color md:bg-black md:from-black overflow-y-auto">
      <div class="mx-5 mt-5 hidden md:block ">
        <div class="font-roboto text-[22px] tracking-[0.065em] font-black leading-[26px]">
          <img
              src="../../../assets/images/logo.svg"
              class="w-[46px] h-[46px] inline mr-3.5"
              alt="logo"
          />
          <span>anime</span><span class="text-first-color">yabu.</span>
        </div>
      </div>
      <slot/>
    </div>
    <div class="text-center bg-third-color hidden md:block h-full" style="text-align: -webkit-center;">
      <div
          id="carouselExampleCaptions"
          class="carousel slide relative h-full"
          data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
          ></button>
          <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
          ></button>
          <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
                src="../../../assets/images/animeSlider/anime1.svg"
                class="block w-full scale-[0.93] pl-16 pt-28 mb-40 max-w-[720px]"
                alt="anime 1"
            />
            <div class="carousel-caption hidden md:block absolute text-center">
              <div class="font-roboto text-5xl lg:text-6xl xl:text-7xl tracking-[0.065em] font-bold"
                   style="line-height: 94px">
                <span>anime</span><span class="text-first-color">yabu.</span>
              </div>
              <p class="font-roboto font-normal">Ver anime en línea en HD, subtitulado o doblado,</p>
              <p class="font-roboto font-normal">en tu celular o computadora.</p>
              <p class="font-roboto font-normal">¡Animeyabu, tu portal de anime en línea!</p>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
                src="../../../assets/images/animeSlider/anime2.svg"
                class="block w-[82%] scale-[0.66] mb-20 max-w-[600px]"
                alt="anime 2"
            />
            <div class="carousel-caption hidden md:block absolute text-center">
              <div class="font-roboto text-5xl lg:text-6xl xl:text-7xl tracking-[0.065em] font-bold"
                   style="line-height: 94px">
                <span>anime</span><span class="text-first-color">Kyojuro.</span>
              </div>
              <p class="font-roboto font-normal">Ver anime en línea en HD, subtitulado o doblado,</p>
              <p class="font-roboto font-normal">en tu celular o computadora.</p>
              <p class="font-roboto font-normal">¡Animeyabu, tu portal de anime en línea!</p>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
                src="../../../assets/images/animeSlider/anime3.svg"
                class="block w-[82%] scale-[0.66] mb-20 max-w-[600px]"
                alt="anime 3"
            />
            <div class="carousel-caption hidden md:block absolute text-center">
              <div class="font-roboto text-5xl lg:text-6xl xl:text-7xl tracking-[0.065em] font-bold"
                   style="line-height: 94px">
                <span>anime</span><span class="text-first-color">Inosuke.</span>
              </div>
              <p class="font-roboto font-normal">Ver anime en línea en HD, subtitulado o doblado,</p>
              <p class="font-roboto font-normal">en tu celular o computadora.</p>
              <p class="font-roboto font-normal">¡Animeyabu, tu portal de anime en línea!</p>
            </div>
          </div>
          <div class="mx-4 my-12 lg:mx-12">
            <div
                class="w-[320px] h-[320px] lg:w-[460px] lg:h-[460px] lg:w-[548px] lg:h-[548px] rounded-full bg-second-color"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>
