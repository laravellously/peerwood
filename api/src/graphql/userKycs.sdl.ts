export const schema = gql`
  type UserKYC {
    id: String!
    userId: String!
    user: User!
    phone: String!
    birthday: String!
    gender: String!
    address: String!
    city: String!
    state: String!
    zip: String
    country: String!
    telegram: String
    documentType: String!
    documentPath: String!
    status: String!
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    userKycs: [UserKYC!]! @requireAuth
    userKyc(id: String!): UserKYC @requireAuth
  }

  input CreateUserKycInput {
    userId: String!
    phone: String!
    birthday: String!
    gender: String!
    address: String!
    city: String!
    state: String!
    zip: String
    country: String!
    telegram: String
    documentType: String!
    documentPath: String!
    status: String!
    deletedAt: DateTime
  }

  input UpdateUserKycInput {
    userId: String
    phone: String
    birthday: String
    gender: String
    address: String
    city: String
    state: String
    zip: String
    country: String
    telegram: String
    documentType: String
    documentPath: String
    status: String
    deletedAt: DateTime
  }

  type Mutation {
    createUserKyc(input: CreateUserKycInput!): UserKYC! @requireAuth
    updateUserKyc(id: String!, input: UpdateUserKycInput!): UserKYC!
      @requireAuth
    deleteUserKyc(id: String!): UserKYC! @requireAuth
  }
`
