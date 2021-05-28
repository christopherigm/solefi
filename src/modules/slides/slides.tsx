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
import fetctData from 'src/modules/slides/redux/fetch-slides-data';
import 'src/modules/slides/slides.scss';
import WhiteTextBox from 'src/modules/white-text-box/white-text-box';

const Slide = (): React.ReactElement => {
  const dispatch = useDispatch();
  const slides = useSelector((state: any) => state.slides);
  const attr = slides.data ? slides.data.attributes ? slides.data.attributes : {} : {};
  const included = slides.included ? slides.included : [];
  const [text, setText] = useState('');

  useEffect(() => {
    const version = attr.version ? attr.version : 0;
    fetctData( version )
      .then((d: any) => {
        if ( d ) dispatch(setSlidesData(d));
      })
      .catch((error) => {
        console.log(error);
      });
    setText(included.length ? included[0].attributes.description : '');
  }, [fetctData]);

  return (
    <>
      <Swiper
        className='Swiper'
        autoplay={true}
        effect='fade'
        onSlideChangeTransitionEnd={(e: any) => {
          setText(included.length ? included[Number(e.activeIndex)].attributes.description : '');
        }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          included.map((item: any, index: any ) => {
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
            backgroundImage: 'url(/white-triangle.png)'
          }}
        ></div>
        <WhiteTextBox text={text}/>
      </Swiper>
    </>
  );
};

export default Slide;
