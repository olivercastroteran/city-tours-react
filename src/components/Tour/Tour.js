import React, { Component } from 'react';
import './Tour.scss';

class Tour extends Component {
  render() {
    return (
      <article className="tour">
        <div className="img-container">
          <img
            src="https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="city-img"
          />
          <span className="close-btn">
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>City</h3>
          <h4>Name</h4>
          <h5>
            info{' '}
            <span>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            maxime.
          </p>
        </div>
      </article>
    );
  }
}

export default Tour;
