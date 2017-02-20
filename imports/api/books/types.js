import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';
import { Reviews } from '../reviews/reviews';
import { Review } from '../reviews/types';

export const Book = new GraphQLObjectType({
  name: 'Book',
  description: 'GraphQL type for books.',
  fields: {
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    read: { type: GraphQLBoolean },
    reviews: {
      type: new GraphQLList(Review),
      resolve(book) {
        return Reviews.find({ book: book._id }).fetch();
      },
    },
  },
});
