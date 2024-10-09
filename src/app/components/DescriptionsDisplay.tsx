import { Typography } from "@mui/material";
import { colors } from "../colors";

const DescriptionsDisplay = ({ descriptions }: { descriptions: string[] }) => {
  return (
    <ul>
      {descriptions.map((description, index) => (
        <li>
          <Typography variant='body1' fontFamily={'monospace'} color={colors.periwinkle} fontSize={'1.5rem'}>
            {description}
          </Typography>
        </li>
      ))}
    </ul>
  )
};

export default DescriptionsDisplay