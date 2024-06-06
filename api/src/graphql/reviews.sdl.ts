export const schema = gql`
  type Review {
    id: String!
    userId: String!
    user: User!
    recipientId: String!
    message: String!
    type: String!
    Trade: Trade
    tradeId: String
    updatedAt: DateTime!
    createdAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    reviews: [Review!]! @requireAuth
    review(id: String!): Review @requireAuth
  }

  input CreateReviewInput {
    userId: String!
    recipientId: String!
    message: String!
    type: String!
    tradeId: String
    deletedAt: DateTime
  }

  input UpdateReviewInput {
    userId: String
    recipientId: String
    message: String
    type: String
    tradeId: String
    deletedAt: DateTime
  }

  type Mutation {
    createReview(input: CreateReviewInput!): Review! @requireAuth
    updateReview(id: String!, input: UpdateReviewInput!): Review! @requireAuth
    deleteReview(id: String!): Review! @requireAuth
  }
`
