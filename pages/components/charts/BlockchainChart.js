import React, { useEffect, useRef } from 'react';
import { useDashboardData } from '../../../services/api'; // Assuming you have this hook set up properly
import { Box, Typography, CircularProgress } from '@mui/material';
import Chart from 'chart.js/auto';

function BlockchainChart() {
  const { data, error } = useDashboardData(); // Fetching data from the API
  const dailyChartRef = useRef(null);
  const monthlyChartRef = useRef(null);

  useEffect(() => {
    if (data && dailyChartRef.current && monthlyChartRef.current) {
      const dailyCtx = dailyChartRef.current.getContext('2d');
      const monthlyCtx = monthlyChartRef.current.getContext('2d');

      const { daily, monthly } = data?.dashboard?.blockchainMetrics || {};

      // Function to format chart data
      const formatChartData = (chartData) => {
        if (!chartData) return { labels: [], data: [] };

        const labels = chartData.map(item => item.timestamp);
        const dataPoints = chartData.map(item => item.count);
        return { labels, data: dataPoints };
      };

      const dailyData = formatChartData(daily?.chartData);
      const monthlyData = formatChartData(monthly?.chartData);

      // Create or update the daily chart
      if (dailyCtx.chart) {
        dailyCtx.chart.destroy();
      }

      const dailyChart = new Chart(dailyCtx, {
        type: 'bar',
        data: {
          labels: dailyData.labels,
          datasets: [{
            label: 'User Count (Daily)',
            data: dailyData.data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }],
        },
        options: {
          responsive: true,
          scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true },
          },
        },
      });

      // Create or update the monthly chart
      if (monthlyCtx.chart) {
        monthlyCtx.chart.destroy();
      }

      const monthlyChart = new Chart(monthlyCtx, {
        type: 'bar',
        data: {
          labels: monthlyData.labels,
          datasets: [{
            label: 'User Count (Monthly)',
            data: monthlyData.data,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          }],
        },
        options: {
          responsive: true,
          scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true },
          },
        },
      });

      // Store the chart instance on the canvas for future reference
      dailyCtx.chart = dailyChart;
      monthlyCtx.chart = monthlyChart;

      // Cleanup function to destroy charts when the component is unmounted or re-rendered
      return () => {
        if (dailyCtx.chart) dailyCtx.chart.destroy();
        if (monthlyCtx.chart) monthlyCtx.chart.destroy();
      };
    }
  }, [data]); // Re-run when data changes

  if (error) return <Typography color="error">Error loading data.</Typography>;
  if (!data) return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress />
    </Box>
  );

  return (
    <Box padding={3}>
      <Typography variant="h4" align='center' gutterBottom>Blockchain Analytics</Typography>
      <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <Typography variant="h5" gutterBottom>Daily User Metrics</Typography>
        <canvas ref={dailyChartRef} width="400" height="200"></canvas>

        <Typography variant="h5" gutterBottom>Monthly User Metrics</Typography>
        <canvas ref={monthlyChartRef} width="400" height="200"></canvas>
      </Box>
    </Box>
  );
}

export default BlockchainChart;