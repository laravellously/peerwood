import type {
  QueryResolvers,
  MutationResolvers,
  TradeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const trades: QueryResolvers['trades'] = () => {
  return db.trade.findMany()
}

export const trade: QueryResolvers['trade'] = ({ id }) => {
  return db.trade.findUnique({
    where: { id },
  })
}

export const createTrade: MutationResolvers['createTrade'] = ({ input }) => {
  return db.trade.create({
    data: input,
  })
}

export const updateTrade: MutationResolvers['updateTrade'] = ({
  id,
  input,
}) => {
  return db.trade.update({
    data: input,
    where: { id },
  })
}

export const deleteTrade: MutationResolvers['deleteTrade'] = ({ id }) => {
  return db.trade.delete({
    where: { id },
  })
}

export const Trade: TradeRelationResolvers = {
  buyer: (_obj, { root }) => {
    return db.trade.findUnique({ where: { id: root?.id } }).buyer()
  },
  seller: (_obj, { root }) => {
    return db.trade.findUnique({ where: { id: root?.id } }).seller()
  },
  offer: (_obj, { root }) => {
    return db.trade.findUnique({ where: { id: root?.id } }).offer()
  },
  gateway: (_obj, { root }) => {
    return db.trade.findUnique({ where: { id: root?.id } }).gateway()
  },
  reviews: (_obj, { root }) => {
    return db.trade.findUnique({ where: { id: root?.id } }).reviews()
  },
}
