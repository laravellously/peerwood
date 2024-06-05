import type {
  QueryResolvers,
  MutationResolvers,
  UserActivityRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userActivities: QueryResolvers['userActivities'] = () => {
  return db.userActivity.findMany()
}

export const userActivity: QueryResolvers['userActivity'] = ({ id }) => {
  return db.userActivity.findUnique({
    where: { id },
  })
}

export const createUserActivity: MutationResolvers['createUserActivity'] = ({
  input,
}) => {
  return db.userActivity.create({
    data: input,
  })
}

export const updateUserActivity: MutationResolvers['updateUserActivity'] = ({
  id,
  input,
}) => {
  return db.userActivity.update({
    data: input,
    where: { id },
  })
}

export const deleteUserActivity: MutationResolvers['deleteUserActivity'] = ({
  id,
}) => {
  return db.userActivity.delete({
    where: { id },
  })
}

export const UserActivity: UserActivityRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userActivity.findUnique({ where: { id: root?.id } }).user()
  },
}
