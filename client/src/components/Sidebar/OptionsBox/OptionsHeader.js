import React from 'react';
import styled from 'styled-components/macro';
import { wideFont } from '../../shared/helpers';

const Header = styled.span`
  ${wideFont};
  
  display: block;
  padding: 12px;
  text-align: center;
  color: ${props => props.theme.mutedText};
`;

const OptionsHeader = () => <Header>options</Header>;

export default OptionsHeader;
