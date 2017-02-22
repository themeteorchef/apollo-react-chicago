import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLBoolean } from 'graphql';

// Example GraphQL query relying on a nested reviews field.
//
// {
//   books {
//     _id
//     title
//     reviews {
//       name
//       review
//     }
//   }
// }

export const Book = new GraphQLObjectType({
  name: 'Book',
  description: 'GraphQL type for books.',
  fields: {
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    read: { type: GraphQLBoolean },
    // reviews: {
    //   type: Review,
    //   resolve(book) {
    //     return Reviews.find({ book: book._id });
    //   },
    // },
  },
});
