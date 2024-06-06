export const schema = gql`
  type Offer {
    id: String!
    userId: String!
    type: String!
    window: String!
    margin: Float
    min: Float!
    max: Float!
    details: String!
    terms: String!
    status: String!
    coin: Coin!
    coinId: String!
    fiat: Fiat!
    fiatId: String!
    gateway: Gateway!
    gatewayId: String!
    trades: [Trade]!
    publishedAt: DateTime
    createdAt: DateTime!
    updatedAt: DateTime!
    deletedAt: DateTime
  }

  type Query {
    offers: [Offer!]! @requireAuth
    offer(id: String!): Offer @requireAuth
  }

  input CreateOfferInput {
    userId: String!
    type: String!
    window: String!
    margin: Float
    min: Float!
    max: Float!
    details: String!
    terms: String!
    status: String!
    coinId: String!
    fiatId: String!
    gatewayId: String!
    publishedAt: DateTime
    deletedAt: DateTime
  }

  input UpdateOfferInput {
    userId: String
    type: String
    window: String
    margin: Float
    min: Float
    max: Float
    details: String
    terms: String
    status: String
    coinId: String
    fiatId: String
    gatewayId: String
    publishedAt: DateTime
    deletedAt: DateTime
  }

  type Mutation {
    createOffer(input: CreateOfferInput!): Offer! @requireAuth
    updateOffer(id: String!, input: UpdateOfferInput!): Offer! @requireAuth
    deleteOffer(id: String!): Offer! @requireAuth
  }
`
