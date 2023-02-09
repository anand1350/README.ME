import React, { Component } from 'react';
import Burger from '../../Components/Burger';



class BurgerBuilder extends Component{
    render() {
        return (
            <div>
                <Burger/>
                <div>Орцны удирдлага</div>
            </div>
        )
    }
}

export default BurgerBuilder;