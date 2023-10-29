import { Component } from 'react';
import './Button.scss';

type ButtonProps = {
  onClick?: () => void;
  children: string;
};

class Button extends Component<ButtonProps> {
  render() {
    return (
      <button type="button" className="button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
