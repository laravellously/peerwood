export const schema = gql`
  type UserActivity {
    id: String!
    userId: String!
    user: User!
    device: String!
    browser: String!
    ip: String!
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    userActivities: [UserActivity!]! @requireAuth
    userActivity(id: String!): UserActivity @requireAuth
  }

  input CreateUserActivityInput {
    userId: String!
    device: String!
    browser: String!
    ip: String!
    deletedAt: DateTime
  }

  input UpdateUserActivityInput {
    userId: String
    device: String
    browser: String
    ip: String
    deletedAt: DateTime
  }

  type Mutation {
    createUserActivity(input: CreateUserActivityInput!): UserActivity!
      @requireAuth
    updateUserActivity(
      id: String!
      input: UpdateUserActivityInput!
    ): UserActivity! @requireAuth
    deleteUserActivity(id: String!): UserActivity! @requireAuth
  }
`
