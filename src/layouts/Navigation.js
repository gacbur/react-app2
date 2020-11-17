import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css'

const List = [
    { name: 'Home', path: '/', exact: true },
    { name: 'Todo', path: '/todo' },
    { name: 'Contact', path: '/contact' },
]

class Navigation extends React.Component {

    state = {
        menuShow: false
    }

    handleShowMenu = () => {
        this.setState({
            menuShow: !this.state.menuShow
        })
        console.log("przycisk działa")
    }

    render() {

        const navList = List.map(item => (
            <li key={item.name}>
                <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
            </li>
        ))

        return (
            <div className="nav">
                <div className="hamburger-cnt">
                    <button onClick={this.handleShowMenu} className="nav-hamburger">
                        ☰</button>
                </div>
                <ul className={`${this.state.menuShow ? "show" : ""}`}>
                    {navList}
                </ul>
            </div>
        )
    }
}

export default Navigation;