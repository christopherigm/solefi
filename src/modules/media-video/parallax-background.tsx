import React, {useState, useRef} from 'react';
import 'src/modules/media-video/media-video.scss';
import Title from 'src/modules/title/title';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';

const ParallaxBackground = (props: any): React.ReactElement => {

  const [showVideo, setShowVideo] = useState(false);
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const videoFile = '/video.mp4';
  const videoURL = `${prefix}${videoFile}`;
  const videoRef: any = useRef(null);
  const ShowShadowTitle = true;

  return (
    <div className='parallax-container'>
      <div className='parallax'>
        <img src={props.image} alt=''/>
      </div>
      <div className='MediaVideo__img'>
        <div className='container row'>
        <div className='MediaVideo__title col s12'>
          <Title text='Mira nuestro video corporativo' color='white' shadow={ShowShadowTitle}/>
        </div>
        <div className='col s4 offset-s4'>
          <div
            className='MediaVideo__btnVideo'
            onClick={()=>{
              videoRef.current.seekTo(0);
              setShowVideo(true);
            }}>
            <div
              className='MediaVideo__playIcon'
              style= {{backgroundImage: `url(${props.icon})`}}>
            </div>
          </div>
          <div className={`MediaVideo__wrapper valign-wrapper ${showVideo ? '' : 'hide'
              }`} onClick={() => {
              setShowVideo(false);
              }}>
          <div className='MediaVideo__videocontainer container'>
            <ReactPlayer
              url={videoURL}
              width='100%'
              height='100%'
              playing={showVideo}
              muted={!showVideo}
              ref={videoRef}
            />
            <div
              className={`MediaVideo__button waves-effect waves-light tbn white-text center-align  btn-floating red pulse${showVideo ? '' : 'hide'
              }`} onClick={()=> {
                setShowVideo(true);
              }} >Cerrar</div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ParallaxBackground;
