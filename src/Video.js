import React from 'react'

function Video() {
  return (
    <div>
       <div id="video-container">
        <video autoplay muted loop id="background-video">
            <source src="../Untitled design.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          </div>
    </div>
  )
}

export default Video
