import React from 'react';
import SomeComponent from '@myproject/common/src/components/SomeComponent';
//const { SomeComponet } = Components;
const Home = () => (
  <>
    <div>This is the home page. Below is a component from the common package</div>
    <SomeComponent />
  </>
);

export default Home;