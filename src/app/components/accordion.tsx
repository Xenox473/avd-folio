import { motion, AnimatePresence } from "framer-motion";
import { SkillsDisplay } from "./skillsDisplay";
import { colors } from "../colors";

type AccordionProps = {
  role: {
    company: string,
    role: string,
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
        onClick={() => setExpanded(isOpen ? false : index)}
        style={headerStyles}
      >
        {role.company} | {role.role} | {role.year}
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