'use client';

import { ThemeProvider } from "@emotion/react";
import Chat from "../components/chat/Chat";
import { myTheme } from "../myTheme";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { Container, Stack, Typography } from "@mui/material";
    
const AbotMe = () => {

  return (
    <ThemeProvider theme={myTheme}>
      <ResponsiveAppBar />
      <Stack alignItems="center" gap={5} minHeight={"100%"}>
        <div style={{ flex: 1 }}>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Abo<span style={{ textDecoration: 'line-through' }}>u</span>t me!
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            A RAG chatbot that answers questions about my professional experience.
          </Typography>
        </div>
        <Container sx={{ flex: 5 }} maxWidth="md">
          <Chat />
        </Container>
      </Stack>
    </ThemeProvider>
  )
}

export default AbotMe