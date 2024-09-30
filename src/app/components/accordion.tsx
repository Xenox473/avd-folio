import { motion, AnimatePresence } from "framer-motion";
import { SkillsDisplay } from "./skillsDisplay";
import { colors } from "../colors";
import { Typography } from "@mui/material";

type AccordionProps = {
  role: {
    institution: string,
    title: string,
    year: string,
    skills: string[]
  },
  index: number,
  expanded: number | false,
  setExpanded: (index: number | false) => void
}

const headerStyles = {
  padding: "1rem",
  color: "white",
  borderRadius: "5px",
  marginBottom: "1rem",
  cursor: "pointer",
  border: "1px solid",
}

export const Accordion = ({ role, index, expanded, setExpanded }: AccordionProps) => {
  const isOpen = index === expanded;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ 
          borderColor: isOpen ? colors.periwinkle : colors.englishViolet
        }}
        onClick={() => setExpanded(isOpen || role.skills.length == 0 ? false : index)}
        style={headerStyles}
      >
        <div style={{ display: "flex", alignItems: "center", flexDirection: 'column'}}>
          <Typography variant="h6" style={{ margin: 0 }} fontFamily="monospace">{role.title}</Typography>
          <Typography variant="subtitle1" style={{ margin: 0 }} fontFamily="monospace">{role.institution}</Typography>
          <Typography variant="subtitle2" style={{ margin: 0 }} fontFamily="monospace">{role.year}</Typography>
        </div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <SkillsDisplay skills={role.skills} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};