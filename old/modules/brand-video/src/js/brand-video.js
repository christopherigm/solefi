import '../scss/brand-video.scss';
import React from 'react';
import { render } from 'react-dom';
import Video from './components/video-component';

const video = document.getElementById('video');

if ( video ) {
  render(
    <Video title="Ver video" />,
    document.getElementById('video')
  );
}
