import { type PassportStatic } from 'passport'
import { type PrismaClient } from '@prisma/client'

import DiscordStrategy from 'passport-discord'
import GithubStrategy from 'passport-github'

const discordScopes = ['email', 'identify']

export function register(passport: PassportStatic, prisma: PrismaClient): void {
  passport.serializeUser(function (user, done) {
    done(null, user)
  })

  passport.deserializeUser(function (user, done) {
    done(null, user as string)
  })

  passport.use(
    new GithubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        callbackURL: '/api/auth/callback/github'
      },
      function verify(accessToken, refreshToken, profile, cb) {
        prisma.externalCredential
          .findUnique({
            where: { externalId: profile.id }
          })
          .then((cred) => {
            if (cred == null) {
              throw Error()
            }

            // credential is found, meaning a user connected to it exists
            prisma.user
              .findUnique({ where: { id: cred.userId } })
              .then((user) => {
                cb(null, user as Express.User, undefined)
              })
              .catch((err) => {
                cb(err, undefined, undefined)
              })
          })
          .catch(async (_) => {
            // credential isn't found, meaning user doesn't yet exist
            const user = await prisma.user.create({
              data: {
                username: profile.username as string,
                realname: profile.displayName
              }
            })

            await prisma.externalCredential.create({
              data: {
                provider: profile.provider,
                externalId: profile.id,
                userId: user.id
              }
            })

            cb(null, user, undefined)
          })
          .catch((err) => {
            // error
            cb(err, undefined, undefined)
          })
      }
    )
  )

  passport.use(
    new DiscordStrategy(
      {
        clientID: process.env.DISCORD_CLIENT_ID as string,
        clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        scope: discordScopes,
        callbackURL: '/api/auth/callback/discord'
      },
      function verify(accessToken, refreshToken, profile, cb) {
        prisma.externalCredential
          .findUnique({
            where: { externalId: profile.id }
          })
          .then((cred) => {
            if (cred == null) {
              throw Error()
            }

            // credential is found, meaning a user connected to it exists
            prisma.user
              .findUnique({ where: { id: cred.userId } })
              .then((user) => {
                cb(null, user as Express.User, undefined)
              })
              .catch((err) => {
                cb(err, undefined, undefined)
              })
          })
          .catch(async (_) => {
            // credential isn't found, meaning user doesn't yet exist
            const user = await prisma.user.create({
              data: {
                username: profile.username,
                email: profile.email
              }
            })

            await prisma.externalCredential.create({
              data: {
                provider: profile.provider,
                externalId: profile.id,
                userId: user.id
              }
            })

            cb(null, user, undefined)
          })
          .catch((err) => {
            // error
            cb(err, undefined, undefined)
          })
      }
    )
  )
}
