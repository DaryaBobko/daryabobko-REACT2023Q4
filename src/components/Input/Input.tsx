import { ChangeEvent, Component } from 'react';
import './Input.scss';

type InputProps = {
  onSearchChange: (value: string) => void;
  value: string;
};

class Input extends Component<InputProps> {
  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onSearchChange(event.target.value);
  };

  render() {
    const placeholder = 'Type here';

    return (
      <input
        className="input"
        placeholder={placeholder}
        value={this.props.value}
        onChange={this.onChange}
      />
    );
  }
}

export default Input;
