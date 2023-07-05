import React from 'react';
import { Dropdown, DropdownItem, KebabToggle, DropdownPosition } from '@patternfly/react-core';

const DeleteMenu = ({ handleModalToggle }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggle = (isOpen) => {
    setIsOpen(isOpen);
  };
  const onFocus = () => {
    const element = document.getElementById('toggle-kebab');
    element.focus();
  };
  const onSelect = () => {
    setIsOpen(false);
    onFocus();
  };
  const dropdownItems = [
    <DropdownItem
      ouiaId="delete-menu-option"
      key="delete"
      component="button"
      onClick={handleModalToggle}
    >
      Delete
    </DropdownItem>,
    <DropdownItem
      ouiaId="linkbacktooldpage"
      key="link"
    >
      *link back to old page
    </DropdownItem>];
  return (
    <React.Fragment>
      <Dropdown
        ouiaId="dekete-action"
        onSelect={onSelect}
        position={DropdownPosition.right}
        toggle={<KebabToggle id="toggle-kebab" onToggle={onToggle} />}
        isOpen={isOpen}
        isPlain
        dropdownItems={dropdownItems}
      />
    </React.Fragment>
  );
};

export default DeleteMenu;

