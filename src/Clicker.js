import React, {Component} from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {num: 1}
        this.handleRandom = this.handleRandom.bind(this);
    }

    handleRandom() {
        let rand = Math.floor(Math.random() * 10) + 1
        this.setState({num: rand})
    }

    render() {
        return (
            <div>
                <h1> Number is : {this.state.num}</h1>
                {this.state.num === 5
                    ? <h2>You win</h2>
                    : <button onClick={this.handleRandom}>Random Number</button>}
            </div>
        )
    }
}

export default Clicker;