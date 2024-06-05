export const schema = gql`
  type Log {
    id: String!
    message: String!
    logLevel: String!
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    logs: [Log!]! @requireAuth
    log(id: String!): Log @requireAuth
  }

  input CreateLogInput {
    message: String!
    logLevel: String!
    deletedAt: DateTime
  }

  input UpdateLogInput {
    message: String
    logLevel: String
    deletedAt: DateTime
  }

  type Mutation {
    createLog(input: CreateLogInput!): Log! @requireAuth
    updateLog(id: String!, input: UpdateLogInput!): Log! @requireAuth
    deleteLog(id: String!): Log! @requireAuth
  }
`
