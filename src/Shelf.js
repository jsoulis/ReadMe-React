import React from 'react'
import Book from './Book'

class Shelf extends React.Component {


    render() {
        const { type, shelfType, onBookChange } = this.props;
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfType}</h2>
                  <div className="bookshelf-books">
                    <Book 
                        books={type}
                        onBookChange={onBookChange}
                    />
                  </div>
            </div>
        )
    }
}

export default Shelf;