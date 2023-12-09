import React, { useState } from 'react';

const NestedSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [nestedSelectedOption, setNestedSelectedOption] = useState('');

  const options = {
    'Fruits': ['Apple', 'Banana', 'Cherry'],
    'Vegetables': ['Potato', 'Carrot', 'Broccoli']
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setNestedSelectedOption('');
  };

  const handleNestedSelectChange = (event) => {
    setNestedSelectedOption(event.target.value);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5 text-center">You selected: {nestedSelectedOption}</h1>

      <div className="flex justify-center w-full gap-x-5">
        <select value={selectedOption} onChange={handleSelectChange}
          className="border-2 px-3 py-2"
        >
          <option value="">Select a category</option>
          {Object.keys(options).map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>

        {selectedOption && (
          <select value={nestedSelectedOption} onChange={handleNestedSelectChange}
            className="border-2 px-3 py-2"
          >
            <option value="">Select an item</option>
            {options[selectedOption].map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default NestedSelect;