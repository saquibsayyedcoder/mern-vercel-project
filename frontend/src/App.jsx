import { useEffect, useState } from "react";
import { API_URL } from "./api.js";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/hello`)
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("Error connecting to backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>MERN App (Vercel Ready)</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
