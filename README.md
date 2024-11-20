This project contains all the code for my portfolio website, including the GraphRAG chatbot, found here: https://avd-folio.vercel.app
## Technologies used:
Web Application
- TypeScript
- React
- MUI
- Next.js

Additional Technologies for implementing the Chatbot found here: https://avd-folio.vercel.app/abot_me
- Python
  - This was used for embedding the contents of my resume (and other additional info) and populating the PineCone vector database with said vector embeddings.
- TypeScript
  - Used as part of the Next.js framework to perform several different functions:
    1. Build out the Chat UI using MUI components.
    2. Establish the API route and handle requests from the user via the application
    3. Use NLP techniques to perform Parts of Speech (POS) tagging on the question and filter out unnecessary tokens.
    4. Interface with Pinecone to find information most relevant to the question asked.
    5. Fetch any related information using the Graph stored in Neo4j.
    6. Construct a prompt for the LLM.
    7. Return the generated response back to the client.
- PineCone
  - Used as the vector database for storing embeddings of relevant information along with information about each documents corresponding node in the graph database.
- Neo4j
  - Used as the graph database to help establish relationships between three different nodes: `Experience`, `Descriptions`, and `Skills`. This allowed the retrieved content to provide a much broader contextual awareness for the LLM to respond with.
- Langchain
  - This package was used both with Python and Typescript to intergace with Pinecone and the OpenAI models.
- OpenAI API
  - The OpenAI API was used to generate embeddings as well as providing a model that could respond to users' prompts.

![Chatbot Example](<CleanShot 2024-11-20 at 17.44.40.gif>)

![Graph](<CleanShot 2024-11-20 at 17.18.54.png>)


