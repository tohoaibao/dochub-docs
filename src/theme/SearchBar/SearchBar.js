// import React from 'react';
// import SearchBar from '@theme-original/SearchBar';

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
  indexName: 'crawler_DocHub_AlgoliaDocSearch',
  apiKey: 'aa89dd1d83c67f3432bfee0e3be1b994',
  searchParameters: {
    facetFilters: ['language:en', 'version:1.0.0'],
  },
  insights: true,
});

// docsearch({
//   appId: 'R2IYF7ETH7',
//   apiKey: '599cec31baffa4868cae4e79f180729b',
//   indexName: 'docsearch',
//   searchParameters: {
//     facetFilters: ['language:en', 'version:1.0.0'],
//   },
//   insights: true,
// });