import React from 'react';
import { TextInputGroup, TextInputGroupMain, TextInputGroupUtilities, Button } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

const TextBox = () => {
  const [inputValue, setInputValue] = React.useState('');
  const handleInputChange = (_event, value) => {
    setInputValue(value);
  };
  const showClearButton = !!inputValue;
  const showUtilities = showClearButton;
  const clearInput = () => {
    setInputValue('');
  };
  return (<TextInputGroup>
    <TextInputGroupMain icon={<SearchIcon />} value={inputValue} onChange={handleInputChange} />
    {showUtilities && <TextInputGroupUtilities>
      {showClearButton && <Button variant="plain" onClick={clearInput} aria-label="Clear button and input">
        <TimesIcon />
                          </Button>}
    </TextInputGroupUtilities>}
          </TextInputGroup>);
};

export default TextBox;
