import React from 'react';

const categories = [
  'History',
  'ChatGPT',
  'Sports',
  'Science tech',
  'Geography',
  'Entertainment'
];

const Category = ({ onCategorySelect }) => {
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
