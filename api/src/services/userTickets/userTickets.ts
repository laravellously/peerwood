import type {
  QueryResolvers,
  MutationResolvers,
  UserTicketRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userTickets: QueryResolvers['userTickets'] = () => {
  return db.userTicket.findMany()
}

export const userTicket: QueryResolvers['userTicket'] = ({ id }) => {
  return db.userTicket.findUnique({
    where: { id },
  })
}

export const createUserTicket: MutationResolvers['createUserTicket'] = ({
  input,
}) => {
  return db.userTicket.create({
    data: input,
  })
}

export const updateUserTicket: MutationResolvers['updateUserTicket'] = ({
  id,
  input,
}) => {
  return db.userTicket.update({
    data: input,
    where: { id },
  })
}

export const deleteUserTicket: MutationResolvers['deleteUserTicket'] = ({
  id,
}) => {
  return db.userTicket.delete({
    where: { id },
  })
}

export const UserTicket: UserTicketRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userTicket.findUnique({ where: { id: root?.id } }).user()
  },
}
