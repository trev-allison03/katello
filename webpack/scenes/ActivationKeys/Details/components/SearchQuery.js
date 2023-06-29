import React from 'react';
import { SearchInput } from '@patternfly/react-core';

const SearchQuery = () => {
  const [value, setValue] = React.useState('');
  const onChange = (value) => {
    setValue(value);
  };
  return <SearchInput placeholder="Search Query" value={value} onChange={(_event, value) => onChange(value)} onClear={() => onChange('')} />;
};

export default SearchQuery;
