import React, { useEffect, useState } from 'react';
import { APIGet } from 'src/api/communicator';
import Title from 'src/modules/title/title';
import InfoGridItem from 'src/modules/info-grid/info-grid-item/info-grid-item';

const InfoGrid = (): React.ReactElement => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    APIGet('info-grids/?filter[name]=our-solutions&include=items')
      .then((d: any) => {
        const included = d.included;
        const data = d.data[0];
        const title = data.attributes.title;
        setItems(included);
        setTitle(title);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [APIGet]);

  return (
    <div className='container row'>
      { title ? <Title text = {title} /> : null }
      {
        items.map((item: any) => {
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
