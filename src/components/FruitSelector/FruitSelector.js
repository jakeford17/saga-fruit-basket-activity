import React, { Component } from 'react';
import { connect } from 'react-redux';

class FruitSelector extends Component {

    // Currying that returns a function
    addFruit = (fruitName) => (event) => {
        this.props.dispatch({ type: 'POST_FRUITS', payload: { fruit: fruitName } });
        this.getFruit();
    }

    getFruit() {
        this.props.dispatch({ type: 'FETCH_FRUITS' });
    }

    // Displays the fruit selection buttons on the DOM
    render() {
        return (
            <div>
                <button onClick={this.addFruit('Apple')}>ADD <span role="img" aria-label="apple">&#127822;</span></button>
                <button onClick={this.addFruit('Orange')}>ADD <span role="img" aria-label="orange">&#x1F34A;</span></button>
                <button onClick={this.addFruit('Watermelon')}>ADD <span role="img" aria-label="watermelon">&#127817;</span></button>
                <button onClick={this.addFruit('Grapes')}>ADD <span role="img" aria-label="grapes">&#127815;</span></button>
            </div>
        )
    }
}

export default connect()(FruitSelector);