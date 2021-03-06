import React from 'react';
import styled from 'styled-components/macro';
import SidebarCreatePostButton from './CreatePostButton';
import SidebarCategoryList from './CategoryList';
import Options from './OptionsBox/Options'

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex-basis: 240px;
  margin-left: 24px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  background-color: ${props => props.theme.foreground};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Sidebar = ({ token }) => (
  <Wrapper>
    <Options />
    {token && <SidebarCreatePostButton />}
    <SidebarCategoryList />
  </Wrapper>
);

export default Sidebar;
