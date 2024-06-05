import type {
  QueryResolvers,
  MutationResolvers,
  UserDepositRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userDeposits: QueryResolvers['userDeposits'] = () => {
  return db.userDeposit.findMany()
}

export const userDeposit: QueryResolvers['userDeposit'] = ({ id }) => {
  return db.userDeposit.findUnique({
    where: { id },
  })
}

export const createUserDeposit: MutationResolvers['createUserDeposit'] = ({
  input,
}) => {
  return db.userDeposit.create({
    data: input,
  })
}

export const updateUserDeposit: MutationResolvers['updateUserDeposit'] = ({
  id,
  input,
}) => {
  return db.userDeposit.update({
    data: input,
    where: { id },
  })
}

export const deleteUserDeposit: MutationResolvers['deleteUserDeposit'] = ({
  id,
}) => {
  return db.userDeposit.delete({
    where: { id },
  })
}

export const UserDeposit: UserDepositRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userDeposit.findUnique({ where: { id: root?.id } }).user()
  },
}
