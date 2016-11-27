import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDlH5PFGngcIDE5rrWLDyqMQkenNrjeY1Y';


class App extends Component {
    constructor (props){
        super(props);

        this.state = {
console.log(this)
            videos: [],
            selectedVideo: null
         };


        YTSearch({ key: API_KEY, term: "funny dogs" }, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });

        });
    }

    render() {
        return (
          <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
            onVideoSelect={selectedVideo => this.state({ selectedVideo }) }
            videos= {this.state.videos} />
            </div>
        );
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'));

