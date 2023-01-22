import * as React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';

const cardContentStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
};

interface StatCardProps {
  colorScheme: string;
  value: string;
  label: string;
  percentageValue: number;
  mainIcon: React.ReactNode;
  subIcon: React.ReactNode;
}

export const StatCard = ({
  colorScheme,
  value,
  label,
  percentageValue,
  mainIcon,
  subIcon,
}: StatCardProps) => {
  return (
    <Card sx={{ width: '250px', margin: '10px', backgroundColor: colorScheme }}>
      <CardContent sx={cardContentStyles}>
        <Avatar sx={{ backgroundColor: '#fff', color: colorScheme }}>
          {mainIcon}
        </Avatar>
        <Typography fontSize="1.8rem" fontWeight="bold" color="#fff">
          {value}
        </Typography>
        <Typography fontSize="0.8rem" color="#e9e9e9">
          {label}
        </Typography>
        <Typography
          sx={{ marginTop: '20px' }}
          fontSize="0.8rem"
          color="#e3e3e3"
        >
          {subIcon} {percentageValue}%
        </Typography>
      </CardContent>
    </Card>
  );
};
