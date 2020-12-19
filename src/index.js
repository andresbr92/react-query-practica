import React from 'react';
import ReactDOM from 'react-dom';
import Example from './App';
import {QueryClient, QueryClientProvider, } from 'react-query'

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <Example />
      
    </QueryClientProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
