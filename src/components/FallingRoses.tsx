import { useEffect, useState } from "react";

const FallingRoses = () => {
  const [roses, setRoses] = useState<Array<{ id: number; left: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    const roseElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 10}s`,
    }));
    setRoses(roseElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {roses.map((rose) => (
        <div
          key={rose.id}
          className="absolute text-4xl animate-float-down"
          style={{
            left: rose.left,
            animationDelay: rose.delay,
            animationDuration: rose.duration,
          }}
        >
          🌹
        </div>
      ))}
    </div>
  );
};

export default FallingRoses;
