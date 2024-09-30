"use client";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { colors } from '../colors';

const iconStyles = {
  margin: '0.5rem',
  color: colors.periwinkle,
  padding: 0,
  border: 'none',
  background: 'none',
}
const LinkDisplay = () => {
  const items = [
    {
      link: "https://fantastical.app/abhishek473-Wkvd/abhis-calendar",
      icon: EditCalendarIcon,
      tooltip: "Schedule some time to chat"
    },
    {
      link: "https://github.com/Xenox473",
      icon: GitHubIcon,
      tooltip: "Check out my Github"
    },
    {
      link: "https://www.linkedin.com/in/avd473/",
      icon: LinkedInIcon,
      tooltip: "Connect with me on LinkedIn"
    }
  ]

  return (
    <div style={{ display: 'flex', flex: 1, flexDirection: 'row-reverse'}} >
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.button
            key={index}
            onClick={() => window.open(item.link)}
            style={iconStyles}
            whileHover={{ scale: 1.2 }}
          >
            <Tooltip title={item.tooltip} arrow>
              <Icon fontSize='large'/>
            </Tooltip>
          </motion.button>
        )
      }
      )}
    </div>
  )
};

export default LinkDisplay;