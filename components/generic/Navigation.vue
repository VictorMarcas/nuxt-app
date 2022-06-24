<template>
    <nav class="space-x-8 mx-auto text-center">
        <NuxtLink to="/" class="text-sm text-gray-800">Home</NuxtLink>
        <NuxtLink to="/products" class="text-sm text-gray-800">Products</NuxtLink>
        <NuxtLink to="/contact" class="text-sm text-gray-800">Contact</NuxtLink>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>