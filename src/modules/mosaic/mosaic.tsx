import React, {
  useEffect
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import setMosaicData from 'src/modules/mosaic/redux/mosaic-actions';
import fetctData from 'src/modules/mosaic/redux/fetch-mosaic-data';
import Title from 'src/modules/title/title';
import SubTitle from 'src/modules/sub-title/sub-title';
import MosaicItem from 'src/modules/mosaic/mosaic-item';

const Mosaic = ():React.ReactElement => {
  const dispatch = useDispatch();
  const mosaicData = useSelector((state: any) => state.mosaicData);
  const attr = mosaicData.data ? mosaicData.data.attributes ? mosaicData.data.attributes : {} : {};
  const HideShadowTitle = false;

  useEffect(() => {
    const version = attr.version ? attr.version : 0;
    fetctData( version )
      .then((d: any) => {
        if ( d ) dispatch(setMosaicData(d));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fetctData]);

  return (
    <>
      <div className='container row'>
        { attr.title ? <Title text = {attr.title} color='#2196f3' shadow={HideShadowTitle}/> : null }
        { attr.sub_title ? <SubTitle text = {attr.sub_title} /> : null }
      </div>
      <MosaicItem
        text1 = 'El mejor equipo multidiciplinario en Solefi'
        imagen1 = 'https://cdn.pixabay.com/photo/2021/04/13/06/59/woman-6174830_960_720.jpg'
        text2 = 'Más de 20 proyectos exitosos, más de 10 clientes satisfechos'
        imagen2 = 'https://cdn.pixabay.com/photo/2021/03/29/12/16/stairs-6133971_960_720.jpg'
        text3 = 'Tu puedes hacer esto, sin preocuparte por tus finanzas, basta con dar un click en nuestra Plataforma.'
        imagen3 = 'https://cdn.pixabay.com/photo/2019/04/26/15/33/child-4157865_960_720.jpg'
      />
    </>
  );
};

export default Mosaic;
