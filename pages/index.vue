<template>
  <div>
    <section aria-label="hero" class="bg-gray-100">
      <div class="container flex items-center px-12 mx-auto">
        <div class="mr-auto">
          <div class="w-full max-w-sm">
            <h1
              class="text-6xl font-bold leading-none text-gray-800 font-montserrat-alt"
            >
              <span class="block text-2xl text-gray-400">Data que enriquese</span>
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
    </section>
    <section class="bg-white py-28">
      <div class="container flex justify-between gap-8 px-12 mx-auto">
        <div class="max-w-md">
          <h2 class="text-4xl font-bold leading-none text-gray-800 font-montserrat-alt"><span class="block text-lg text-gray-400">Nuestros</span>Productos</h2>
          <p class="mt-10 text-sm font-light leading-loose text-gray-500">
            Hacemos que la validación de datos sea fácil y accesible para todos,
            para que puedas asegurar tus transacciones y agregar valor a tu
            negocio.
          </p>
        </div>
        <div class="grid max-w-2xl grid-cols-2 gap-8">
          <article>
            <h3 class="text-sm font-bold leading-tight text-gray-800">Identidad personas y empresas</h3>
            <p class="mt-3 text-xs leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit varius magna integer, habitant curae tristique euismod fringilla mi ornare conubia ac litora</p>
          </article>
          <article>
            <h3 class="text-sm font-bold leading-tight text-gray-800">Identidad personas y empresas</h3>
            <p class="mt-3 text-xs leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit varius magna integer, habitant curae tristique euismod fringilla mi ornare conubia ac litora</p>
          </article>
          <article>
            <h3 class="text-sm font-bold leading-tight text-gray-800">Identidad personas y empresas</h3>
            <p class="mt-3 text-xs leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit varius magna integer, habitant curae tristique euismod fringilla mi ornare conubia ac litora</p>
          </article>
          <article>
            <h3 class="text-sm font-bold leading-tight text-gray-800">Identidad personas y empresas</h3>
            <p class="mt-3 text-xs leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipiscing elit varius magna integer, habitant curae tristique euismod fringilla mi ornare conubia ac litora</p>
          </article>
        </div>
      </div>
    </section>
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
