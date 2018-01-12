import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
const API_KEY = "AIzaSyDHr9FEhn_qUMVX4CHtmr9xkcyhAUXTMbA";



//Create new component and this should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos:[]};

        YTSearch({ key:API_KEY, term:"java" }, (videos) => {
            //this.setState({videos:videos});
            this.setState({videos});
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take above created component's HTML and put it in DOM
ReactDOM.render(<App />, document.querySelector(".container"));