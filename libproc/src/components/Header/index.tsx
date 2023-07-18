import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = (state: boolean) => setSidebar(state)

  return (
    <Container>
      <FaBars onClick= {() => showSiderbar(!sidebar)} />
      {sidebar && <Sidebar changeState={showSiderbar} active={sidebar} />}
    </Container>
  )
}

export default Header