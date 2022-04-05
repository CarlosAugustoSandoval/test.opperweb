<template>
  <div class="block p-6 max-w-sm mx-auto">
    <div class="items-stretch grid grid-flow-col">
      <div class="justify-end self-end">
        <img
            src="../../../assets/images/mask.svg"
            class="block w-[87px] h-[89px] md:w-[145px] md:h-[149px] ml-auto md:mx-auto"
            alt="masks"
        />
      </div>
      <div class="self-center mt-8">
        <p class="font-poppins not-italic text-4xl leading-[55px] font-black text-white text-left md:text-center tracking-[0.065em]">ようこそ!</p>
        <p class="font-roboto italic font-normal tracking-[0.065em] text-white text-left md:text-center">Bienvenidos(a)!</p>
      </div>
    </div>
    <vee-form ref="formRegister" v-slot="{handleSubmit}" as="div">
      <form @submit="handleSubmit">
        <div class="flex justify-between mb-4 mt-6">
          <vee-field name="Tipo de persona" rules="required" v-slot="{ errorMessage }" v-model="model.type_user_id">
            <label
                class="form-label inline-block font-poppins text-sm"
            >
              Tipo de persona
            </label>
            <div class="form-check form-check-inline">
              <input v-model="model.type_user_id" class="primary-radio" type="radio" name="inlineRadioOptions" id="inlineRadio10" :value="2">
              <label class="form-check-label inline-block font-poppins text-sm" for="inlineRadio10">Natural</label>
            </div>
            <div class="form-check form-check-inline">
              <input v-model="model.type_user_id" class="primary-radio" type="radio" name="inlineRadioOptions" id="inlineRadio20" :value="1">
              <label class="form-check-label inline-block font-poppins text-sm" for="inlineRadio20">Jurídica</label>
            </div>
          </vee-field>
        </div>

        <template v-if="model.type_user_id === 2">
          <div class="form-group mb-4">
            <label
                for="inputName"
                class="form-label inline-block mb-1 font-poppins text-sm"
            >
              Nombre
            </label>
            <vee-field name="Nombre" rules="required" v-slot="{ errorMessage }" v-model="model.name">
              <input
                  v-model="model.name"
                  type="text"
                  class="base-input"
                  id="inputName"
                  placeholder="Nombre"
              />
              <p
                  v-if="errorMessage"
                  class="font-poppins text-sm text-right text-error-color tracking-tight mt-1 mr-2"
              >
                {{errorMessage}}
              </p>
            </vee-field>
          </div>
          <div class="form-group mb-4">
            <label
                for="inputLastName"
                class="form-label inline-block mb-1 font-poppins text-sm"
            >
              Apellido
            </label>
            <vee-field name="Apellido" rules="required" v-slot="{ errorMessage }" v-model="model.lastname">
              <input
                  v-model="model.lastname"
                  type="text"
                  class="base-input"
                  id="inputLastName"
                  placeholder="Apellido"
              />
              <p
                  v-if="errorMessage"
                  class="font-poppins text-sm text-right text-error-color tracking-tight mt-1 mr-2"
              >
                {{errorMessage}}
              </p>
            </vee-field>
          </div>
        </template>
        <template v-else>
          <div class="form-group mb-4">
            <label
                for="inputRSocial"
                class="form-label inline-block mb-1 font-poppins text-sm"
            >
              Razón social
            </label>
            <vee-field name="Razón social" rules="required" v-slot="{ errorMessage }" v-model="model.razon_social">
              <input
                  v-model="model.razon_social"
                  type="text"
                  class="base-input"
                  id="inputRSocial"
                  placeholder="Razón social"
              />
              <p
                  v-if="errorMessage"
                  class="font-poppins text-sm text-right text-error-color tracking-tight mt-1 mr-2"
              >
                {{errorMessage}}
              </p>
            </vee-field>
          </div>
          <div class="form-group mb-4">
            <label
                for="inputNIT"
                class="form-label inline-block mb-1 font-poppins text-sm"
            >
              NIT
            </label>
            <vee-field name="NIT" rules="required" v-slot="{ errorMessage }" v-model="model.NIT">
              <input
                  v-model="model.NIT"
                  type="text"
                  class="base-input"
                  id="inputNIT"
                  placeholder="NIT"
              />
              <p
                  v-if="errorMessage"
                  class="font-poppins text-sm text-right text-error-color tracking-tight mt-1 mr-2"
              >
                {{errorMessage}}
              </p>
            </vee-field>
          </div>
        </template>
        <div class="form-group mb-4">
          <label
              for="inputTelephone"
              class="form-label inline-block mb-1 font-poppins text-sm"
          >
            Teléfono
          </label>
          <vee-field name="Teléfono" rules="required" v-slot="{ errorMessage }" v-model="model.telephone">
            <input
                v-model="model.telephone"
                type="tel"
                class="base-input"
                id="inputTelephone"
                placeholder="Teléfono"
            />
            <p
                v-if="errorMessage"
                class="font-poppins text-sm text-right text-error-color tracking-tight mt-1 mr-2"
            >
              {{errorMessage}}
            </p>
          </vee-field>
        </div>
        <div v-if="model.type_user_id === 2" class="form-group mb-4">
          <label
              for="inputIdenty"
              class="form-label inline-block mb-1 font-poppins text-sm"
          >
            Número de identificación
          </label>
          <vee-field name="Número de identificación" rules="required" v-slot="{ errorMessage }" v-model="model.identy_document">
            <input
                v-model="model.identy_document"
                type="number"
                class="base-input"
                id="inputIdenty"
                placeholder="Número de identificación"
            />
            <p
                v-if="errorMessage"
                class="font-poppins text-sm text-right text-error-color tracking-tight mt-1 mr-2"
            >
              {{errorMessage}}
            </p>
          </vee-field>
        </div>
        <div class="form-group mb-4">
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
        <div class="form-group mb-4">
          <label
              for="inputPassword"
              class="form-label inline-block mb-1 font-poppins text-sm"
          >
            Contraseña
          </label>
          <vee-field name="Contraseña" rules="required" v-slot="{ errorMessage }" v-model="model.password">
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
        <div class="form-group mb-8">
          <label
              for="inputConfirmation"
              class="form-label inline-block mb-1 font-poppins text-sm"
          >
            Confirmar contraseña
          </label>
          <vee-field name="Confirmar contraseña" rules="required|confirmed:@Contraseña" v-slot="{ errorMessage }" v-model="model.password_confirmation">
            <input
                v-model="model.password_confirmation"
                type="password"
                class="base-input"
                id="inputConfirmation"
                placeholder="Confirmar contraseña"
            />
            <p
                v-if="errorMessage"
                class="font-poppins text-sm text-right text-error-color tracking-tight mt-1 mr-2"
            >
              {{errorMessage}}
            </p>
          </vee-field>
        </div>
      </form>
      <button @click="register" class="primary-button">
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
import UserRegister from '../model/UserRegister'
import {ref, reactive} from 'vue'
export default {
  name: 'Register',
  components: {
    SocialSection,
    TextRegisterLogin
  },
  setup() {
    const formRegister = ref(null)
    const model = ref(UserRegister.create())

    const register = () => {
      formRegister.value.validate().then(result => {
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
      register,
      formRegister
    }
  }
}
</script>
