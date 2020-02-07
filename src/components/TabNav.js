import React from "react";
import {Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

const TabNav = () => {
return(
    <div>
        <Menu>
            <Menu.Item key="home">
                <NavLink exact to='/' activeClassName='nav-links'>
                    Home
                </NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink exact to='/character' activeClassName='nav-links'>
                    Characters
                </NavLink>
            </Menu.Item>
        </Menu>
    </div>
)
}

export default TabNav;