
import * as types from '../../../../type/index.js'

export const createBook: types.graphql.MutationResolvers['createBook'] = async (parent, args, context, info) => {
  const book = null
  const payload = {
    clientMutationId: args.input.clientMutationId,
    book,
  }
  return payload
}
