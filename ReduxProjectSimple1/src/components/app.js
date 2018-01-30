import React from 'react';
import { Compnent } from 'react';

import BookList from '../containers/book-list';

export default class App extends Compnent{
    render(){
        return(
            <div>
                <BookList />
            </div>
        );
    }
}