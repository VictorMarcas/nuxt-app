<template>
    <div class="mx-auto max-w-xs w-full">
        <form @submit.prevent="handleSubmit">
            <fieldset class="space-y-4">
                <div class="space-y-2">
                    <label for="fullname" class="block text-sm leading-tight">Nombres y apellidos</label>
                    <input v-model="form.fullname" type="text" name="fullname" class="w-full py-3 leading-4 px-5 rounded focus:outline-none"  />
                </div>
                <div class="space-y-2">
                    <label for="email" class="block text-sm leading-tight">Email</label>
                    <input v-model="form.email" type="email" name="email" class="w-full py-3 leading-4 px-5 rounded focus:outline-none"  />
                </div>
                <div class="space-y-2">
                    <label for="password" class="block text-sm leading-tight">Contraseña</label>
                    <input v-model="form.password" type="password" name="password" class="w-full py-3 leading-4 px-5 rounded focus:outline-none"  />
                </div>
                <div class="space-y-3">
                    <button type="submit" class="py-4 leading-4 px-6 rounded bg-indigo-500 hover:bg-indigo-500/80 text-sm flex w-full justify-center items-center text-white font-bold text-center">Sign in</button>
                    <div class="text-center leading-4 text-sm text-gray-400">or</div>
                    <NuxtLink to="/login" prefecth class="py-4 leading-4 px-6 rounded border border-gray-400 hover:border-gray-500/80 text-sm flex w-full justify-center items-center text-gray-500 font-bold text-center">
                        Login in
                    </NuxtLink>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'RegisterPage',
        layout: 'minimal',
        data() {
            return {
                form: {
                    fullname: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            handleSubmit(e) {
                console.log(this.form); /* eslint-disable-line no-console */
            }
        }
    }
</script>