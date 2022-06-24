<template>
    <header>
        <div class="container mx-auto">
            <div class="flex items-center py-8">
                <NuxtLink to="/" class="mr-auto">
                    <span class="font-bold text-base leading-tight">W.Shop</span>
                </NuxtLink>
                <Navigation />
                <div class="ml-auto">
                    <NuxtLink to="/login" class="inline-flex items-center justify-center space-x-2 text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span class="text-sm">Login in</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import Navigation from '@/components/generic/Navigation.vue'
    export default {
        name: 'Header',
        components: {
            Navigation
        }
    }
</script>