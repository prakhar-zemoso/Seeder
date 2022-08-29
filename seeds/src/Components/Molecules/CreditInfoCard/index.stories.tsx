import Box from "@mui/material/Box";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CreditInfoCard from ".";
import Calender from "./../../../../public/images/calender/data-block/bg+icon.svg";
import  CreditIcon from "./../../../../public/images/bookCard/card/data/data-block/bg+icon.svg";
import PercentageIcon from "./../../../../public/images/percentage/card/data/data-block/bg+icon.svg";




export default {
    title: 'Molecules/CreditInfoCard',
    component: CreditInfoCard,
  } as ComponentMeta<typeof CreditInfoCard>;
  
  const Template: ComponentStory<typeof CreditInfoCard> = (args) => (
    <Box sx={{ width: '700px' }}>
      <CreditInfoCard {...args} />
    </Box>
  );
  
  export const Main = Template.bind({});
  Main.args = {
    cards: [
      {
        icon: Calender,
        label: 'Term Cap',
        value: '12 months',
      },
      {
        icon: CreditIcon,
        label: 'Available Credit',
        value: '$880.0k',
      },
      {
        icon:PercentageIcon,
        label: 'Max interest rate',
        value: '12.00%',
      },
    ],
  };
  