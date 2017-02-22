import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Books from '../components/Books';

const books = gql`
  {
    books {
      _id
      title
      author
      read
    }
  }
`;

export default graphql(books, {
  options: {
    pollInterval: 10000,
  },
})(Books);
