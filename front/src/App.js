import React, { Component } from 'react';
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//apollo client setup 
const client = new ApolloClient({
    uri: 'http://localhost:4000/graph',

})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>hero Reading React GraqhQl Appolo </h1>
          <BookList/>
          <AddBook/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
