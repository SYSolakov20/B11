import { type Express } from 'express'
import { PassportStatic } from 'passport'

import DiscordStrategy from 'passport-discord'
import GithubStrategy from 'passport-github'

import { PrismaClient } from '@prisma/client'

const discordScopes = ['email', 'identify']

export function register (passport: PassportStatic, prisma: PrismaClient): void {
  // TODO: finish implementing verify callbacks
  
  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string
      },
      function (accessToken, refreshToken, profile, done) {}
    )
  )

  passport.use(
    new DiscordStrategy(
      {
        clientID: process.env.DISCORD_CLIENT_ID as string,
        clientSecret: process.env.DISCORD_CLIENT_SECRET as string
      },
      function (accessToken, refreshToken, profile, cb) {}
    )
  )
}
