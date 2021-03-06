'use strict';

exports.__esModule = true;
exports.ImageCounts = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getSlideCount = function getSlideCount(spec) {
  var dots;
  dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  return dots;
};

var ImageCounts = exports.ImageCounts = function (_React$Component) {
  _inherits(ImageCounts, _React$Component);

  function ImageCounts() {
    _classCallCheck(this, ImageCounts);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ImageCounts.prototype.render = function render() {

    var dotCount = getSlideCount({
      slideCount: this.props.slideCount,
      slidesToScroll: this.props.slidesToScroll
    });

    return _react2.default.createElement(
      'div',
      { className: this.props.countClass },
      this.props.currentSlide + 1 + '/' + dotCount
    );
  };

  return ImageCounts;
}(_react2.default.Component);