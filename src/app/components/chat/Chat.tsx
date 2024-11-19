import { IconButton, Input, InputAdornment, Skeleton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { colors } from "@/app/colors";
import { KeyboardEvent, useState } from "react";
import Message from "./Message";

type MessageProps = {
  sender: string,
  message: string
}
    
const Chat = () => {
  const [ question, setQuestion ] = useState('');
  const [ messageHistory, setMessageHistory ] = useState<MessageProps[]>([{
    sender: "bot",
    message: "Hi! I'm a RAG chatbot built by Abhishek using Langchain, Neo4j, Pinecone, and React. I can answer questions about Abhishek's professional experiences. You can ask me to summarize my experiences, technical skills, or personal projects."
  }]);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function handleSubmit() {
    const newMessageHistory = [{ sender: "user", message: question }, ...messageHistory]
    
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
        setMessageHistory([{ sender: "bot", message: answer }, ...newMessageHistory])
      })
    }).then(() => { setIsLoading(false) })
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div style={{ borderRadius: '5px', background: colors.periwinkle }}>
      <div style={{ display: "flex", flexDirection: "column-reverse", height: "50vh", overflowY: "scroll", padding: "8px" }}>
        {isLoading && <Skeleton variant="rounded" height={124} width="50%" />}
        {messageHistory.map((message) => (
          <Message key={message.message} message={message.message} sender={message.sender} />
        ))}
      </div>
      <Input
        sx={{ width: "100%", borderTop: "1px solid black", input: { padding: "8px" }, '&::before': { borderBottom: 'none' } }}
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        onKeyDown={(event) => handleKeyDown(event)}
        onSubmit={handleSubmit}
        placeholder="Ask a question"
        disabled={isLoading}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleSubmit}>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
}

export default Chat;