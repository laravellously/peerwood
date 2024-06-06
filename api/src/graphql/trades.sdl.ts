export const schema = gql`
  type Trade {
    id: String!
    amount: Float!
    crpytoAmount: Float!
    chargeFee: Float!
    exchangeRate: Float!
    status: String!
    details: String!
    reportedBy: String!
    reviewed: Boolean!
    buyerId: String!
    buyer: User!
    sellerId: String!
    seller: User!
    offer: Offer!
    offerId: String!
    gateway: Gateway!
    gatewayId: String!
    reviews: [Review]!
    paidAt: DateTime
    completedAt: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    trades: [Trade!]! @requireAuth
    trade(id: String!): Trade @requireAuth
  }

  input CreateTradeInput {
    amount: Float!
    crpytoAmount: Float!
    chargeFee: Float!
    exchangeRate: Float!
    status: String!
    details: String!
    reportedBy: String!
    reviewed: Boolean!
    buyerId: String!
    sellerId: String!
    offerId: String!
    gatewayId: String!
    paidAt: DateTime
    completedAt: DateTime
    deletedAt: DateTime
  }

  input UpdateTradeInput {
    amount: Float
    crpytoAmount: Float
    chargeFee: Float
    exchangeRate: Float
    status: String
    details: String
    reportedBy: String
    reviewed: Boolean
    buyerId: String
    sellerId: String
    offerId: String
    gatewayId: String
    paidAt: DateTime
    completedAt: DateTime
    deletedAt: DateTime
  }

  type Mutation {
    createTrade(input: CreateTradeInput!): Trade! @requireAuth
    updateTrade(id: String!, input: UpdateTradeInput!): Trade! @requireAuth
    deleteTrade(id: String!): Trade! @requireAuth
  }
`
