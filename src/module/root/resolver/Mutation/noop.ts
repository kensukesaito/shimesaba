
import * as types from '../../../../type/index.js'

export const noop: types.graphql.MutationResolvers['noop'] = async (parent, args, context, info) => {
  const payload = {
    clientMutationId: args.input.clientMutationId,
  }
  return payload
}
