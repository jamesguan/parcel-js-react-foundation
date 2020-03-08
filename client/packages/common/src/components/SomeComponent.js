import React, { useState } from 'react';

const SomeComponent = () => {
  const [count, incrementCount] = useState(0);
  return (
    <div>
      I am a functional component
    </div>
  );
};

export default SomeComponent;