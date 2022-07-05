export const state = () => ({
    user: null
})

export const mutations = {
    setUser(state, user) {
        state.user = user
    }
}

export const actions = {
    async login({ commit }, { email, password }) {
        window.console.log('login', email, password)
        try {
            const { user, session, error } = await this.$supabase.auth.signIn({
                email,
                password
            })

            if (error) throw error

            commit('setUser', user, session)
        } catch (error) {
            window.console.log(error)
        }
    },
    async register({ commit }, { fullname, email, password }) {
        try {
            const { user, session, error } = await this.$supabase.auth.signUp(
                {
                    email, 
                    password,
                },
                {
                    data: {
                        fullname
                    }
                }
            )

            if (error) throw error
            window.console.log(session, user)
        }
        catch(e) {
            window.console.log(e)
        }
    }
}