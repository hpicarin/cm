import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

import { CBadge, CNavLink, CSidebarNav, CNavItem } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilCalendar } from '@coreui/icons/dist/cjs/free'
import { useAuth } from '../hooks/useAuth'

export const AppSidebarNav = ({ items }) => {
  const navLink = (name, icon, badge, indent = false) => {
    return (
      <>
        {icon
          ? icon
          : indent && (
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>
          )}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item, index, indent = false) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
      <Component as="div" key={index}>
        {rest.to || rest.href ? (
          <CNavLink {...(rest.to && { as: NavLink })} {...rest}>
            {navLink(name, icon, badge, indent)}
          </CNavLink>
        ) : (
            navLink(name, icon, badge, indent)
          )}
      </Component>
    )
  }

  const navGroup = (item, index) => {
    const { component, name, icon, items, to, ...rest } = item
    const Component = component
    return (
      <Component compact as="div" key={index} toggler={navLink(name, icon)} {...rest}>
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index, true),
        )}
      </Component>
    )
  }

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <CSidebarNav as={SimpleBar}>
      <CNavItem customClassName="nav-icon">
        <CNavLink href="#/calendar" style={{ cursor: 'pointer' }}>
          <CIcon icon={cilCalendar} customClassName="nav-icon" /> Calendar
        </CNavLink>
      </CNavItem>

      <CNavItem customClassName="nav-icon">
        <CNavLink href="#/profile" style={{ cursor: 'pointer' }}>
          <CIcon icon={cilUser} customClassName="nav-icon" /> Profile
        </CNavLink>
      </CNavItem>

      {items &&
        items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}


      <CNavItem customClassName="nav-icon">
        <CNavLink onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <CIcon icon={cilLockLocked} customClassName="nav-icon" /> Logout
        </CNavLink>
      </CNavItem>
    </CSidebarNav>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
