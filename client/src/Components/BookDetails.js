import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries/queries'

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data
    console.log(this.props.data);
    console.log('BOOK', book);
    if (book) {
      return (
        <div className='other-font'>
          <h2>{book.name}</h2>
          <p>Genre:  {book.genre}</p>
          <p>Author: {book.author.name}</p>
          <p>All Books by {book.author.name}</p>
          <ul className='other-books'>
            {book.author.books.map(book => <li key={book.id}>{book.name}</li>)}
          </ul>
        </div>
      )
    } else {
      return <div>No Book Selected</div>
    }
  }
  render() {
    return (
      <div id='book-details'>
        {this.displayBookDetails()}
      </div>
    )
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails)