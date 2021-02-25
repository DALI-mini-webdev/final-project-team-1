import React, {Component} from 'react';
import './navBar.css'
import {Button} from "../Button"
import { MenuItems } from './MenuItems';

class navBar extends Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    callbackfunctiion = () => {
        this.setState({clicked: this.state.clicked})
    }
    
    render(){
        return(
            <nav className = "BarButtons">
                <h1 className = "suggestionLogo">Suggestions for Students<i className = "fab fa-react">
                    </i></h1>
                    <div className = "department" onClick = {this.handleClick}>
                        <i className = {this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                    </div>
                    <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href ={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <Button onClick={this.callbackfunction}>Contact Us!</Button>

            </nav>
        )


    }
}
export default navBar;