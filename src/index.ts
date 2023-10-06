
import * as http from 'node:http'
import * as graphqlYoga from 'graphql-yoga'
import * as graphqlToolsSchema from '@graphql-tools/schema'

import * as modules from './module/index.js'
import typeDefs from './module/index.graphql.js'

const schema = graphqlToolsSchema.mergeSchemas({
  schemas: [
    modules.scalar.schema,
  ],
  typeDefs: [
    typeDefs,
  ],
  resolvers: [
    modules.root.resolvers,
    modules.book.resolvers,
  ],
})

const yoga = graphqlYoga.createYoga({
  schema,
})

const start = () => {
  const server = http.createServer(yoga)
  const port = 4000
  server.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}${yoga.graphqlEndpoint}`)
  })
}

start()
