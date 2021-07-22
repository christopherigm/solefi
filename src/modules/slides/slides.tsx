import React, {
  useEffect,
  useState
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  Swiper,
  SwiperSlide
} from 'swiper/react';
import setSlidesData from 'src/modules/slides/redux/slides-actions';
import fetchData from 'src/modules/slides/redux/fetch-slides-data';
import 'src/modules/slides/slides.scss';
import WhiteTextBox from 'src/modules/white-text-box/white-text-box';

const triangleFile = '/white-triangle.png';
const sliderNextButtonFile = '/slider-button-next.svg';
const sliderPrevButtonFile = '/slider-button-prev.svg';

const SlideAddons = ( props: any ): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const triangleURL = `${prefix}${triangleFile}`;
  const sliderNextButtonFileURL = `${prefix}${sliderNextButtonFile}`;
  const sliderPrevButtonFileURL = `${prefix}${sliderPrevButtonFile}`;
  const swiper = props.swiper;

  return (
    <>
      <div
        className='Swiper__navigation-button Swiper__navigation-button--left z-depth-2'
        style={{ backgroundImage: `url(${sliderPrevButtonFileURL})` }}
        onClick={() => {
          if ( swiper ) swiper.slidePrev();
        }}></div>
      <div
        className='Swiper__navigation-button Swiper__navigation-button--right z-depth-2'
        style={{ backgroundImage: `url(${sliderNextButtonFileURL})` }}
        onClick={() => {
          if ( swiper ) swiper.slideNext();
        }}></div>
      <div className='swiper-pagination'></div>
      <div
        className='Swiper__triangle'
        style={{
          backgroundImage: `url(${triangleURL})`
        }}
      ></div>
      <WhiteTextBox text={props.text}/>
    </>
  );
};

const Slide = (): React.ReactElement => {
  const dispatch = useDispatch();
  const slidesData = useSelector((state: any) => state.slides);
  const attr = slidesData.data ? slidesData.data.attributes ? slidesData.data.attributes : {} : {};
  const slides = slidesData.data && slidesData.data.relationships &&
    slidesData.data.relationships.items && slidesData.data.relationships.items.data ?
    slidesData.data.relationships.items.data : [];
  const [text, setText] = useState('');
  const [swiperReference, setSwiperReference]: any = useState('');

  useEffect(() => {
    let version = attr.version ? attr.version : 0;
    if ( slides.length && !slides[0].attributes ) {
      version = 0;
    }
    fetchData( version )
      .then((d: any) => {
        if ( d ) dispatch(setSlidesData(d));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fetchData]);

  const updateText = ( swiper: any ) => {
    const page = Number(swiper.realIndex);
    setText(slides.length ? slides[page].attributes.description : '');
    setSwiperReference(swiper);
  };

  return (
    <>
      <Swiper
        className='Swiper' autoplay={true} effect='fade' spaceBetween={0} slidesPerView={1} loop={true}
        onSlideChange={updateText} pagination={{
          el: '.swiper-pagination', type: 'bullets', clickable: true
        }}
        onSwiper={updateText}
      >
        {
          slides.map((item: any, index: any ) => {
            if ( !item.attributes ) return null;
            return (
              <SwiperSlide
                className='Swiper__slide'
                key={index}
                virtualIndex={index}>
                <div
                  className='Swiper__content'
                  style={{
                    backgroundImage: `url(${item.attributes.img_picture})`
                  }}>
                </div>
              </SwiperSlide>
            );
          })
        }
        <SlideAddons text={text} swiper={swiperReference} />
      </Swiper>
    </>
  );
};

export default Slide;
