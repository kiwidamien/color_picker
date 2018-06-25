import React, {Component} from 'react';
import ColorSlider from './ColorSlider';
import IntToHexString from './StringUtil';
import './css/style.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        red: 22,
        green: 45,
        blue: 110
    };
  }

  render(){

    const rgbString = '#' + IntToHexString(this.state.red) + IntToHexString(this.state.green)
                          + IntToHexString(this.state.blue);
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Color Picker</h1>
        <div className='wide_center'>
          <div className='left'>
            <ColorSlider label='red' value={this.state.red} onChange={(value) => this.setState({red: value})}/>
            <ColorSlider label='green' value={this.state.green} onChange={(value) => this.setState({green: value})}/>
            <ColorSlider label='blue' value={this.state.blue} onChange={(value) => this.setState({blue: value})}/>
          </div>
          <div className="color_div" style={{backgroundColor: rgbString}}>
          </div>
        </div>

        <div className='color_label'>
          {rgbString}
        </div>
      </div>
    )
  }
}

export default ColorPicker;
