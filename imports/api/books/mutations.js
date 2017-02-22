import { GraphQLNonNull, GraphQLString, GraphQLBoolean } from 'graphql';
import { Book } from './types';
import { Books } from './books';

export default {
  createBook: {
    type: Book,
    args: {
      title: { type: new GraphQLNonNull(GraphQLString) },
      author: { type: new GraphQLNonNull(GraphQLString) },
      read: { type: new GraphQLNonNull(GraphQLBoolean) },
    },
    resolve(parent, { title, author, read }) {
      const _id = Books.insert({ title, author, read });
      return { _id, title, author, read };
    },
  },
};
