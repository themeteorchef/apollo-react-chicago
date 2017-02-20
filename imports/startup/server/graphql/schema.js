import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import books from '../../../api/books/resolvers';
import booksMutations from '../../../api/books/mutations';

const Queries = new GraphQLObjectType({
  name: 'Queries',
  description: 'Root Query for the application.',
  // fields === fields we can query against...each one points to a resolver for that field.
  fields: {
    books, // with this, we can now query against books, here we point to the books resolver.
  },
});

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Mutations for the application',
  // fields === fields we can run mutations against...here we use a spread to "unpack" all of the
  // mutations available for books.
  fields: {
    ...booksMutations, // object containing multiple mutations we can run.
  },
});

export default new GraphQLSchema({
  query: Queries,
  mutation: Mutations,
});
