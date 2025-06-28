import styled from 'styled-components';
import { Link } from 'react-router-dom';
import COLORS from './colors';

export const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const HeroSection = styled.section`
  position: relative;
  color: #fff;
  text-align: center;
  padding: 60px 20px;
  background-image: url(${(p) => p.bg});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const NavbarWrapper = styled.nav`
  background-color: ${COLORS.primary};
  border-bottom: 1px solid ${COLORS.secondary};
  padding: 15px 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const NavItem = styled(Link)`
  margin-right: 20px;
  font-weight: 500;
  color: ${COLORS.lightBg};
  text-decoration: none;
  &:hover {
    color: ${COLORS.accent};
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  width: 180px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${COLORS.accent};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SearchBarContainer = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding: 8px;
  margin-right: 8px;
`;

export const MapBox = styled.div`
  margin-top: 20px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid ${COLORS.secondary};
  overflow: hidden;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  tbody tr:nth-child(odd) {
    background-color: ${COLORS.lightBg};
  }
`;

export const Th = styled.th`
  border: 1px solid ${COLORS.secondary};
  padding: 0.5rem;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid ${COLORS.secondary};
  padding: 0.5rem;
`;

export const Select = styled.select`
  margin-left: 10px;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid ${COLORS.secondary};
`;
