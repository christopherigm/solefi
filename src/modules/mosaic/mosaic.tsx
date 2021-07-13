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
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const imageFile1 = '/team.jpg';
  const imageUrl1 = `${prefix}${imageFile1}`;
  const imageFile2 = '/clients.jpg';
  const imageUrl2 = `${prefix}${imageFile2}`;
  const imageFile3 = '/relax.jpg';
  const imageUrl3 = `${prefix}${imageFile3}`;

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
        imagen1 = {imageUrl1}
        text2 = 'Más de 20 proyectos exitosos, más de 10 clientes satisfechos'
        imagen2 = {imageUrl2}
        text3 = 'Tu puedes hacer esto, sin preocuparte por tus finanzas, basta con dar un click en nuestra Plataforma.'
        imagen3 = {imageUrl3}
      />
    </>
  );
};

export default Mosaic;
