import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import AddBook from '../components/AddBook';

const createBook = gql`
  mutation createBook($title: String!, $author: String!, $read: Boolean!) {
    createBook(title: $title, author: $author, read: $read) {
      _id
      title
      author
      read
    }
  }
`;

export default graphql(createBook)(AddBook);
