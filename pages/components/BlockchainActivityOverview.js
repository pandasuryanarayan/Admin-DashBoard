import React from "react";
import { useDashboardData } from "../../services/api";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Grid2,
} from "@mui/material";

function BlockchainActivityOverview() {
  const { data, error } = useDashboardData();

  if (!data) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Error loading data</Typography>;
  }

  const { status, dashboard } = data;
  if (status !== "success") {
    return <Typography color="error">Failed to fetch data</Typography>;
  }

  const { daily, monthly, allTime } = dashboard.blockchainMetrics;

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
            .filter(([key]) => key !== "chartData" && key != "totalChains") // Exclude chartData
            .map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box padding={3}>
      <Typography variant="h4" align="center" gutterBottom>
        Blockchain Activity Overview
      </Typography>

      <Grid2 container spacing={3}>
        <Grid2 item xs={12} sm="auto">
          <Typography variant="h5" align="center" gutterBottom>
            Daily
          </Typography>
          {renderTable("Daily", daily)}
        </Grid2>

        <Grid2 item xs={12} sm="auto">
          <Typography variant="h5" align="center" gutterBottom>
            Monthly
          </Typography>
          {renderTable("Monthly", monthly)}
        </Grid2>

        <Grid2 item xs={12} sm="auto">
          <Typography variant="h5" align="center" gutterBottom>
            All-Time
          </Typography>
          {renderTable("All-Time", allTime)}
        </Grid2>
      </Grid2>

      {/* Display totalChains inline below metrics */}
      {allTime.totalChains && (
        <Box marginTop={3}>
          <Typography variant="h6">
            Available Blockchains:{" "}
            {allTime.totalChains.map((chain) => `⦿ ${chain}`).join(" ")}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default BlockchainActivityOverview;