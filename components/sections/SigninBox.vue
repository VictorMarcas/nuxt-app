<template>
  <div class="max-w-full p-10 bg-white w-96 py-14">
    <form @submit.prevent="handleSubmit">
      <fieldset class="space-y-6">
        <div class="relative">
          <Input
            id="fullname"
            v-model="form.fullname"
            label="Nombres completos"
            name="fullname"
            type="text"
          />
        </div>
        <div class="relative">
          <Input
            id="email"
            v-model="form.email"
            label="Correo electrónico"
            name="email"
            type="email"
          />
        </div>
        <div class="relative">
          <Input
            id="password"
            v-model="form.password"
            label="Contraseña"
            name="password"
            type="password"
          />
        </div>
        <div class="space-y-5">
          <Button type="submit" color="primary" size="sm" class="w-full"
            >Registar cuenta</Button
          >
          <div
            class="relative text-center after:[content:''] after:h-px after:w-full after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:bg-gray-200 after:block"
          >
            <span
              class="inline-block px-4 text-xs text-gray-400 bg-white relative z-[2]"
              >¿Ya tienes una cuenta?</span
            >
          </div>
          <ButtonLink
            to="/login"
            color="primary"
            border
            size="sm"
            class="w-full"
            >Iniciar sesión</ButtonLink
          >
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import Button from '@/components/ui/button/Button.vue'
import ButtonLink from '@/components/ui/button/ButtonLink.vue'
import Input from '@/components/ui/Input.vue'
export default {
  name: 'SigninBox',
  components: {
    Button,
    ButtonLink,
    Input,
  },
  data() {
    return {
      form: {
        fullname: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      alert(this.form)
    },
  },
}
</script>
