import type { IUser } from '@/services/user'
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref<IUser>(null)

  function update(newUser: IUser) {
    user.value = newUser
  }

  return { user, update };
})
