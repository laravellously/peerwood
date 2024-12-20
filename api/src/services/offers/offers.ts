import type {
  QueryResolvers,
  MutationResolvers,
  OfferRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const offers: QueryResolvers['offers'] = () => {
  return db.offer.findMany()
}

export const offer: QueryResolvers['offer'] = ({ id }) => {
  return db.offer.findUnique({
    where: { id },
  })
}

export const createOffer: MutationResolvers['createOffer'] = ({ input }) => {
  return db.offer.create({
    data: input,
  })
}

export const updateOffer: MutationResolvers['updateOffer'] = ({
  id,
  input,
}) => {
  return db.offer.update({
    data: input,
    where: { id },
  })
}

export const deleteOffer: MutationResolvers['deleteOffer'] = ({ id }) => {
  return db.offer.delete({
    where: { id },
  })
}

export const Offer: OfferRelationResolvers = {
  coin: (_obj, { root }) => {
    return db.offer.findUnique({ where: { id: root?.id } }).coin()
  },
  fiat: (_obj, { root }) => {
    return db.offer.findUnique({ where: { id: root?.id } }).fiat()
  },
  gateway: (_obj, { root }) => {
    return db.offer.findUnique({ where: { id: root?.id } }).gateway()
  },
  trades: (_obj, { root }) => {
    return db.offer.findUnique({ where: { id: root?.id } }).trades()
  },
}
