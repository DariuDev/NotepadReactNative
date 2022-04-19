import React from 'react';
import {Navigation} from './src/infrastructre/navigation/index';
import {Provider} from './src/services/context/blogContext/BlogContext';
export default function App() {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}
