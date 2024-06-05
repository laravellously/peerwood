export const schema = gql`
  type UserTicket {
    id: String!
    userId: String!
    title: String!
    message: String!
    attachment: String
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
    user: User!
  }

  type Query {
    userTickets: [UserTicket!]! @requireAuth
    userTicket(id: String!): UserTicket @requireAuth
  }

  input CreateUserTicketInput {
    userId: String!
    title: String!
    message: String!
    attachment: String
    deletedAt: DateTime
  }

  input UpdateUserTicketInput {
    userId: String
    title: String
    message: String
    attachment: String
    deletedAt: DateTime
  }

  type Mutation {
    createUserTicket(input: CreateUserTicketInput!): UserTicket! @requireAuth
    updateUserTicket(id: String!, input: UpdateUserTicketInput!): UserTicket!
      @requireAuth
    deleteUserTicket(id: String!): UserTicket! @requireAuth
  }
`
