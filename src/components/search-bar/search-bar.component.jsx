import './search-bar.styles.scss'


import React, { useState, useEffect } from 'react';
import { searchProducts } from '../../utils/firebase.utils';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm.trim() === '') {
        setSearchResults([]);
        return;
      }
      const products = await searchProducts(searchTerm);
      setSearchResults(products);
    };

    fetchSearchResults();
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectProduct = (product) => {
    setSearchTerm('');
    // Do something with the selected product, such as navigating to its details page
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      <div className="search-results">
        {searchResults.map((product) => (
          <div
            key={product.id}
            className="search-result-item"
            onClick={() => handleSelectProduct(product)}
          >
            {product.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
