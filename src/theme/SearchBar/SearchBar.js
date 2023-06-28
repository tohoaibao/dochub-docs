import React from 'react';
import SearchBar from '@theme-original/SearchBar';

import { configure } from 'instantsearch.js';
import { searchBox } from 'instantsearch.js/es/widgets';

// export default function SearchBarWrapper(props) {
//   return (
//     <>
//       <SearchBar {...props} />
//     </>
//   ); 
// }

const { search } = configure({
  apiKey: 'aa89dd1d83c67f3432bfee0e3be1b994',
  indexName: 'DocHub_AlgoliaDocSearch',
});

const searchBoxWidget = searchBox({
  container: '#searchbox',
  placeholder: 'Search...',
  autofocus: false,
});

search.addWidget(searchBoxWidget);
search.start();