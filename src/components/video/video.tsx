import React from "react";


function Video (){
    return (
        <div className="video">
            <video className="video__media" src='video/video1.mp4' autoPlay muted loop/>
        </div>
    )
}

export default Video;