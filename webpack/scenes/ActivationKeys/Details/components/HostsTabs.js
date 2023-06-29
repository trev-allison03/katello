import React from 'react';
import { Tabs, Tab, TabTitleText } from '@patternfly/react-core';
import AssociatedHostsTab from './AssociatedHostsTab';
import HostGroupsTab from './HostGroupsTab';
import HostCollectionsTab from './HostCollectionsTab';

const HostsTabs = () => {
  const [activeTabKey, setActiveTabKey] = React.useState(0);
  const handleTabClick = (event, tabIndex) => {
    setActiveTabKey(tabIndex);
  };
  return (
    <div>
      <Tabs ouiaId="ak-overview-table-tabs" activeKey={activeTabKey} onSelect={handleTabClick} aria-label="Tabs in the default example" role="region">
        <Tab eventKey={0} title={<TabTitleText>Associated Hosts</TabTitleText>} aria-label="Default content - users">
          <AssociatedHostsTab />
        </Tab>
        <Tab eventKey={1} title={<TabTitleText>Host Groups</TabTitleText>}>
          <HostGroupsTab />
        </Tab>
        <Tab eventKey={2} title={<TabTitleText>Host Collections</TabTitleText>}>
          <HostCollectionsTab />
        </Tab>
      </Tabs>
      <div style={{
        marginTop: '20px',
      }}
      />
    </div>
  );
};

export default HostsTabs;
