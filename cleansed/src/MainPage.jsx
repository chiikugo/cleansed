import { useState } from 'react';

function MainPage() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      <h1>Main Page</h1>
      <p>Welcome. This page is now interactive.</p>

      <div style={{ marginTop: 16 }}>
        <button onClick={() => setCount(c => c + 1)}>Clicked {count} times</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something"
        />
        <div style={{ marginTop: 8 }}>You typed: {text || '...'}</div>
      </div>
    </div>
  );
}

export default MainPage;