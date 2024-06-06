import type {
  QueryResolvers,
  MutationResolvers,
  FiatRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const fiats: QueryResolvers['fiats'] = () => {
  return db.fiat.findMany()
}

export const fiat: QueryResolvers['fiat'] = ({ id }) => {
  return db.fiat.findUnique({
    where: { id },
  })
}

export const createFiat: MutationResolvers['createFiat'] = ({ input }) => {
  return db.fiat.create({
    data: input,
  })
}

export const updateFiat: MutationResolvers['updateFiat'] = ({ id, input }) => {
  return db.fiat.update({
    data: input,
    where: { id },
  })
}

export const deleteFiat: MutationResolvers['deleteFiat'] = ({ id }) => {
  return db.fiat.delete({
    where: { id },
  })
}

export const Fiat: FiatRelationResolvers = {
  Wallet: (_obj, { root }) => {
    return db.fiat.findUnique({ where: { id: root?.id } }).Wallet()
  },
  Offer: (_obj, { root }) => {
    return db.fiat.findUnique({ where: { id: root?.id } }).Offer()
  },
}
