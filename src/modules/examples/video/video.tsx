import React, {
  useState
} from 'react';
import 'src/modules/video/video.scss';
import Title from 'src/modules/title/title';

const Video = (): React.ReactElement => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className='Video'>
      <Title text='hola' color='red' />
      <div
        className='waves-effect waves-light btn'
        onClick={() => {
          setShowVideo(true);
        }}>
        Mostrar video
      </div>
      <div className={`Video__wrapper valign-wrapper ${
          showVideo ? '' : 'hide'
        }`}>
        <div
          className='Video__close-big-button'
          onClick={() => {
            setShowVideo(false);
          }}></div>
        <div className='Video__video-element'>
          Aqui va a estar el video
        </div>
        <div
          className='waves-effect waves-light btn Video__close-button'
          onClick={() => {
            setShowVideo(false);
          }}
          >
          Cerrar video
        </div>
      </div>
    </div>
  );
};

export default Video;
