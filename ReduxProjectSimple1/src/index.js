import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import RootReducer from './reducers/index';

//Create new component and this should produce some HTML
class App extends Component {
    render(){
        return (
                   <RootReducer />
               );
    }
}

// Take above created component's HTML and put it in DOM
ReactDOM.render(<App />, document.querySelector(".container"));