import type {
  QueryResolvers,
  MutationResolvers,
  UserReferralRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userReferrals: QueryResolvers['userReferrals'] = () => {
  return db.userReferral.findMany()
}

export const userReferral: QueryResolvers['userReferral'] = ({ id }) => {
  return db.userReferral.findUnique({
    where: { id },
  })
}

export const createUserReferral: MutationResolvers['createUserReferral'] = ({
  input,
}) => {
  return db.userReferral.create({
    data: input,
  })
}

export const updateUserReferral: MutationResolvers['updateUserReferral'] = ({
  id,
  input,
}) => {
  return db.userReferral.update({
    data: input,
    where: { id },
  })
}

export const deleteUserReferral: MutationResolvers['deleteUserReferral'] = ({
  id,
}) => {
  return db.userReferral.delete({
    where: { id },
  })
}

export const UserReferral: UserReferralRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userReferral.findUnique({ where: { id: root?.id } }).user()
  },
}
