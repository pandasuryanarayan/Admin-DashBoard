// Content Moderation.js
import React from 'react';
import { useDashboardData } from '../../services/api';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress, Grid2 } from '@mui/material';

function ContentModeration() {
  const { data, error } = useDashboardData();

  if (!data) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Error loading data</Typography>;
  }

  // Check if the response status is success and extract metrics
  const { status, dashboard } = data;
  if (status !== 'success') {
    return <Typography color="error">Failed to fetch data</Typography>;
  }

  const { daily, monthly, allTime } = dashboard.contentMetrics;

  const renderTable = (title, metrics) => (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Metric</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(metrics)
            .filter(([key]) => key !== 'chartData') // Exclude chartData
            .map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );  

  return (
    <Box padding={3}>
      <Typography variant="h4" align="center" gutterBottom>Content Performance Overview </Typography>

      <Grid2 container spacing={3}>
        <Grid2 item xs={12} sm="auto">
          <Typography variant="h5" align="center" gutterBottom>Daily</Typography>
          {renderTable('Daily', daily)}
        </Grid2>

        <Grid2 item xs={12} sm="auto">
          <Typography variant="h5" align="center" gutterBottom>Monthly</Typography>
          {renderTable('Monthly', monthly)}
        </Grid2>

        <Grid2 item xs={12} sm="auto">
          <Typography variant="h5" align="center" gutterBottom>All-Time</Typography>
          {renderTable('All-Time', allTime)}
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default ContentModeration;
