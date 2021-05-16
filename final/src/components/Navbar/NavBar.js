import React, {Component} from 'react';
import pic from './DARTFIX.jpg';
import './NavBar.css'
import {Button} from "../Button"
import { MenuItems } from './MenuItems';
import {Link} from 'react-router-dom';
import ContactUs from '../../pages/ContactUs';

class NavBar extends Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    callbackfunction = () => {
        this.setState({clicked: this.state.clicked})
        return {ContactUs};
    }
    
    render(){
        return(
            <nav className="NavBarLook">
                <h1 className = "suggestionLogo">DartFix
                <img className = "logoSetup" src ={pic} ></img>
                

                <i className = "fab fa-react">
                    </i></h1>
                    <div className = "department" onClick = {this.handleClick}>
                        <i className = {this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                    </div>

                    <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index} className = "nav-links" className={item.cName}>
                                        <Link className = "nav-links" to={item.path}>
                                            <span>{item.title}</span>
                                        </Link>
                                </li>
                            )
                        })}
                    </ul>
                    {/* <Button onClick={this.callbackfunction}>Contact Us!</Button> */}

            </nav>
        )


    }
}
export default NavBar;