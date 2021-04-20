import slides from '../data/slides.json';
import solutions from '../data/solutions-six.json';
import hiw from '../data/how-it-works-six.json';
import numbers from '../data/by-numbers.json';

/*
 *  Middleware
 */
export const index = function( req, res ) {
  req.context.slides = slides;
  req.context.solutions = solutions;
  req.context.hiw = hiw;
  req.context.numbers = numbers;
  req.context.jsData = JSON.stringify(req.context.config);
  req.context.slidesData = JSON.stringify(slides);
  return res.render( 'home-page', req.context );
};

/*
 *  Route
 */
export default function( server ) {
  server.get('/', index);
}
