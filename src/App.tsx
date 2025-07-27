import "./App.css";

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#333' }}>TopTop Network</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>App is loading successfully!</p>
      <p>API URL: {import.meta.env.VITE_API_URL || 'Not set'}</p>
      <p>Privy App ID: {import.meta.env.VITE_PRIVY_APP_ID || 'Not set'}</p>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fff', borderRadius: '5px' }}>
        <p>If you can see this, React is working!</p>
        <p>Current time: {new Date().toLocaleString()}</p>
      </div>
    </div>
  );
}

export default App;
