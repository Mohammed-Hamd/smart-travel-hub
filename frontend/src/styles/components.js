import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const NavbarWrapper = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 15px 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const NavItem = styled(Link)`
  margin-right: 20px;
  font-weight: 500;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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
  background-color: #007bff;
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

export const MapPlaceholderBox = styled.div`
  margin-top: 20px;
  height: 200px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;

  tbody tr:nth-child(odd) {
    background-color: #f6f8fa;
  }
`;

export const Th = styled.th`
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 0.5rem;
`;

export const Select = styled.select`
  margin-left: 10px;
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
