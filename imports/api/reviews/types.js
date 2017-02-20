import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export const Review = new GraphQLObjectType({
  name: 'Review',
  description: 'GraphQL type for reviews.',
  fields: {
    name: { type: GraphQLString },
    rating: { type: GraphQLInt },
    review: { type: GraphQLString },
  },
});
