<template>
    <div class="space-y-4 w-full mx-auto max-w-xs text-center">
        <h1 class="text-2xl font-bold">{{ error.statusCode }} Error</h1>
        <p class="text-sm leading-relaxed">Al parecer te encuentras perdido, <br> te ayudo con eso</p>
        <NuxtLink to="/" class="py-4 leading-4 px-6 rounded bg-indigo-500 hover:bg-indigo-500/80 text-sm flex w-full justify-center items-center text-white font-bold text-center">Ir a la página de inicio</NuxtLink>
    </div>
</template>

<script>
     export default {
        name: 'ErrorPage',
        layout: 'ErrorLayout',
        props: {
            error: {
                type: Object,
                default: () => {}
            }
        }
     }
</script>