import type {
  QueryResolvers,
  MutationResolvers,
  UserKycRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userKycs: QueryResolvers['userKycs'] = () => {
  return db.userKyc.findMany()
}

export const userKyc: QueryResolvers['userKyc'] = ({ id }) => {
  return db.userKyc.findUnique({
    where: { id },
  })
}

export const createUserKyc: MutationResolvers['createUserKyc'] = ({
  input,
}) => {
  return db.userKyc.create({
    data: input,
  })
}

export const updateUserKyc: MutationResolvers['updateUserKyc'] = ({
  id,
  input,
}) => {
  return db.userKyc.update({
    data: input,
    where: { id },
  })
}

export const deleteUserKyc: MutationResolvers['deleteUserKyc'] = ({ id }) => {
  return db.userKyc.delete({
    where: { id },
  })
}

export const UserKyc: UserKycRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userKyc.findUnique({ where: { id: root?.id } }).user()
  },
}
