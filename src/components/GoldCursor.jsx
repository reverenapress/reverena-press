import { useEffect, useState } from "react";

export default function GoldCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      if (e.target.closest("a, button, [data-cursor='hover']")) setHovering(true);
    };
    const out = (e) => {
      if (e.target.closest("a, button, [data-cursor='hover']")) setHovering(false);
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[70] hidden md:block transition-[width,height,opacity] duration-200 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        width: hovering ? 44 : 22,
        height: hovering ? 44 : 22,
        transform: "translate(-50%, -50%)",
        border: "1px solid #B8860B",
        borderRadius: "9999px",
        mixBlendMode: "screen",
      }}
    />
  );
}