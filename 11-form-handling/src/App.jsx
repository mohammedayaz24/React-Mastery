
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Login submitted", { username, password });
    // simple reset
    setUsername("");
    setPassword("");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#e6f0ff,#f7f9fc)" }}>
      <form onSubmit={submitHandler} style={{ width: 360, padding: 24, borderRadius: 12, boxShadow: "0 6px 18px rgba(20,30,60,0.12)", background: "#fff", display: "flex", flexDirection: "column", gap: 12 }}>
        <h2 style={{ margin: 0, marginBottom: 6, fontFamily: 'Inter, Arial, sans-serif', color: '#102a43' }}>Welcome back</h2>
        <p style={{ margin: 0, marginBottom: 12, color: '#486581', fontSize: 14 }}>Sign in to continue to your account</p>

        <label style={{ fontSize: 13, color: '#334e68' }}>Username</label>
        <input
          type="text"
          placeholder="Enter your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #d9e2ec', outline: 'none' }}
        />

        <label style={{ fontSize: 13, color: '#334e68' }}>Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #d9e2ec', outline: 'none' }}
        />

        <button type="submit" style={{ marginTop: 6, padding: '10px 12px', borderRadius: 8, border: 'none', background: '#2563eb', color: '#fff', cursor: 'pointer' }}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default App;