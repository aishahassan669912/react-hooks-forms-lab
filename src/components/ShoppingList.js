import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

const initialItems = [
  { id: uuid(), name: "Apple", category: "Produce" },
  { id: uuid(), name: "Milk", category: "Dairy" },
  { id: uuid(), name: "Cake", category: "Dessert" },
  { id: uuid(), name: "Carrots", category: "Produce" },
];

function ShoppingList() {
  const [items, setItems] = useState(initialItems);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const itemsToDisplay = items.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" || item.category === selectedCategory;
    const searchMatch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return categoryMatch && searchMatch;
  });

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter
        searchText={searchText}
        onSearchChange={setSearchText}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
