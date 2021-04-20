import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Video extends Component {
  state = {
    isCollapsed: false,
    selectedItem: null,
    videoPath: null
  };

  openVideo = () => {
    this.refs.vidRef.load();
    this.refs.vidRef.play();
    this.setState({
      videoPath: '/static/brand-video/video.mp4',
      isCollapsed: !this.state.isCollapsed
    });
  }

  closeVideo = () => {
    this.refs.vidRef.load();
    this.refs.vidRef.pause();
    this.setState({
      isCollapsed: !this.state.isCollapsed
    });
    return;
  }

  playVideo = () => {
    this.refs.vidRef.play();
  }

  renderButtonPlay = () => {
    return (
      <a className='Video__btn' onClick={() => this.openVideo()}></a>
    );
  }

  renderButtonClose = () => {
    return (
      <a className="Video__btn-close waves-effect waves-light btn deep-orange darken-2"
        onClick={() => this.closeVideo()}>
        <i className="material-icons right">close</i>
        Cerrar
      </a>
    );
  }

  renderVideoLayer = () => {
    const classes = classNames('Video__layer', {
      'Video__layer--hidden': !this.state.isCollapsed
    });
    return (
      <div className={classes}>
        <video ref="vidRef" className="Video__player"
          onClick={this.playVideo.bind(this)}>
          <source src={this.state.videoPath} type="video/mp4"></source>
        </video>
        {this.renderButtonClose()}
      </div>
    );
  }

  render() {
    return (
      <div className="Video">
        {this.renderButtonPlay()}
        {this.renderVideoLayer()}
      </div>
    );
  }
}

Video.defaultProps = {
  title: 'Ver video'
};

Video.propTypes = {
  title: PropTypes.string
};
