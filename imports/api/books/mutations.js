import { GraphQLNonNull, GraphQLString } from 'graphql';
import { Book } from './types';
import { Books } from './books';

export default {
  createBook: {
    type: Book,
    args: {
      title: { type: new GraphQLNonNull(GraphQLString) },
      author: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(source, args) {
      const _id = Books.insert(args);
      return { _id, title: args.title, author: args.author };
    },
  },
  updateBook: {
    type: Book,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
      title: { type: GraphQLString },
      author: { type: GraphQLString },
    },
    resolve(source, { _id, title, author }) {
      Books.update(_id, { $set: { title, author } });
      return { _id };
    },
  },
  deleteBook: {
    type: Book,
    args: {
      _id: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(source, { _id }) {
      Books.remove(_id);
      return { _id };
    },
  },
};
