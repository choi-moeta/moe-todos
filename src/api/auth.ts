import { supabase } from './supabase'

export function isLoggedIn() {
  console.log(supabase.auth.user())
  return !!supabase.auth.user()
}

export async function authDiscord() {
  const { user, error } = await supabase.auth.signIn({
    provider: 'discord',
  }, {
    redirectTo: 'http://localhost:3333',
  })

  return user
}
