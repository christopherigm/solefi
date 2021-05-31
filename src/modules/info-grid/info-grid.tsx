import React, {
  useEffect
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import setInfoGridData from 'src/modules/info-grid/redux/info-grid-actions';
import fetctData from 'src/modules/info-grid/redux/fetch-info-grid-data';
import Title from 'src/modules/title/title';
import SubTitle from 'src/modules/sub-title/sub-title';
import InfoGridItem from 'src/modules/info-grid/info-grid-item/info-grid-item';

const InfoGrid = (): React.ReactElement => {
  const dispatch = useDispatch();
  const infoGrid = useSelector((state: any) => state.infoGrid);
  const attr = infoGrid.data ? infoGrid.data.attributes ? infoGrid.data.attributes : {} : {};
  const included = infoGrid.included ? infoGrid.included : [];

  useEffect(() => {
    const version = attr.version ? attr.version : 0;
    fetctData( version )
      .then((d: any) => {
        if ( d ) dispatch(setInfoGridData(d));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fetctData]);

  return (
    <div className='container row'>
      { attr.title ? <Title text = {attr.title} /> : null }
      { attr.sub_title ? <SubTitle text = {attr.sub_title} /> : null }
      {
        included.map((item: any) => {
          return (
            <InfoGridItem
              key = {item.id}
              attr = {item.attributes}
            />
          );
        })
      }
    </div>
  );
};

export default InfoGrid;
