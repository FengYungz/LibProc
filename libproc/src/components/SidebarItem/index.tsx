import React from 'react'
import { Container } from './styles'

interface SidebarItemProps {
  Icon: React.ElementType;
  Text: string;
  link: string; // Nova propriedade link do tipo string
}

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, Text, link }) => {
  return (
    <Container>
      <a href={link}>
        <Icon />
        {Text}
      </a>
    </Container>
  );
};

export default SidebarItem