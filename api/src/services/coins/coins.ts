import type {
  QueryResolvers,
  MutationResolvers,
  CoinRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const coins: QueryResolvers['coins'] = () => {
  return db.coin.findMany()
}

export const coin: QueryResolvers['coin'] = ({ id }) => {
  return db.coin.findUnique({
    where: { id },
  })
}

export const createCoin: MutationResolvers['createCoin'] = ({ input }) => {
  return db.coin.create({
    data: input,
  })
}

export const updateCoin: MutationResolvers['updateCoin'] = ({ id, input }) => {
  return db.coin.update({
    data: input,
    where: { id },
  })
}

export const deleteCoin: MutationResolvers['deleteCoin'] = ({ id }) => {
  return db.coin.delete({
    where: { id },
  })
}

export const Coin: CoinRelationResolvers = {
  wallets: (_obj, { root }) => {
    return db.coin.findUnique({ where: { id: root?.id } }).wallets()
  },
}
