// ** Dropdowns Imports
import { Fragment, useState } from 'react'

import UserDropdown from './UserDropdown'
import "../navbar/navbar.scss"

// ** Third Party Components
import { Sun, Moon, Menu } from 'react-feather'
import { NavItem, NavLink, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap' 
import ReactCountryFlag from "react-country-flag"
const NavbarUser = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props
  const [toggler, setToggler] = useState(false)
  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
   
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  const handleToggle = () => {
    setToggler(!toggler)
  }
  return (
    <Fragment>
      <ul className='navbar-nav d-xl-none d-flex align-items-center'>
        <NavItem className='mobile-menu mr-auto'>
          <NavLink className='nav-menu-main menu-toggle hidden-xs is-active' onClick={() => setMenuVisibility(true)}>
            <Menu className='ficon' />
          </NavLink>
        </NavItem>
      </ul>
      {/* <div className='bookmark-wrapper align-items-center'>
        <NavItem className='d-none d-lg-block float-right'>
          <NavLink className='nav-link-style ' style={{color:"#fff"}}>
            <ThemeToggler />
          </NavLink>
        </NavItem>
      </div> */}
      <div>
  
  <Dropdown
    isOpen={toggler}
     toggle={() => handleToggle()} 
     className="dropdwon-menu"
  >
    <DropdownToggle >
    

    <ReactCountryFlag className="country-flag" countryCode="us"  style={{
                    width: '1.5em',
                    height: '2em'
                }} svg />
                    <span className="ml-1 country-name">English</span>
    </DropdownToggle>
    <DropdownMenu >
      <DropdownItem >
      <ReactCountryFlag className="country-flag" countryCode="fr" style={{
                    width: '1.5em',
                    height: '2em'
                }} svg />
                    <span className="ml-1 country-name">French</span>
      </DropdownItem>
      <DropdownItem >
      <ReactCountryFlag className="country-flag" countryCode="de" style={{
                    width: '1.5em',
                    height: '2em'
                }} svg />
                    <span className="ml-1 country-name">German</span>
      </DropdownItem>
      <DropdownItem >
      <ReactCountryFlag className="country-flag" countryCode="pt" style={{
                    width: '1.5em',
                    height: '2em'
                }} svg />
                    <span className="ml-1 country-name">Portuguese</span>
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</div>
      <ul className='nav navbar-nav align-items-center float-right'>
        <UserDropdown />
      </ul>
    </Fragment>
  )
}
export default NavbarUser
