import { FormControl, IconButton, Input, InputLabel } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { colors } from "@/app/colors";
import { useState } from "react";
    
const Chat = () => {
  const [ question, setQuestion ] = useState('');

  const handleSubmit = () => {
    console.log(question);
    setQuestion('');
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div style={{ position:"relative", width: "50%", height: "75%", border: 'solid 2px', borderRadius: '5px', background: colors.periwinkle }}>
      <div style={{ position: "absolute", bottom: 0, width: '100%', padding: '8px' }}>
        <FormControl 
          fullWidth
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <InputLabel htmlFor="my-input">Ask a question</InputLabel>
          <Input
            sx={{ flex: 2 }}
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={(event) => handleKeyDown(event)}
          />
          <IconButton type="submit" size="large" onClick={() => handleSubmit()}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </div>
    </div>
  );
}

export default Chat;