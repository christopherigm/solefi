import axios from 'axios';
import { getJSONAPIUrl } from 'js-jsonapi-tools';
import config from './config';
import parseData from './parseData';

const url = getJSONAPIUrl(config.env.api_base, 'states', {
  order: '-name'
});

export default function loadStates( data ) {
  axios.get(url)
    .then(response => {
      data.states = response.data.data;
      for (let i = 0; i < data.states.length; i++) {
        data.states[i].attributes.created = parseData(data.states[i].attributes.created);
        data.states[i].attributes.modified = parseData(data.states[i].attributes.modified);
      }
    }).catch(error => {
      console.log('err', error);
    });
}
