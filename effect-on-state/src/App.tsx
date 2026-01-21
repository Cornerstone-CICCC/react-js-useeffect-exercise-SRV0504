import { useEffect, useState } from "react";

export default function App() {
  // 1. Message Logger
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("Message state changed:", message);
  }, [message]);

  // 2. Like Counter
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (likes > 0) {
      alert(`Likes updated to ${likes}!`);
    }
  }, [likes]);

  // 3. Color Box
  const [color, setColor] = useState<"red" | "blue">("red");

  useEffect(() => {
    console.log("Current color:", color);
  }, [color]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Message Logger</h2>
      <button onClick={() => setMessage("Hello from React!")}>
        Send Message
      </button>
      <p>
        Current message: <strong>{message || "(empty)"}</strong>
      </p>

      <h2 style={{ marginTop: 20 }}>Like Counter</h2>
      <button onClick={() => setLikes((prev) => prev + 1)}>
        Like
      </button>

      <h2 style={{ marginTop: 20 }}>Color Box</h2>
      <button
        onClick={() =>
          setColor((prev) => (prev === "red" ? "blue" : "red"))
        }
      >
        Change Color
      </button>

      <div
        style={{
          width: 100,
          height: 100,
          marginTop: 10,
          backgroundColor: color,
        }}
      />
    </div>
  );
}
