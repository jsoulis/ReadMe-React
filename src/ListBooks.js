import React from 'react'
import Title from './Title'
import './App.css'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {


    render() {

        let currentlyReadingArray, wantToReadArray, readArray;
        const { allBooks, onBookChange } = this.props;
        if(allBooks) {
            currentlyReadingArray = allBooks.filter(el => el.shelf === 'currentlyReading');
            wantToReadArray = allBooks.filter(el => el.shelf === 'wantToRead');
            readArray = allBooks.filter(el => el.shelf === 'read');
        }

        return (
            <div className="list-books">
                <Title/>
                <div className="list-books-content">
                    <div>
                        <Shelf 
                            type={currentlyReadingArray} 
                            shelfType="Currently Reading"
                            onBookChange={onBookChange}
                        />
                        <Shelf 
                            type={wantToReadArray} 
                            shelfType="Want to Read"
                            onBookChange={onBookChange}
                        />
                        <Shelf 
                            type={readArray}
                            shelfType="Read"
                            onBookChange={onBookChange}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}


export default ListBooks;