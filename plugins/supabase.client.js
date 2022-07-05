import { createClient } from '@supabase/supabase-js'

export default function ({ app }, inject) {
    const { supabaseBaseUrl, supabaseAnonKey } = app.$config;
    const supabase = createClient(
        supabaseBaseUrl,
        supabaseAnonKey
    )
    inject('supabase', supabase)
}