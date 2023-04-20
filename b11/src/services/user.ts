const authBaseUrl = 'http://localhost:8080/api/auth'

export interface IUser {
  id: number
  email: string
  username: string
  realname: string
}

export interface IExternalCredential {
  id: number
  provider?: string
  externalId: string
  userId: number
}

enum LoginProvider {
  LOCAL,
  EXTERNAL
}

export interface IExternalLoginInfo {
  type: LoginProvider.EXTERNAL
  provider: 'github' | 'discord'
}

// not yet implemented on backend
export interface IInternalLoginInfo {
  type: LoginProvider.LOCAL
  email: string
  username: string
  realname: string
}

export type ILoginInfo = IExternalLoginInfo | IInternalLoginInfo

export default class UserService {
  private static async fetchApi(url: string, options?: RequestInit) {
    return await fetch(authBaseUrl + url, options)
  }

  static async login(data: ILoginInfo): Promise<IUser> {
    switch (data.type) {
      case LoginProvider.LOCAL:
        throw new Error('not yet implemented')
      case LoginProvider.EXTERNAL:
        return await fetch('/auth/login/' + data.provider).then(async (value) => {
          if (!(await value.json()).error) {
            return await value.json()
          } else throw new Error('server error or user not found')
        })
    }
  }
}
