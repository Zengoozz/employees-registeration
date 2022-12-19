import React from 'react'
import { faDisplay, faHandsHolding, faMugSaucer, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function NavBar() {

  const navs = [
    {
      name: 'Workplace',
      icon: faDisplay,
    },
    {
      name: 'Holidays',
      icon: faMugSaucer,
    },
    {
      name: 'Employees',
      icon: faUserGroup,
    },
    {
      name: 'Inbound Requests',
      icon: faHandsHolding
    }
  ]

  const navsIcons = navs.map((nav, index) => (
    <span
      key={index}
      className={'nav-bar__icon ' + (nav.name).toLowerCase()}>
      <FontAwesomeIcon
        icon={nav.icon} />
      <p className='nav__title'>{nav.name}</p>
    </span>
  ))

  return (
    <div className='nav-bar__container'>
      <div className="icons__container">
        <span className='nav-bar__icon'>
          <DashboardIcon fontSize='large' />
          <p className='nav__title'>Dashboard</p>
        </span>
        {navsIcons}
      </div>
    </div>
  )
}
