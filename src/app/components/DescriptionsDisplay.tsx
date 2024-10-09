import { Typography } from "@mui/material";
import { colors } from "../colors";

const DescriptionsDisplay = ({ descriptions }: { descriptions: string[] }) => {
  return (
    <ul>
      {descriptions.map((description, index) => (
        <li key={index}>
          <Typography variant='body1'>
            {description}
          </Typography>
        </li>
      ))}
    </ul>
  )
};

export default DescriptionsDisplay