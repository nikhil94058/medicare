import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const apiKey = 'AIzaSyCwA1HvDrD8rv792D8xvvbpLztXDYr4DQU';
      const cx = 'f096fa5f67d674f55';
      const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        // Redirect to the first search result
        const firstResultLink = data.items[0].link;
        window.location.href = firstResultLink;
      } else {
        console.log('No search results found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className=" flex   bg-blue-500 rounded shadow">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="border border-blue rounded bg-blue-500"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="m-2 bg-blue-500 text-black p-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
