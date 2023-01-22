import { Box } from '@mui/material';
import * as React from 'react';
import { StatCard } from './components/StatCard';
import './style.css';

export default function App() {
  return (
    // usage
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '600px',
        margin: '100px auto',
      }}
    >
      <StatCard
        colorScheme="#40a9ff"
        value="87.4"
        percentageValue={54.9}
        label="Reports Generated"
        mainIcon={<i className="bx bx-cog"></i>}
        subIcon={<i className="bx bx-chevron-up"></i>}
      />

      <StatCard
        colorScheme="#375277"
        value="45.8K"
        percentageValue={62.7}
        label="Profiles"
        mainIcon={<i className="bx bx-desktop"></i>}
        subIcon={<i className="bx bx-right-arrow-alt"></i>}
      />

      <StatCard
        colorScheme="#10a566"
        value="17.2K"
        percentageValue={54.9}
        label="Bugs Fixed"
        mainIcon={<i className="bx bx-bug"></i>}
        subIcon={<i className="bx bx-right-arrow-alt"></i>}
      />

      <StatCard
        colorScheme="#ff566c"
        value="63.2K"
        percentageValue={72.1}
        label="Total Views"
        mainIcon={<i className="bx bxs-cog"></i>}
        subIcon={<i className="bx bx-chevron-up"></i>}
      />
    </Box>
  );
}
