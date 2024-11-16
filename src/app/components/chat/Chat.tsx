import { FormControl, IconButton, Input, InputLabel, Skeleton } from "@mui/material";
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
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function handleSubmit() {
    const newMessageHistory = [...messageHistory, { sender: "user", message: question }]
    
    setMessageHistory(newMessageHistory)
    setQuestion('');
    setIsLoading(true);

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
    }).then(() => { setIsLoading(false) })
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div style={{
      position:"relative",
      border: 'solid 2px',
      borderRadius: '5px',
      background: colors.periwinkle,
      display: "flex",
      flexDirection: "column",
      whiteSpace: "nowrap",
      height: "50vh",
    }}>
      <div style={{ 
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        flex: 12,
        gap: 5,
        height: "50vh",
        overflowY: "scroll",
        padding: "8px"
      }}>
        { messageHistory.map((message) => (
          <Message key={message.message} message={message.message} sender={message.sender} />
        ))}
        { isLoading && <Skeleton variant="rounded" height={64} width="50%"/>}
      </div>
      <div style={{ width: '100%', padding: '8px', flex: 1 }}>
        <FormControl 
          fullWidth
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <InputLabel>Ask a question</InputLabel>
          <Input
            sx={{ flex: 2 }}
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={(event) => handleKeyDown(event)}
            disabled={isLoading}
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