import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class StikyTrial extends Component {
  state = {
    isCollapsed: false
  };

  renderStikyTrial = () => {
    const classes = classNames('StikyTrial__layer', {
      'StikyTrial__layer--hidden': !this.state.isCollapsed
    });
    return (
      <div className={classes}>
        <h6 className="StikyTrial__title">
          14 días GRATIS
        </h6>
        <span className="StikyTrial__description">
          Obten 14 días gratis en nuestra plataforma y comprueba todos sus beneficios
        </span>
        <a className="waves-effect waves-light btn white blue-text">
          Obtener
        </a>
      </div>
    );
  }

  render() {
    return (
      this.renderStikyTrial()
    );
  }
}

StikyTrial.defaultProps = {
  title: 'Ver video'
};

StikyTrial.propTypes = {
  title: PropTypes.string
};
