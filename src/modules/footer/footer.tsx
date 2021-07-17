import React, {
  useEffect,
  useRef
} from 'react';
import { useSelector } from 'react-redux';
import * as M from 'materialize-css';
import EnvironmentVariables from 'src/constants/EnvironmentVariables';
import Contact from 'src/modules/contact/contact';
import 'src/modules/footer/footer.scss';

const env = EnvironmentVariables.getInstance();
const isMobileApp = env.isMobileApp;

const Footer = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const versionRef: any = useRef(null);

  useEffect(() => {
    M.Tooltip.init(versionRef.current, {});
  });

  return (
    <footer className='page-footer blue Footer'>
      <Contact/>
      <div className='footer-copyright'>
        <div className='container Footer__info'>
          <div
            className='Footer__version'
            ref={versionRef}
            data-position='top'
            data-tooltip={`(${system.platform.os} - ${env.branchName})`}>
            <span>V {env.version}</span>
            { !isMobileApp ?
              <a
                href='/static/app.apk'
                className='white-text Footer__app'>
                <span> - </span>
                <i className='material-icons'>android</i>
              </a> : null
            }
          </div>
          <span>With ♥ by Edgar y Chris G.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
