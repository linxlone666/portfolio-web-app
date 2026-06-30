// src/components/Counter.tsx
import { useState } from "react";

interface CounterProps {
  initialCount?: number;
  step?: number;
}

export default function Counter({ initialCount = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState<number>(initialCount);

  return (
    <button onClick={() => setCount((prev) => prev + step)}>
      Count: {count}
    </button>
  );
}
