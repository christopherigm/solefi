import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'src/routes';
import {
  Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController,
  PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale,
  RadialLinearScale, TimeScale, TimeSeriesScale, Filler, Legend, Title, Tooltip
} from 'chart.js';
import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y, Autoplay,
  EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs
} from 'swiper';
import 'swiper/css';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

Chart.register(
  ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController,
  PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale,
  RadialLinearScale, TimeScale, TimeSeriesScale, Filler, Legend, Title, Tooltip
);

// https://swiperjs.com/demos
SwiperCore.use([
  Navigation, Pagination, Scrollbar, A11y, Autoplay,
  EffectFade, EffectCube, EffectFlip, EffectFlip, EffectCoverflow, Thumbs
]);
