import React, {Component} from 'react';
import IntToHexString from './StringUtil';

class ColorSlider extends Component {
  render() {
    return (
      <div>
        <span className='color_name'>{this.props.label}</span>
        <input type='range'
               min={this.props.min || 0}
               max={this.props.max || 255}
               className='slider'
               value={this.props.value}
               onChange={(event) => this.props.onChange(event.target.value)}
        />
        <input className='number_input'
               value={this.props.value}
               onChange={(event) => this.props.onChange(event.target.value)}
        />
        <span className='color_slider_hex'>{IntToHexString(this.props.value)}</span>
      </div>
    )
  }
}

export default ColorSlider;
