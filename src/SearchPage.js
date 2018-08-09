import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends React.Component {
    
    state = {
        query: '',
        books: []
    }
    
    searchForBook = (query) => {

        if(query) {
            this.setState(() => ({
                query
            }))
            BooksAPI.search(this.state.query)
            .then((books) => {
                if(!books || books.error) {
                    this.setState({books: []})
                  }else {
                    this.setState(() => ({
                        books: books
                    }))
                  }

            })
        }else {
            this.setState({query: ''});
            this.setState({books: []})
        }


    }

    
    render() {

        const { onBookChange } = this.props;


        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input onChange={(e) => this.searchForBook(e.target.value)} type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              {this.state.books && <Book
                onBookChange={onBookChange}
                books={this.state.books}
              />}
            </div>
          </div>
        )
    }
}


export default SearchPage;