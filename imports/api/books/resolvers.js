import { GraphQLList, GraphQLString } from 'graphql';
import { Books } from './books';
import { Book } from './types';

export default {
  type: new GraphQLList(Book),
  args: {
    _id: {
      name: '_id',
      type: GraphQLString,
    },
  },
  resolve(parent, args) {
    // We can use any database here, not just MongoDB. Think of the resolve() method as a
    // blackbox that just needs to return data matching the type property. In this case, we need
    // to return an array of books matching the Book type above.
    return Books.find(args).fetch();
  },
};
