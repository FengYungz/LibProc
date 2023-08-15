import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = (state: boolean) => setSidebar(state)

  return (
    <div>
      <Container>
        <FaBars onClick={() => showSidebar(!sidebar)} />
        {sidebar && <Sidebar changeState={showSidebar} active={sidebar} />}
      </Container>
      <div style={{ paddingTop: '100px' }}>
      </div>
    </div>
  )
}

export default Header
