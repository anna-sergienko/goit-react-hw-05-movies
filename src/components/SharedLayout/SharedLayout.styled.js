import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";


export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0px;

`;


export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
box-shadow: 0px 0px 20px -3px #000000;
  > nav {
    display: flex;
  }
`;


export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
  }
`;

