import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class FruitSelector extends Component {

    // Currying that returns a function
    addFruit = (fruitName) => (event) => {
        this.props.dispatch({type: 'POST_FRUITS', payload: {fruit: fruitName}});
        // axios({
        //     method: 'POST',
        //     url: '/fruit',
        //     data: { fruit: fruitName }
        // }).then((response) => {
            this.getFruit();
        // }).catch((error) => {
        //     console.log(error);
        //     alert('Unable to save fruit');
        // });
    }

    getFruit() {
        this.props.dispatch({ type: 'FETCH_FRUITS' });
        // axios({
        //     method: 'GET',
        //     url: '/fruit'
        // }).then((response) => {
        //     const action = { type: 'SET_BASKET', payload: response.data };
        //     this.props.dispatch(action);
        // }).catch((error) => {
        //     alert('Unable to get basket from server');
        // });
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