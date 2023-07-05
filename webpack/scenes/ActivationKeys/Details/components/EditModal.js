import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalVariant,
  Button,
  Form,
  FormGroup,
  TextInput,
  Checkbox,
  NumberInput,
  TextArea,
  Stack,
  StackItem,
} from '@patternfly/react-core';

const EditModal = ({ akDetails }) => {
  const {
    name, description, usageCount, unlimitedHosts,
  } = akDetails;

  const [nameValue, setNameValue] = useState(name);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [usageCountValue, setUsageCountValue] = useState(usageCount);
  const [isUnlimited, setUnlimited] = useState(unlimitedHosts);

  useEffect(() => {
    setNameValue(name);
    setDescriptionValue(description);
    setUsageCountValue(usageCount);
    setUnlimited(unlimitedHosts);
  }, [name, description, usageCount, unlimitedHosts]);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };
  const handleNameInputChange = (value) => {
    setNameValue(value);
  };
  const handleDescriptionInputChange = (value) => {
    setDescriptionValue(value);
  };
  const onMinus = () => {
    const newValue = (usageCount || 0) - 1;
    setUsageCountValue(newValue);
  };
  const onChange = (event) => {
    const { value } = event.target.value;
    setUsageCountValue(value === '' ? value : +value);
  };
  const onPlus = () => {
    const newValue = (usageCount || 0) + 1;
    setUsageCountValue(newValue);
  };

  return (
    <>
      <Button ouiaId="ak-edit-button" variant="secondary" onClick={handleModalToggle}>
        Edit
      </Button>
      <Modal
        ouiaId="ak-edit-modal"
        variant={ModalVariant.small}
        title="Edit activation key"
        description={`Select attributes for ${akDetails.name}`}
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        actions={[
          <Button ouiaId="edit-modal-save-button" key="create" variant="primary" form="modal-with-form-form" onClick={handleModalToggle}>
            Save
          </Button>,
          <Button ouiaId="cancel-button" key="cancel" variant="link" onClick={handleModalToggle}>
            Cancel
          </Button>,
        ]}
      >
        <Form isHorizontal>
          <FormGroup
            label="Name"
          >
            <TextInput
              ouiaId="ak-name-input"
              id="ak-name-input"
              type="text"
              value={nameValue}
              onChange={handleNameInputChange}
            />
          </FormGroup>
          <FormGroup
            label="Host limit"
          >
            <Stack hasGutter>
              <StackItem>
                <NumberInput value={usageCountValue} onMinus={onMinus} onChange={onChange} onPlus={onPlus} inputName="input" inputAriaLabel="number input" minusBtnAriaLabel="minus" plusBtnAriaLabel="plus" allowEmptyInput />
              </StackItem>
              <StackItem>
                <Checkbox
                  ouiaId="unlimited-checkbox"
                  id="unlimited-checkbox"
                  label="Unlimited"
                  isChecked={isUnlimited}
                />
              </StackItem>
            </Stack>
          </FormGroup>
          <FormGroup
            label="Description"
          >
            <TextArea
              id="ak-description"
              type="text"
              defaultValue="Description empty"
              value={descriptionValue}
              onChange={handleDescriptionInputChange}
            />
          </FormGroup>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;

EditModal.propTypes = {
  akDetails: PropTypes.shape({
    name: PropTypes.string,
    usageCount: PropTypes.number,
    description: PropTypes.string,
    unlimitedHosts: PropTypes.bool,
  }),
};

EditModal.defaultProps = {
  akDetails: {},
};
