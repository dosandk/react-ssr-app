import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => console.error(1)}>Click me</button>
    </div>
  );
};

export default HomePage;
