import React, { useEffect, useState } from 'react';
import Square from 'src/modules/square/square';
import { APIGet } from 'src/api/communicator';

const SquareSolutions = (): React.ReactElement => {
  const [data, setData] = useState({
    data: [],
    included: []
  });

  useEffect(() => {
    APIGet('info-grids/?filter[name]=our-solutions&include=items')
      .then((d: any) => {
        setData(d);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [APIGet]);

  return (
    <div className='container row'>
      {
        data.included.map((item: any) => {
          return (
            <Square
              key = {item.id}
              icon = {item.attributes.icon}
              color = 'amber-text text-lighten-1'
              title = {item.attributes.title}
              text = {item.attributes.description} />
          );
        })
      }
    </div>
  );
};

export default SquareSolutions;
