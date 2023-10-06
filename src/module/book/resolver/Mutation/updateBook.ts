
import * as types from '../../../../type/index.js'

export const updateBook: types.graphql.MutationResolvers['updateBook'] = async (parent, args, context, info) => {
  const book = null
  const payload = {
    clientMutationId: args.input.clientMutationId,
    book,
  }
  return payload
}
