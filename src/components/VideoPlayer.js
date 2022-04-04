import { Cloudinary } from 'cloudinary-core';
import "cloudinary-video-player";
const cld = new Cloudinary({ cloud_name: 'ifeomaimoh', secure: true });

function MyPlayer() {
  const player = cld.videoPlayer('player', {
    bigPlatButton: 'true',
    controls: 'true',
  });
  player.source('8ba64b04-f0e6-43af-a6a0-d7815646332b_jdh3ty');
  return;
}
export default MyPlayer;
