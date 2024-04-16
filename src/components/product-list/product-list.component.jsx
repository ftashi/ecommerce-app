// ProductList.js
import React, { useState } from 'react';
import SearchBar from '../search-bar/search-bar.component';
import { searchProducts } from '../../firebase.utils';

const ProductList = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    const products = await searchProducts(searchTerm);
    setSearchResults(products);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} /> 
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
