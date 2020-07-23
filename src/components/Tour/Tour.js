import React, { Component } from 'react';
import './Tour.scss';

class Tour extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    const { city, img, name, info, id } = this.props.tour;
    const { rmvTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="city tour" />
          <span className="close-btn" onClick={() => rmvTour(id)}>
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{' '}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.showInfo ? <p>{info}</p> : null}
        </div>
      </article>
    );
  }
}

export default Tour;
