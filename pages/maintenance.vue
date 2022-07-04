<template>
  <div
    class="flex flex-col items-center justify-center h-full gap-12 p-8 lg:flex-row"
  >
    <div class="text-center lg:text-left">
      <h1 class="mb-4 text-3xl font-bold text-gray-900 font-montserrat-alt">
        This page is in maintenance mode
      </h1>
      <p class="text-sm leading-relaxed text-gray-600">
        We have done all the thecnical improvements and will back very soon.
      </p>
      <p class="text-sm leading-relaxed text-gray-600">
        Thanks you for you patience.
      </p>
    </div>
    <div>
      <nuxt-img
        class="w-full max-w-none"
        format="webp"
        width="448"
        provider="static"
        quality="100"
        src="/images/pages/undraw_maintenance.png"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaintenancePage',
  layout: 'maintenance',
}
</script>
