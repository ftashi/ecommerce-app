import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`

  background: transparent;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
position: sticky;
  top: 0;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;

`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  
`;