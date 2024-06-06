import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const userNotifications: QueryResolvers['userNotifications'] = () => {
  return db.userNotification.findMany()
}

export const notificationsByUser: QueryResolvers['notificationsByUser'] = ({
  userId
}) => {
  return db.userNotification.findMany({
    where: { userId },
    take: 5
  })
}

export const userNotification: QueryResolvers['userNotification'] = ({
  id,
}) => {
  return db.userNotification.findUnique({
    where: { id },
  })
}

export const createUserNotification: MutationResolvers['createUserNotification'] =
  ({ input }) => {
    return db.userNotification.create({
      data: input,
    })
  }

export const updateUserNotification: MutationResolvers['updateUserNotification'] =
  ({ id, input }) => {
    return db.userNotification.update({
      data: input,
      where: { id },
    })
  }

export const deleteUserNotification: MutationResolvers['deleteUserNotification'] =
  ({ id }) => {
    return db.userNotification.delete({
      where: { id },
    })
  }
