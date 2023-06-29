import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Title,
  TextContent,
  Text,
  TextVariants,
  MenuToggle,
  Breadcrumb,
  BreadcrumbItem,
  Grid,
  GridItem,
  Label,
  Split,
  SplitItem,
  Flex,
  FlexItem,
  Panel,
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import './ActivationKeyDetails.scss';


const edit = () => <div>Edit</div>;
const kebab = () => <div>Kebab</div>;

const ActivationKeyDetails = ({ match }) => (
  <div >
    <Panel className="ak-details-header">
      <div className="breadcrumb-bar-pf4">
        <Breadcrumb ouiaId="ak-breadcrumbs" className="breadcrumb-display">
          <BreadcrumbItem className="breadcrumb-list" to="/activation_keys">Activation keys</BreadcrumbItem>
          <BreadcrumbItem to="#" isActive>
            Activation Key Details {match?.params?.id}
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Grid>
        <GridItem span={8} className="ak-name-wrapper">
          <Title ouiaId="ak-title" headingLevel="h5" size="2xl" className="ak-name-truncate">
            Activation Key Details {match?.params?.id}
          </Title>
          <Split hasGutter style={{ display: 'inline-flex' }}>
            <SplitItem>
              <Label>
                59/Unlimited
              </Label>
            </SplitItem>
          </Split>
        </GridItem>
        <GridItem offset={8} span={4}>
          <Flex>
            <FlexItem align={{ default: 'align-right' }}>
              <Split>
                <SplitItem>
                  <Button ouiaId="ak-edit-button" variant="secondary" onClick={edit}>
                    Edit
                  </Button>
                </SplitItem>
                <MenuToggle variant="plain" aria-label="plain kebab" onClick={kebab}>
                  <EllipsisVIcon />
                </MenuToggle>
              </Split>
            </FlexItem>
          </Flex>
        </GridItem>
      </Grid>
      <div style={{ clear: 'both' }}>
        <br />
        <TextContent>
          <Text ouiaId="ak-description" component={TextVariants.p}>
            Activation Key Description
          </Text>
        </TextContent>
      </div>
    </Panel>
  </div>
);

export default ActivationKeyDetails;


ActivationKeyDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

ActivationKeyDetails.defaultProps = {
  match: {},
};
