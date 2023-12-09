import React, { useState, useEffect } from 'react';

const InputWithOptions = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  // Simulated list of options (replace with your data source)
  const allOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Kiwi'];

  useEffect(() => {
    // Filter options based on the input value
    const filtered = allOptions.filter(option =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredOptions(filtered);
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setShowOptions(true);
  };

  const handleSelectOption = (option) => {
    setInputValue(option);

    setShowOptions(false);
    // You can perform additional actions when an option is selected
  };

  return (
    <div className="w-full md:w-1/3">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="label"
      >
        Label
      </label>

      <input
        id="label"
        className="h-10 w-full border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search..."
      />

      <ul className={`${inputValue && showOptions && filteredOptions.length > 0 ? 'absolute' : 'hidden'} w-full md:w-1/3 border border-black/30`}>
        {filteredOptions.map((option, index) => (
          <li className="w-full hover:cursor-pointer hover:bg-slate-200 h-8 bg-transparent px-3 py-1 text-sm"
            key={index} onClick={() => handleSelectOption(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>

  );
};

export default InputWithOptions;
