import React from "react";

function Filter({
  searchText,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
