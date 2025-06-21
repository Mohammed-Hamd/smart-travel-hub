import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    alert(`Searching for "${query}"`);
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destinations..."
        style={{ padding: '8px', marginRight: '8px' }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
