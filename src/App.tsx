import "./App.css";

function App() {
  // Add some debugging
  console.log('App component is rendering');
  console.log('Environment variables:', {
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_PRIVY_APP_ID: import.meta.env.VITE_PRIVY_APP_ID
  });

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '20px' }}>🎉 TopTop Network</h1>
      <p style={{ fontSize: '18px', color: '#666', marginBottom: '10px' }}>✅ App is loading successfully!</p>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>Environment Variables Status:</h3>
        <p style={{ margin: '5px 0' }}>🔗 API URL: <strong>{import.meta.env.VITE_API_URL || '❌ Not set'}</strong></p>
        <p style={{ margin: '5px 0' }}>🔑 Privy App ID: <strong>{import.meta.env.VITE_PRIVY_APP_ID || '❌ Not set'}</strong></p>
        <p style={{ margin: '5px 0' }}>🌍 Build Mode: <strong>{import.meta.env.MODE}</strong></p>
        <p style={{ margin: '5px 0' }}>⏰ Current Time: <strong>{new Date().toLocaleString()}</strong></p>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e8f5e8', borderRadius: '8px', border: '2px solid #4caf50' }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '10px' }}>✅ Success!</h3>
        <p style={{ color: '#2e7d32', fontSize: '16px' }}>If you can see this message, React is working perfectly!</p>
        <p style={{ color: '#2e7d32', fontSize: '14px' }}>Check the browser console (F12) for debug information.</p>
      </div>
    </div>
  );
}

export default App;
