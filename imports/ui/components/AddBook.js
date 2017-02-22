import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

const handleAddBook = (event, mutate, refetch) => {
  event.preventDefault();

  const book = {
    title: document.querySelector('[name="bookTitle"]').value,
    author: document.querySelector('[name="bookAuthor"]').value,
    read: document.querySelector('[name="bookRead"]').checked,
  };

  mutate({
    variables: book,
  })
  .then((response) => {
    console.log(response);
    document.querySelector('.AddBook').reset();
    refetch();
  })
  .catch((error) => {
    Bert.alert(error, 'danger');
  });
};

export default AddBook = ({ mutate, refetch }) => (
  <form
    className="AddBook clearfix"
    onSubmit={(event) => { handleAddBook(event, mutate, refetch); }}
  >
    <input type="text" name="bookTitle" placeholder="Book Title" />
    <input type="text" name="bookAuthor" placeholder="Book Author" />
    <label><input type="checkbox" name="bookRead" /> Read?</label>
    <button type="submit">Add Book</button>
  </form>
);
