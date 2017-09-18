'use strict';

import React from 'react';
import classnames from 'classnames';

var getDotCount = function (spec) {
  var dots;
  dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  return dots;
};


export class ImageCounts extends React.Component {
  render() {

    var dotCount = getDotCount({
      slideCount: this.props.slideCount,
      slidesToScroll: this.props.slidesToScroll
    });

    return (
      <div className={this.props.countClass}>
        {`${this.props.currentSlide + 1}/${dotCount}`}
      </div>
    );
  }
}
