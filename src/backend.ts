import PocketBase from 'pocketbase'
import { type TypedPocketBase, type UsersResponse } from './pocketbase-types.js'
import { ref } from 'vue'
console.log('varbialbe envi', import.meta.env.VITE_URL_POCKETBASE)

// export const pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase
export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

export function logout() {
  pb.authStore.clear()
  //location.reload()
}

export async function loginWithGitHub() {
  const authData = await pb.collection('users').authWithOAuth2({ provider: 'github' })
  console.log('loginWithGitHub authData', authData)
}

export async function loginWithGoogle() {
  const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' })
  console.log('logWithGoogle authData', authData)
}

export const user = ref<UsersResponse | null>(null)
pb.authStore.onChange((token, model) => {
  user.value = model as UsersResponse
}, true)
