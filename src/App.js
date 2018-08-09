import React from 'react'
import SearchPage from './SearchPage'
import Shelf from './Shelf'
import Title from './Title'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
}

  changeShelf = (book, shelf)  => {

    this.setState((prevState)=>({
      books: prevState.books.filter(el => el.id !== book.id)
    }))
    book.shelf = shelf;
    this.setState((prevState)=>({
      books: prevState.books.concat(book)
    }))

    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
       <Route exact path='/' render={() => (
         <ListBooks 
          allBooks={this.state.books}
          onBookChange={this.changeShelf}
          />
       )}/>
       <Route exact path='/search' render={() => (
         <SearchPage
          onBookChange={this.changeShelf}
         />
       )}/>
      </div>
    )
  }
}

export default BooksApp
