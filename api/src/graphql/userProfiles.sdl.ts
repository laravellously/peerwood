export const schema = gql`
  type UserProfile {
    id: String!
    userId: String!
    user: User!
    firstName: String
    lastName: String
    newsletter: Boolean!
    unusual: Boolean!
    saveActivity: Boolean!
    changePassword: Boolean!
    emailExpire: DateTime
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    userProfiles: [UserProfile!]! @requireAuth
    userProfile(id: String!): UserProfile @requireAuth
  }

  input CreateUserProfileInput {
    userId: String!
    firstName: String
    lastName: String
    newsletter: Boolean!
    unusual: Boolean!
    saveActivity: Boolean!
    changePassword: Boolean!
    emailExpire: DateTime
    deletedAt: DateTime
  }

  input UpdateUserProfileInput {
    userId: String
    firstName: String
    lastName: String
    newsletter: Boolean
    unusual: Boolean
    saveActivity: Boolean
    changePassword: Boolean
    emailExpire: DateTime
    deletedAt: DateTime
  }

  type Mutation {
    createUserProfile(input: CreateUserProfileInput!): UserProfile! @requireAuth
    updateUserProfile(
      id: String!
      input: UpdateUserProfileInput!
    ): UserProfile! @requireAuth
    deleteUserProfile(id: String!): UserProfile! @requireAuth
  }
`
