import React, { useEffect, useState } from "react";
import { getTodos, addTodo } from "./api";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async () => {
    if (!title) return;
    await addTodo(title);
    setTitle("");
    loadTodos();
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>📝 DevOps To-Do App version_2</h1>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


# 3. Stripe Live Secret Key (Pattern: sk_live_...)
stripe_key = "sk_live_51GxK0xHl5xK0xHl5xK0xHl5xK0xHl5xK0xHl5"

# 4. Slack Bot Token (Pattern: xoxb-...)
slack_token = "xoxb-123456789012-1234567890123-4a5b6c7d8e9f0g1h2i3j4k5l"

# 5. Google API Key (Pattern: AIza...)
google_api_key = "AIzaSyD-1234567890abcdef1234567890abcde"

# 6. Database Connection String (URI containing password)
db_url = "postgres://admin:SuperSecretPassword123@db-prod.company.com:5432/users"

# 7. Generic Private Key Header
private_key = """-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEA3Tz2mr7SZiAMfQyuvBjM9Oi..
-----END RSA PRIVATE KEY-----"""
