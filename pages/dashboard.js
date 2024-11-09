import React from "react";

import { Container, Typography, Grid2, Paper } from "@mui/material";
import UserManagement from "./components/UserManagement";
import ContentModeration from "./components/ContentModeration";
import EngagementOverview from "./components/EngagementOverview";
import BlockchainActivityOverview from "./components/BlockchainActivityOverview";
import Analytics from "./components/Analytics";

export default function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid2 container spacing={3}>
        {/* User Management */}
        <Grid2 item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <UserManagement />
          </Paper>
        </Grid2>

        {/* Content Moderation */}
        <Grid2 item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <ContentModeration />
          </Paper>
        </Grid2>

        {/* Engagement Overview */}
        <Grid2 item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <EngagementOverview />
          </Paper>
        </Grid2>

        {/* Blockchain Activity Overview */}
        <Grid2 item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <BlockchainActivityOverview />
          </Paper>
        </Grid2>

        {/* Analytics */}
        <Grid2 item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Analytics />
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
}
