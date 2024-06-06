import type {
  QueryResolvers,
  MutationResolvers,
  GatewayRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const gateways: QueryResolvers['gateways'] = () => {
  return db.gateway.findMany()
}

export const gateway: QueryResolvers['gateway'] = ({ id }) => {
  return db.gateway.findUnique({
    where: { id },
  })
}

export const createGateway: MutationResolvers['createGateway'] = ({
  input,
}) => {
  return db.gateway.create({
    data: input,
  })
}

export const updateGateway: MutationResolvers['updateGateway'] = ({
  id,
  input,
}) => {
  return db.gateway.update({
    data: input,
    where: { id },
  })
}

export const deleteGateway: MutationResolvers['deleteGateway'] = ({ id }) => {
  return db.gateway.delete({
    where: { id },
  })
}

export const Gateway: GatewayRelationResolvers = {
  Offer: (_obj, { root }) => {
    return db.gateway.findUnique({ where: { id: root?.id } }).Offer()
  },
  Trade: (_obj, { root }) => {
    return db.gateway.findUnique({ where: { id: root?.id } }).Trade()
  },
}
