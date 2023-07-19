import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({active, changeState}: {changeState: (state:boolean) => void, active: boolean}) => {

  const closeSidebar = () => {
    changeState(false)
  }

  return (
    <Container /*sidebar={active}*/>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" link="/home" />
        <SidebarItem Icon={FaEnvelope} Text="Memoria" link="/teste" />

      </Content>
    </Container>
  )
}

export default Sidebar