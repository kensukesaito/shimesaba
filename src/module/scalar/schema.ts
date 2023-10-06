
import * as graphql from 'graphql'
import * as graphqlScalars from 'graphql-scalars'

const schema = new graphql.GraphQLSchema({
  types: Object.values(graphqlScalars.resolvers),
})

export default schema
