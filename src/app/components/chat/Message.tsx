import { colors } from "@/app/colors";
import { Box, Typography } from "@mui/material"

const Message = ({ message, sender }: { message: string, sender: string }) => {

  return (
    <div style={{
      display: "flex",
      justifyContent: sender === "user" ? "flex-end": "flex-start"
    }}>
      <Box sx={{
        color: "black",
        backgroundColor: colors.englishViolet,
        maxWidth: "50%",
        minHeight: "32px",
        borderRadius: "5px",
        alignContent: "center",
        margin: "4px",
        padding: "8px",
      }}>
        <Typography variant="body1" sx={{ width: "100%", whiteSpace: "initial" }} >
          { message }
        </Typography>
      </Box>
    </div>
  )
}

export default Message;