import React from 'react';
import SearchBar from '@theme-original/SearchBar';

// import { configure } from 'instantsearch.js';
// import { searchBox } from 'instantsearch.js/es/widgets';

import docsearch from '@docsearch/js';
import '@docsearch/css';

// export default function SearchBarWrapper(props) {
//   return (
//     <>
//       <SearchBar {...props} />
//     </>
//   ); 
// }

// const { search } = configure({
//   apiKey: 'aa89dd1d83c67f3432bfee0e3be1b994',
//   indexName: 'DocHub_AlgoliaDocSearch',
// });

// const searchBoxWidget = searchBox({
//   container: '#searchbox',
//   placeholder: 'Search...',
//   autofocus: false,
// });

// search.addWidget(searchBoxWidget);
// search.start();



docsearch({
  container: '#docsearch',
  appId: 'JILNIO12KM',
  indexName: 'DocHub_AlgoliaDocSearch',
  apiKey: 'YOUR_SEARCH_API_KEY',
});