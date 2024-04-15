import React from 'react'

// CM
const Profile = React.lazy(() => import('./views/cm/Profile'))
const CCalendar = React.lazy(() => import('./views/cm/Calendar'))
const Roles = React.lazy(() => import('./views/cm/Roles'))
const Users = React.lazy(() => import('./views/cm/Users'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/profile', name: 'Profile', element: Profile },
  { path: '/calendar', name: 'Calendar', element: CCalendar },
  { path: '/entity/roles', name: 'Roles', element: Roles },
  { path: '/entity/users', name: 'Users', element: Users },
  { path: '/patients', name: 'Patient', element: Users },

]

export default routes
