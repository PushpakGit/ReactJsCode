import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_details';
const API_KEY = "AIzaSyDHr9FEhn_qUMVX4CHtmr9xkcyhAUXTMbA";



//Create new component and this should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos:[] ,
            selectedVideo : null
        };

       this.videoSearch('java');
    }

    videoSearch(term){
         YTSearch({ key:API_KEY, term:term }, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });            
        });
    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400 )
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Take above created component's HTML and put it in DOM
ReactDOM.render(<App />, document.querySelector(".container"));