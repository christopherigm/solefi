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

const Slide = (): React.ReactElement => {
  const dispatch = useDispatch();
  const slidesData = useSelector((state: any) => state.slides);
  const attr = slidesData.data ? slidesData.data.attributes ? slidesData.data.attributes : {} : {};
  const slides = slidesData.data && slidesData.data.relationships &&
    slidesData.data.relationships.items && slidesData.data.relationships.items.data ?
    slidesData.data.relationships.items.data : [];
  const [text, setText] = useState('');
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const triangleFile = '/white-triangle.png';
  const triangleURL = `${prefix}${triangleFile}`;

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

  const updateText = ( e: any ) => {
    const page = Number(e.realIndex);
    setText(slides.length ? slides[page].attributes.description : '');
  };

  return (
    <>
      <Swiper
        className='Swiper' autoplay={true} effect='fade'
        spaceBetween={0} slidesPerView={1} loop={true}
        onSlideChange={updateText}
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
        <div
          className='Swiper__triangle'
          style={{
            backgroundImage: `url(${triangleURL})`
          }}
        ></div>
        <WhiteTextBox text={text}/>
      </Swiper>
    </>
  );
};

export default Slide;
