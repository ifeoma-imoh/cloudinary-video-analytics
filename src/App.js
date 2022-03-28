import './App.css';
import { useEffect } from 'react';
// import 'cloudinary-video-player/dist/cld-video-player.min.css';
import MyPlayer from './components/VideoPlayer';
export default function App() {
  useEffect(() => {
    MyPlayer();
  }, []);
  return (
    <div className="App">
      <h2>Tracking user activities on a cloudinary video</h2>
      <div className="vid-container">
        <video
          controls
          muted
          className="cld-video-player cld-fluid"
          id="player"
        />
      </div>
    </div>
  );
}
