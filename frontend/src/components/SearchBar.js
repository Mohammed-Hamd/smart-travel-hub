import React, { useState } from 'react';
import { SearchBarContainer, SearchInput, Button } from '../styles/components';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`Searching for "${query}"`);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destinations..."
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchBarContainer>
  );
}

export default SearchBar;
