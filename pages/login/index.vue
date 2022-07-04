<template>
  <div class="flex items-center justify-center w-full h-full gap-8">
    <div class="flex-1 max-w-md">
      <h1 class="text-3xl font-bold leading-tight font-montserrat-alt">
        Bienvenido,
      </h1>
      <p class="mt-2 text-sm leading-tight text-gray-500">
        Por favor accede a tu cuenta
      </p>
      <form @submit.prevent="handleSubmit">
        <fieldset class="py-10 space-y-6">
          <Input
            id="email"
            v-model="form.email"
            label="Correo eléctronico"
            type="email"
          />
          <div>
            <Input
              id="password"
              v-model="form.password"
              label="Contraseña"
              type="password"
            />
            <div class="mt-2 text-right">
              <NuxtLink
                to="/forgot-password"
                class="text-xs leading-tight text-gray-600 hover:text-indigo-500"
                >He olvidado la contraseña</NuxtLink
              >
            </div>
          </div>
          <div class="flex items-center flex-grow gap-6">
            <Button type="submit" class="w-full" color="primary"
              >Acceder</Button
            >
            <ButtonLink
              to="/crear-cuenta"
              border
              color="secondary"
              class="w-full"
              prefetch
              >Crear cuenta</ButtonLink
            >
          </div>
          <p class="pt-6 text-xs leading-relaxed text-gray-400">
            Si tienes clientes o varias aplicaciones que necesitan consumir
            nuestros servicios es.
          </p>
        </fieldset>
      </form>
    </div>
    <div class="pl-10">
      <nuxt-img
        format="webp"
        class="w-full max-w-none"
        width="448"
        height="448"
        src="/images/pages/undraw_access_account.png"
      />
    </div>
  </div>
</template>
<script>
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/button/Button.vue'
import ButtonLink from '@/components/ui/button/ButtonLink.vue'
export default {
  name: 'LoginPage',
  components: {
    Input,
    Button,
    ButtonLink,
  },
  layout: 'minimal',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  head() {
    return {
      title: 'Ingresar a mi cuenta',
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.form) /* eslint-disable-line no-console */
    },
  },
}
</script>
