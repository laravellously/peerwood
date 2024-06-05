import type {
  QueryResolvers,
  MutationResolvers,
  UserWithdrawalRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userWithdrawals: QueryResolvers['userWithdrawals'] = () => {
  return db.userWithdrawal.findMany()
}

export const userWithdrawal: QueryResolvers['userWithdrawal'] = ({ id }) => {
  return db.userWithdrawal.findUnique({
    where: { id },
  })
}

export const createUserWithdrawal: MutationResolvers['createUserWithdrawal'] =
  ({ input }) => {
    return db.userWithdrawal.create({
      data: input,
    })
  }

export const updateUserWithdrawal: MutationResolvers['updateUserWithdrawal'] =
  ({ id, input }) => {
    return db.userWithdrawal.update({
      data: input,
      where: { id },
    })
  }

export const deleteUserWithdrawal: MutationResolvers['deleteUserWithdrawal'] =
  ({ id }) => {
    return db.userWithdrawal.delete({
      where: { id },
    })
  }

export const UserWithdrawal: UserWithdrawalRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userWithdrawal.findUnique({ where: { id: root?.id } }).user()
  },
}
