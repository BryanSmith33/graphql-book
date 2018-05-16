import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import BookList from './Components/BookList'
import AddBook from './Components/AddBook'

const client = new ApolloClient({
  uri: `http://localhost:3333/graphql`
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id='main' className="App">
          <h1>Reading List</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
