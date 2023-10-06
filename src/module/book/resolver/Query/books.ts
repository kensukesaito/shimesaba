
import * as types from '../../../../type/index.js'

export const books: types.graphql.QueryResolvers['books'] = async (parent, args, context, info) => {
  const books: types.graphql.Book[] = [
    {
      id: 'a72ba6dc-040f-49ff-84c8-0729e4da134e',
      title: 'Example Book',
      author: 'Taro Yamada',
      country: 'JP',
      isbn: '978-3-16-148410-0',
      url: 'https://www.example.com',
      emailAddress: 'example@example.com',
      phoneNumber: '+819011112222',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '7b0e160c-bf60-45e6-a2a9-2d4f64370f2b',
      title: 'Hello Book',
      author: 'Hanako Suzuki',
      country: 'JP',
      isbn: '978-3-16-148410-0',
      url: 'https://www.example.jp',
      emailAddress: 'example@example.jp',
      phoneNumber: '+819033334444',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]
  const edges = books.map((node) => ({
    cursor: node.id,
    node,
  }))
  const pageInfo = {
    hasNextPage: false,
    hasPreviousPage: false,
    startCursor: undefined,
    endCursor: undefined,
  }
  const connection = {
    edges,
    pageInfo,
  }
  return connection
}
