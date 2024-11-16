import { FormControl, IconButton, Input, InputLabel } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { colors } from "@/app/colors";
import { useState } from "react";
import Message from "./Message";

type MessageProps = {
  sender: string,
  message: string
}
    
const Chat = () => {
  const [ question, setQuestion ] = useState('');
  const [ messageHistory, setMessageHistory ] = useState<MessageProps[]>([]);

  async function handleSubmit() {
    const newMessageHistory = [...messageHistory, { sender: "user", message: question }]
    
    setMessageHistory(newMessageHistory)
    setQuestion('');

    fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: question})
    }).then((response) => {
      response.json().then((answer) => {
        setMessageHistory([...newMessageHistory, { sender: "bot", message: answer }])
      })
    })
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div style={{
      position:"relative",
      width: "50%",
      height: "75%",
      border: 'solid 2px',
      borderRadius: '5px',
      background: colors.periwinkle,
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{ 
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        flex: 12,
        gap: 5
      }}>
        { messageHistory.map((message) => (
          <Message key={message.message} message={message.message} sender={message.sender} />
        ))}
      </div>
      <div style={{ width: '100%', padding: '8px', flex: 1 }}>
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