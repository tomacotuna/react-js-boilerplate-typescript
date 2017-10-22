import * as React from 'react';
import './style.css';

export interface Props {
  title: string;
  theme: string;
}

class Field extends React.Component<Props, object> {
  constructor (props: any) {
    super(props);

    this.state = {
      value: ''
    };
  }

    public handleOnChange(event: any): void {
        this.setState({ value: event.target.value });
        console.log(this.state);
    }

    render () {
        return (
            <div className="field">
                <div className={'field-text ' + ((this.props.theme === "black") ? 'field-dark' : 'field-light')}>{this.props.title}</div>
                <input
                    type="text"
                    onChange={e => this.handleOnChange(e)}
                />
            </div>
        );
    }
}

export default Field;