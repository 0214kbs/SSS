import {create} from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create(((set) => ({
    isLogin: false,
    refreshToken: null,
    accessToken: null,
    setRefreshToken : (data:any) => set(() =>({refreshToken:data})),
    setAccessToken : (data:any) => set(() =>({accessToken:data})),
    login: () => set(() => ({ isLogin: true })),
    logout: () => set(() => ({ isLogin: false })),
  }))
)
// const useUserStore = create(
//   persist((set) => ({
//     isLogin: false,
//     refreshToken: null,
//     accessToken: null,
//     setRefreshToken : (data:any) => set(() =>({refreshToken:data})),
//     setAccessToken : (data:any) => set(() =>({accessToken:data})),
//     login: () => set(() => ({ isLogin: true })),
//     logout: () => set(() => ({ isLogin: false })),
//   }), {
//     name: 'userToken'
//   })
// )

export default useUserStore