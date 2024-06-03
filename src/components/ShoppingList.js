import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
  // Create a state variable to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event handler for the select element
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on the selected category
  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    }
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
