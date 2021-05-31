import React, {
  useEffect
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import setHowItWorksData from 'src/modules/how-it-works/redux/how-it-works-actions';
import fetchData from 'src/modules/how-it-works/redux/fetch-how-it-works-data';
import Title from 'src/modules/title/title';
import SubTitle from 'src/modules/sub-title/sub-title';
import HowItWorksItem from 'src/modules/how-it-works/how-it-works-item/how-it-works-item';

const SquareItWork = (): React.ReactElement => {
  const dispatch = useDispatch();
  const howItWorks = useSelector((state: any) => state.howItWorks);
  const attr = howItWorks.data ? howItWorks.data.attributes ? howItWorks.data.attributes : {} : {};
  const included = howItWorks.included ? howItWorks.included : [];

  useEffect(() => {
    const version = attr.version ? attr.version : 0;
    fetchData( version )
      .then((d: any) => {
        if ( d ) dispatch(setHowItWorksData(d));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fetchData]);

  return (
    <div className='container row'>
      { attr.title ? <Title text = {attr.title} /> : null }
      { attr.sub_title ? <SubTitle text = {attr.sub_title} /> : null }
      {
        included.map((item: any, index: any ) => {
          return (
            <>
              <HowItWorksItem
                key={index}
                number={index}
                attr={item.attributes}
              />
            </>
          );
        })
      }
    </div>
  );
};

export default SquareItWork;
