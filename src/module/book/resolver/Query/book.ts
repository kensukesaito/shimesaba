import * as types from '../../../../type/index.js'

export const book: types.graphql.QueryResolvers['book'] = async (parent, args, context, info) => {
  const book: types.graphql.Book = {
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
  }
  return book
}
