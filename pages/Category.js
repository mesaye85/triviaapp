import React from 'react';

const Category = ({ onCategorySelect }) => {
  const categories = ['History', 'Geography', 'Sports', 'Science & Tech', 'Entertainment', 'ChatGPT'];

  return (
    <div>
      <h1>Select a Category</h1>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <button onClick={() => onCategorySelect(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
