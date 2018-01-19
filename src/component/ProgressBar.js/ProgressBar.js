import React, {Component} from 'react';

export default class ProgressBar extends Component {
  static displayName = 'ProgressBar';

  componentDidUpdate = () => {
    let {percent} = this.props;
    let deg = 360 * percent / 100;
    let element = this.refs.progress.getDOMNode();
    element.style.transform = 'rotate(-'+ deg +'deg)';
  };

  render() {
    let percent = Math.floor(this.props.percent);
    let classes = classSet({
      "progress-pie-chart": true,
      "gt-50": percent > 50
    });
    return (
      <div className="progress clearfix">
        <div className={classes}>
          <div className="ppc-progress">
            <div className="ppc-progress-fill" ref="progress"/>
          </div>
          <div className="ppc-percents">
            <div className="pcc-percents-wrapper">
              <span>{percent + '%'}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}