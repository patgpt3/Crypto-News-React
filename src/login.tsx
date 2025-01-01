
import React from 'react';
import ReactDOM from 'react-dom/client';
import { usePrivy } from "@privy-io/react-auth";

// Define a React component using TypeScript
function MyButton(): JSX.Element {
  const { login } = usePrivy();
  return <button onClick={login}>log Me</button>;
}

// Render the React component into the existing HTML element with ID `my-button`
const rootElement = document.getElementById('my-button');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<MyButton />);
}