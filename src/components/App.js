import SearchBar from './SearchBar'
import React, { useState, useEffect } from 'react'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
    const [videos, search] = useVideos('recommend');
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={video => setSelectedVideo(video)} 
                            videos={videos} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;