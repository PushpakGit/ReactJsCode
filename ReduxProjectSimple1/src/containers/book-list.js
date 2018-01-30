import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component{
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }
    
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //whatever returned from here will show up as Props in book list
    return{
        books : state.books
    }
}

//anything returned from this function will end up as props on the bookList Container
function mapDispatchToProps(dispatch){
    //whenever select book is called, the result should be passed to all the reducers
    return bindActionCreators({selectBook:selectBook}, dispatch);
}

// pramte BookList Component to a contauiuner - it needs to know about this new dispatch
// mehtos , selectBook. Make it available as a prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList);