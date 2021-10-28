import { useState } from 'react';

function TodoForm({ addTask }) {
  const [userInput, setUserInput] = useState('');

  const handleChange = (a) => {
    setUserInput(a.currentTarget.value);
  };

  const handleSubmit = (b) => {
    b.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  const handleKeyPress = (c) => {
    if (c.key === 'Enter') {
      handleSubmit(c);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type='text'
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder='Input Text'
      />
      <button>Save</button>
    </form>
  );
}

export default TodoForm;
