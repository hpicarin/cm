import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { cilCalendar, cilUser, cilFolder, cilLockLocked, cilHealing } from '@coreui/icons/dist/cjs/free'

const _nav = []

const _nav_d = [
  {
    component: CNavItem,
    name: 'Patients',
    to: '/patients',
    icon: <CIcon icon={cilHealing} customClassName="nav-icon" />,
  },
]

const _nav_a = [
  {
    component: CNavGroup,
    name: 'Entities',
    to: '/entity',
    icon: <CIcon icon={cilFolder} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Roles',
        to: '/entity/roles',
      },
      {
        component: CNavItem,
        name: 'Users',
        to: '/entity/users',
      },
    ],
  },
]

const _nav_group = {
  patient: _nav,
  doctor: _nav_d,
  admin: _nav_a
}

export default _nav_group
