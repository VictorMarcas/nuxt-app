export const state = () => ({
  user: null,
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
}

export const actions = {
  async login({ commit }, { email, password }) {
    try {
      const { user, error } = await this.$supabase.auth.signIn({
        email,
        password,
      })
      window.console.log(user)

      if (error) throw error
      this.app.router.push('/')
      commit('setUser', user)
    } catch (error) {
      window.console.log(error)
    }
  },
  async register(_, { fullname, email, password }) {
    try {
      const { user, session, error } = await this.$supabase.auth.signUp(
        {
          email,
          password,
        },
        {
          data: {
            fullname,
          },
        }
      )

      if (error) throw error
      window.console.log(session, user)
    } catch (e) {
      window.console.log(e)
    }
  },
}
