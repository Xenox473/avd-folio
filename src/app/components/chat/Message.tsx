import { colors } from "@/app/colors";
import { Box } from "@mui/material"

const Message = ({ message, sender }: { message: string, sender: string }) => {

  return (
    <div style={{
      display: "flex",
      justifyContent: sender === "user" ? "flex-end": "flex-start"
    }}>
      <Box sx={{
        color: "black",
        backgroundColor: colors.englishViolet,
        width: "40%",
        minHeight: "32px",
        borderRadius: "5px",
        alignContent: "center",
        margin: "4px",
        padding: "8px",
      }}>
        { message }
      </Box>
    </div>
  )
}

export default Message;