import { createClient } from '@supabase/supabase-js'

export default function ({ app }, inject) {
  const { supabaseBaseUrl, supabaseAnonKey } = app.$config
  const supabase = createClient(supabaseBaseUrl, supabaseAnonKey)
  window.console.log(supabase)
  inject('supabase', supabase)
  const { auth } = supabase
  inject('supaAuth', auth)
  const { localStorage } = auth
  inject('supaStorage', localStorage)
}
