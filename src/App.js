import React from 'react';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <h1>React Player Example</h1>
      <ReactPlayer
      url="https://res.cloudinary.com/didgwmfr7/video/upload/v1699023114/bead1lzt1qztbhuuwdzq.mp4"
      width={'100%'}
      height="auto"
      controls={true} // Show playback controls
      playing={true}  // Autoplay the video
      muted={true}    // Mute the video (required for autoplay in some browsers)
      loop={true}     // Loop the video
    />
    </div>
  );
}

export default App;