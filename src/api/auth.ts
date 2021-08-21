import { ref } from 'vue'
import { supabase } from './supabase'
import { Provider } from './types'

export function getUser() {
  return supabase.auth.user()
}

export function isLoggedIn() {
  return !!supabase.auth.user()
}

const user = createUser()

function createUser() {
  const u = ref(getUser())

  supabase.auth.onAuthStateChange((event, session) => {
    if (session && session.user)
      u.value = session.user
    else
      u.value = null
  })

  return u
}

export function useUser() {
  return user
}

export function useLoggedIn() {
  return computed(() => !!user.value)
}

export async function logOut() {
  await supabase.auth.signOut()
}

export async function logInWith(provider: Provider) {
  const { user } = await supabase.auth.signIn({
    provider,
  }, {
    redirectTo: `${location.origin}/auth/done`,
  })

  return user
}
