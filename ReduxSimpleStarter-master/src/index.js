import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDHr9FEhn_qUMVX4CHtmr9xkcyhAUXTMbA";

//Create new component and this should produce some HTML

const App = () => {
    return (
            <div>
                <SearchBar />
            </div>
        );
}

// Take above created component's HTML and put it in DOM
ReactDOM.render(<App />, document.querySelector(".container"));