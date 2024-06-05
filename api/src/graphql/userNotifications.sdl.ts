export const schema = gql`
  type UserNotification {
    id: String!
    userId: String!
    message: String!
    createdAt: DateTime!
    deletedAt: DateTime
    readAt: DateTime
  }

  type Query {
    userNotifications: [UserNotification!]! @requireAuth
    userNotification(id: String!): UserNotification @requireAuth
  }

  input CreateUserNotificationInput {
    userId: String!
    message: String!
    deletedAt: DateTime
    readAt: DateTime
  }

  input UpdateUserNotificationInput {
    userId: String
    message: String
    deletedAt: DateTime
    readAt: DateTime
  }

  type Mutation {
    createUserNotification(
      input: CreateUserNotificationInput!
    ): UserNotification! @requireAuth
    updateUserNotification(
      id: String!
      input: UpdateUserNotificationInput!
    ): UserNotification! @requireAuth
    deleteUserNotification(id: String!): UserNotification! @requireAuth
  }
`
