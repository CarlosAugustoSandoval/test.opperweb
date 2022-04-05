import { defineRule, Form, Field, ErrorMessage } from 'vee-validate'
import { required, email, confirmed } from '@vee-validate/rules'
defineRule('required', required)
defineRule('email', email)
defineRule('confirmed', confirmed)

const installComponents = (app) => {
    app.component('vee-form', Form)
    app.component('vee-field', Field)
    app.component('vee-error', ErrorMessage)
}

export default installComponents