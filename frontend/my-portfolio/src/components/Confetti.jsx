import { useState } from "react";

export default function Confetti() {
    const [count, setCount] = useState(0);

    return (
      <div className="card" style={{ color: "inherit" }}>
      <button
        onClick={() => {
        if (count < 25) {
          setCount((prevCount) => prevCount + 1);
        } else if (count < 925) {
          setCount((prevCount) => prevCount + 100);
        } else {
          import('canvas-confetti').then((module) => {
          const confetti = module.default;
          confetti({
            particleCount: 2000,
            spread: 10000,
            origin: { y: 0.6 },
          });
          });
        }
        }}
      >
        Count is {count}
      </button>
      <p>
        Click for an Easter Egg!
      </p>
      </div>
    );
}
