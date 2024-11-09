import React from 'react';
import { Box, Typography } from '@mui/material';
import UserChart from './charts/UserChart';
import ContentChart from './charts/ContentChart';
import EngagementChart from './charts/EngagementChart';
import BlockchainChart from './charts/BlockchainChart';

function Analytics() {
  return (
    <Box padding={3}>
      <Typography variant="h4" align='center' gutterBottom>Analytics</Typography>
      
      <Box display="flex" flexDirection="row" justifyContent="space-around" flexWrap="wrap">
        {/* User Management */}
        <Box flex={1} minWidth="300px" margin={2}>
          <UserChart />
        </Box>

        {/* Content Moderation */}
        <Box flex={1} minWidth="300px" margin={2}>
          <ContentChart />
        </Box>
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="space-around" flexWrap="wrap">
        {/* Engagement Overview */}
        <Box flex={1} minWidth="300px" margin={2}>
          <EngagementChart />
        </Box>

        {/* Blockchain Overview */}
        <Box flex={1} minWidth="300px" margin={2}>
          <BlockchainChart />
        </Box>
      </Box>
    </Box>
  );
}

export default Analytics;
