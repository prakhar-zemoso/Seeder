import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid/Grid';
import React from 'react'
import TextData from '../SingleDataCard';

interface CardProps {
  icon : React.ReactNode;
  label: string;
  value: string
}

interface CreditInfoCardProps{
  cards : CardProps[];
}

const CreditInfoCard: React.FC<CreditInfoCardProps> = ({ cards }) => {
  return (
    <Box
      sx={{
        padding: '32px',
        backgroundColor: ' #201F24',
        border: '1px solid #28272B',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        width: '78%'
      }}
    >
      <Grid container spacing={2}>
        {cards.map((card) => {
          return (
            <Grid key={card.label} item xs={4}>
              <TextData
                icon={card.icon}
                label={card.label}
                value={card.value}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CreditInfoCard;
