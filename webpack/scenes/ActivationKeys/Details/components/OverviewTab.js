import React from 'react';
import {
  Grid,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  GridItem,
  CardHeader,
} from '@patternfly/react-core';
import HostsTabs from './HostsTabs.js';
import RepositorySetsCard from './RepositorySetsCard.js';


const OverviewTab = () => (
  <Grid className="ak-details-tab-page" hasGutter>
    <GridItem span={6}>
      <Card ouiaId="place-holder-card">
        <CardTitle>Header</CardTitle>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </GridItem>
    <GridItem span={6}>
      <Card ouiaId="place-holder-card">
        <CardTitle>Header</CardTitle>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </GridItem>
    <GridItem className="masonry-item" span={12}>
      <Card ouiaId="hosts-place-holder-card">
        <CardHeader>
          <CardTitle>Hosts</CardTitle>
        </CardHeader>
        <CardBody>
          <HostsTabs hasBorderBottom />
        </CardBody>
      </Card>
    </GridItem>
    <GridItem className="masonry-item" span={12}>
      <Card ouiaId="hosts-place-holder-card">
        <CardHeader>
          <CardTitle>Repository sets</CardTitle>
        </CardHeader>
        <CardBody>
          <RepositorySetsCard />
        </CardBody>
      </Card>
    </GridItem>
  </Grid>
);

export default OverviewTab;
