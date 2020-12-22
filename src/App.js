import React from "react";
import "./App.css";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.updateInput = this.updateInput.bind(this);
    }

    updateInput = event => {
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <div className="form">
                <div className="control">
                    <input
                        className="input is-large"
                        type="text"
                        placeholder="hex to rgb, e.g. 00bcd4"
                        onChange={this.updateInput}
                        value={this.props.value}
                    ></input>
                </div>
                <p className="help">{this.props.rgb}</p>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.updateInputState = this.updateInputState.bind(this);
    }

    hexToRGB = hex => {
        hex = "0x" + hex;
        let r = (hex >> 16) & 0xff;
        let g = (hex >> 8) & 0xff;
        let b = hex & 0xff;
        return `rgb(${r}, ${g}, ${b})`;
    };

    updateInputState = event => {
        // console.log(event)
        this.setState({
            input: event.trim(),
            rgb: event.length === 6 ? this.hexToRGB(event) : ""
        });
    };

    state = {
        input: "",
        rgb: ""
    };

    render() {
        return (
            <div className="app" style={{ background: this.state.rgb }}>
                <Form
                    onChange={this.updateInputState}
                    value={this.state.input}
                    rgb={this.state.rgb}
                />
            </div>
        );
    }
}

export default App;
