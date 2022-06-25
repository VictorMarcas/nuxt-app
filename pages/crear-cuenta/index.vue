<template>
  <div class="flex items-center justify-center w-full h-full gap-8">
    <div class="flex-1 max-w-md">
      <h1 class="text-3xl font-bold leading-tight font-montserrat-alt">Crear cuenta,</h1>
      <p class="mt-2 text-sm leading-tight text-gray-500">Registrate y comienza en minutos</p>
      <form @submit.prevent="handleSubmit">
        <fieldset class="py-10 space-y-6">
          <Input id="fullname" v-model="form.fullname" label="Nombres completos" type="text"  />
          <Input id="email" v-model="form.email" label="Correo eléctronico" type="email"  />
          <Input id="password" v-model="form.password" label="Contraseña" type="password" />
          <div class="flex items-center flex-grow gap-6">
            <Button type="submit" class="w-full" color="primary">Crear cuenta</Button>
            <ButtonLink to="/login" border color="secondary" class="w-full" prefetch>Acceder</ButtonLink>
          </div>
          <p class="pt-6 text-xs leading-relaxed text-gray-400">Si tienes clientes o varias aplicaciones que necesitan consumir nuestros servicios es.</p>
        </fieldset>
      </form>
    </div>
    <div class="pl-10">
      <nuxt-img format="webp" class="w-full max-w-none" width="448" height="448" src="/images/pages/undraw_register_account.png" />
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
      ButtonLink
    },
    layout: 'minimal',
    data() {
      return {
        form: {
          fullname:'',
          email:'',
          password:''
        }
      }
    },
    methods: {
      handleSubmit() {
        console.log(this.form) /* eslint-disable-line no-console */
      }
    }
  }
</script>

