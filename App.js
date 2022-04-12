import React from 'react';
import {Navigation} from './src/infrastructre/navigation/index';
import {BlogProvider} from './src/services/blog-context.js/BlogContext';
export default function App() {
  return (
    <BlogProvider>
      <Navigation />
    </BlogProvider>
  );
}
