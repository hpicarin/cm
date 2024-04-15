import React, { useEffect } from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import avatar7 from 'src/assets/images/avatars/7.jpg'
import avatar8 from 'src/assets/images/avatars/8.jpg'
import avatar9 from 'src/assets/images/avatars/9.jpg'

import { useAuth } from '../../hooks/useAuth'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const AppHeaderDropdown = () => {
  const [user, setUser] = useLocalStorage("user", null);

  //setIduser(useLocalStorage("iduser"));
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    //console.log(user);
  }, []);

  return (
    <>
      <div className="d-flex mx-2 align-items-center">
        {user.rol.name} : {user.name} {user.lastname}
      </div>
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
          <CAvatar src={eval(user.avatar)} size="md" title={user.name} />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
          <CDropdownItem href="#/calendar">
            <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
              20
          </CBadge>
          </CDropdownItem>
          <CDropdownItem href="#/profile">
            <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem onClick={handleLogout} style={{ cursor: 'pointer' }}>
            <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}

export default AppHeaderDropdown
