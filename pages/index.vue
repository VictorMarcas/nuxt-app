<template>
  <div class="container mx-auto">
    <div aria-label="hero" class="flex items-center px-12">
      <div class="mr-auto">
        <div class="w-full max-w-sm">
          <h1
            class="text-6xl font-bold leading-none text-gray-800 font-montserrat-alt"
          >
            <span class="text-2xl text-gray-400">Data que enriquese</span>
            <br />
            tu negocio
          </h1>
          <p class="mt-12 text-base font-light leading-loose text-gray-500">
            Hacemos que la validación de datos sea fácil y accesible para todos,
            para que puedas asegurar tus transacciones y agregar valor a tu
            negocio.
          </p>
        </div>
      </div>
      <div>
        <SigninBox></SigninBox>
      </div>
    </div>
  </div>
</template>

<script>
import SigninBox from '@/components/sections/SignInBox.vue'
export default {
  name: 'IndexPage',
  components: {
    SigninBox,
  },
  layout: 'DefaultLayout',
}
</script>
