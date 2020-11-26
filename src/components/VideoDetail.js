import React from 'react'

const VideoDetail = ({ selectedVideo }) => {

    if(!selectedVideo){
        return <div>Search some video</div>
    }
    
    const videoLink = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="Video player" src={videoLink}/>
            </div>
            

            <div className="ui segment">
                <h4>{selectedVideo.snippet.title}</h4>
                <p>{selectedVideo.snippet.description}</p>
            </div>
            
        </div>
    );
}

export default VideoDetail;