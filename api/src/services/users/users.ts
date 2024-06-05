import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { validate, validateWith } from '@redwoodjs/api'
import { ForbiddenError, UserInputError } from '@redwoodjs/graphql-server'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const verifyUser: MutationResolvers['verifyUser'] = async ({
  token,
}) => {
  validate(token, 'Token', {
    length: {
      equal: 6,
      message: 'Invalid token length',
    },
    presence: { message: 'Token must not be empty' },
  })
  const vModel = await db.verificationToken.findFirst({
    where: {
      token,
    },
  })
  await validateWith(async () => {
    if (!vModel) throw new UserInputError('Invalid Token')
    if (vModel.expires < new Date()) throw new ForbiddenError('Expired Token')
  })
  await db.user.update({
    data: {
      emailVerifiedAt: new Date(),
    },
    where: {
      email: vModel.identifier,
    },
  })
  return true
}

// export const resendVerificationRequest: MutationResolvers['resendVerificationRequest'] = async ({})

export const User: UserRelationResolvers = {
  referrals: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).referrals()
  },
  profile: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).profile()
  },
  kyc: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).kyc()
  },
  activities: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).activities()
  },
  deposits: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).deposits()
  },
  withdrawals: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).withdrawals()
  },
  tickets: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).tickets()
  },
}
