<template>
  <div class="block p-6 max-w-sm mx-auto">
    <img
        src="../../../assets/images/masks.svg"
        class="block w-[238px] md:w-[277px] mx-auto"
        alt="masks"
    />

    <p class="font-poppins not-italic text-4xl leading-[55px] font-black text-white text-center tracking-[0.065em]">ひさしぶり!</p>
    <p class="font-roboto italic font-normal tracking-[0.065em] text-white text-center mb-6">¡Hola, te extrañamos!</p>
    <vee-form ref="formLogin" v-slot="{handleSubmit}" as="div">
      <form @submit="handleSubmit">
        <div class="form-group mb-5">
          <label
              for="inputEmail"
              class="form-label inline-block mb-1 font-poppins text-sm"
          >
            Email
          </label>
          <vee-field name="Email" rules="required|email" v-slot="{ errorMessage }" v-model="model.email">
            <input
                v-model="model.email"
                type="email"
                class="base-input"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="Email"
            />
            <p
                v-if="errorMessage"
                class="font-poppins text-sm text-right text-error-color tracking-tight mt-1 mr-2"
            >
              {{errorMessage}}
            </p>
          </vee-field>
        </div>
        <div class="form-group mb-6">
          <label
              for="inputPassword"
              class="form-label inline-block mb-1 font-poppins text-sm"
          >
            Contraseña
          </label>
          <vee-field name="Password" rules="required" v-slot="{ errorMessage }" v-model="model.password">
            <input
                v-model="model.password"
                type="password"
                class="base-input"
                id="inputPassword"
                placeholder="Contraseña"
            />
            <p
                v-if="errorMessage"
                class="font-poppins text-sm text-right text-error-color tracking-tight mt-1 mr-2"
            >
              {{errorMessage}}
            </p>
          </vee-field>
        </div>
        <div class="flex justify-end items-center mb-6">
          <a
              href="#!"
              class="font-poppins text-sm text-second-color hover:text-first-color focus:text-first-color transition duration-200 ease-in-out"
          >
            ¿Olvido la contraseña?
          </a>
        </div>
      </form>
      <button @click="login" class="primary-button">
        Acceder
      </button>
    </vee-form>
    <social-section/>
  </div>
  <text-register-login/>
</template>

<script>
import TextRegisterLogin from '../components/TextRegisterLogin.vue'
import SocialSection from '../components/SocialSection.vue'
import {ref, reactive} from 'vue'
export default {
  name: 'Login',
  components: {
    SocialSection,
    TextRegisterLogin
  },
  setup() {
    const formLogin = ref(null)
    const model = reactive({
      email: null,
      password: null
    })

    const login = () => {
      console.log('values', model)
      formLogin.value.validate().then(result => {
        console.log('result', result)
        if (result.valid) {
          console.log('pasaaaa')
        }
        else {
          console.log('noooo pasaaaa')
        }
      })
    }

    return {
      model,
      login,
      formLogin
    }
  }
}
</script>
