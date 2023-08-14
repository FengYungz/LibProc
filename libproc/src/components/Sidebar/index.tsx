import React, { useRef, useState } from 'react'
import JsonItems from './items.json'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
} from 'react-icons/fa'

import {BiBookBookmark} from 'react-icons/bi'

import SidebarItem from '../SidebarItem'

const Sidebar = ({active, changeState}: {changeState: (state:boolean) => void, active: boolean}) => {

  const closeSidebar = () => {
    changeState(false)
  }


// Logica do dropDown
const [isActive, setIsActive] = useState(false)
const [aulaSelect, setAulaSelect] = useState("")
const onclick = (aula: string) => {
  setIsActive(!isActive)
  setAulaSelect(aula)
}

console.log(isActive);

  return (
    <Container>
      <FaTimes onClick={closeSidebar} />  
      <Content>
      <div className="home">
      <SidebarItem Icon={FaHome} Text="Home" link="/" />
      </div>
      <div className="conteudo">
        {JsonItems.map(item=> (
            <><button key={item.title} onClick={ () => onclick(item.title)} className='menuTopicos'>{item.title}</button>
              {isActive && aulaSelect === item.title && (<nav
            className={`menu`}
          >
            {item.items.map(sideBarItem => (
              <SidebarItem Icon={BiBookBookmark} Text={sideBarItem.text} link={sideBarItem.link}/>
            ))}
          </nav>)}
            </>
          ))}
      </div>
      </Content>
    </Container>
  )
}

export default Sidebar