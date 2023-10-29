import { Component } from 'react';
import './Button.scss';

type ButtonProps = {
  onClick?: () => void;
};

class Button extends Component<ButtonProps> {
  render() {
    const label = 'Search';

    return (
      <button type="button" className="button" onClick={this.props.onClick}>
        {label}
      </button>
    );
  }
}

export default Button;
