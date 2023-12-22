import React from 'react';
import NavBarListItem from './NavBarListItem';
import { NavLink } from 'react-router-dom';

const navBarItems = [
    {
        icon: "change_circle",
        title: "ST",
        description: "Smoke test",
        link: "/"
    },
    {
        icon: "swap_horizontal_circle",
        title: "RT",
        description: "Regression test",
        link: "/RT"
    },
    {
        icon: "account_circle",
        title: "APIT",
        description: "API test",
        link: "/APIT"
    },
    {
        icon: "offline_bolt",
        title: "LT",
        description: "Load test",
        link: "/LT"
    },
    {
        icon: "supervised_user_circle",
        title: "STT",
        description: "Stress test",
        link: "/STT"
    },
    {
        icon: "incomplete_circle",
        title: "IT",
        description: "Intergation test",
        link: "/IT"
    },
    {
      icon: "check_circle",
      title: "Results",
      description: "Overview",
      link: "/Results"
  }
];

function NavBar(){
    return (
        <div className="nav-bar">
          <ul className="nav-bar-list">
            {navBarItems.map((navBarItem) => (
              <li key={navBarItem.title}>
                <NavLink className='rote-link' to={navBarItem.link}>
                  <NavBarListItem navBarProps={navBarItem} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      );
};

export default NavBar;