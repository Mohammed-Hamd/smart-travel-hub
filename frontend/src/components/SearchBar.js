import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`Searching for "${query}"`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destinations..."
      />
      <button className="button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
