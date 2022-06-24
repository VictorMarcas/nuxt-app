<template>
    <div>
        {{ user }}
    </div>
</template>


<script>
    export default {
        name: 'UserPage',
        middleware: 'auth'
    }
</script>