import * as React from 'react';
import './style.css';

export interface Props {
  text: string;
  colour: string;
  largeText: boolean;
  filled: boolean;
  width: string;
  onClick: any;
}

class Button extends React.Component<Props, object> {
  render () {
    let styleOverride = (this.props.width) ? {width: this.props.width} : {};

    return (
      <div 
          className={'button ' + ((this.props.filled) ? 'filled' : '') + ' ' + 
                      ((this.props.colour) ? this.props.colour : 'dark') + ' ' + 
                      ((this.props.largeText) ? 'large-text' : '')} 
          style={styleOverride} 
          onClick={this.props.onClick}>
        {(this.props.text) ? ( <p>{this.props.text}</p> ) : ''}
      </div>
    );
  }
}

export default Button;
