<template>
  <nav class="space-x-12">
    <NuxtLink to="/productos" class="text-sm text-gray-800">Productos</NuxtLink>
    <NuxtLink to="/precios" class="text-sm text-gray-800">Precios</NuxtLink>
    <NuxtLink to="/documentacion" class="text-sm text-gray-800"
      >Documentación</NuxtLink
    >
    <NuxtLink to="/soporte" class="text-sm text-gray-800">Soporte</NuxtLink>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>
