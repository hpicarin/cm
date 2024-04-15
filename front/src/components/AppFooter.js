import React from 'react'
import { CFooter } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHeart } from '@coreui/icons/dist/cjs/free'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="http://eskina9.com" target="_blank" rel="noopener noreferrer">
          HP
        </a>
        <span className="ms-1">&copy; 2024 Home.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Made with </span>
        <CIcon icon={cilHeart} size="sm" style={{ color: "red" }} />
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
