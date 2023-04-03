import './Error.css';

import React from 'react';

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage:props.errorMessage
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState === this.state) {
            this.setState({errorMessage: this.props.errorMessage})
        }
    }
    render() {
        return (
            <div class="error" >
                <p id="error">{this.state.errorMessage}</p>
            </div>
        );
    }
}

export default Error;

