import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

class FruitItem extends Component {
    removeItem = () => {
        this.props.dispatch({ 
            type: 'DELETE_FRUITS', 
            payload: this.props.basketItem.id
        });
        // axios({
        //     method: 'DELETE',
        //     url: `/fruit/${this.props.basketItem.id}`
        // }).then((response) => {
            this.getFruit();
        // }).catch((error) => {
        //     console.log(error);
        //     alert('Unable to delete item');
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

    render() {
        return (
            <li>
                <span>{this.props.basketItem.fruit}</span>
                <button className="removeButton" onClick={this.removeItem}>REMOVE</button>
            </li>
        )
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FruitItem);