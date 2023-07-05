import React from 'react';
import { Modal, ModalVariant, Button, Icon, Title, Flex } from '@patternfly/react-core';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';


const DeleteModal = ({ isModalOpen, handleModalToggle }) => (
  <React.Fragment>
    <Modal
      ouiaId="ak-delete-modal"
      variant={ModalVariant.small}
      title={[
        <Flex>
          <Icon status="warning">
            <ExclamationTriangleIcon />
          </Icon>
          <Title ouiaId="ak-delete-header" headingLevel="h5" size="2xl">
            Delete activation key?
          </Title>
        </Flex>,
      ]}
      isOpen={isModalOpen}
      onClose={handleModalToggle}
      actions={[
        <Button ouiaId="delete-button" key="delete" variant="danger" onClick={handleModalToggle}>
          Delete
        </Button>,
        <Button ouiaId="cancel-button" key="cancel" variant="link" onClick={handleModalToggle}>
          Cancel
        </Button>,
      ]}
    >
      Activation Key will no longer be available for use. This operation cannot be undone.
    </Modal>
  </React.Fragment>
);

export default DeleteModal;
