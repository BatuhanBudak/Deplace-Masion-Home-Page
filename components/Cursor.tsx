import React, { useCallback, useEffect, useRef, useState } from "react";
import range from "lodash/range";

export default function Cursor() {
  const TAIL_LENGTH = 20;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [goos, setGoos] = useState(initGoos);
  const cursorHistoryRef = useRef(Array(TAIL_LENGTH).fill({ x: 0, y: 0 }));
  const requestRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);
  const gooBreakPoint = 1280;

  const mouseMove = useCallback((e: MouseEvent) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  useEffect(() => {
    if (window) {
      if (window.innerWidth >= gooBreakPoint) {
        window.addEventListener("mousemove", mouseMove);
      }
    }

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseMove]);

  function initGoos() {
    return range(0, TAIL_LENGTH).map((i) => {
      return { gooId: i, x: 0, y: 0, style: {} };
    });
  }

  const updateCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        cursorHistoryRef.current.shift();
        cursorHistoryRef.current.push({ x: mousePos.x, y: mousePos.y });
        for (let i = 0; i < TAIL_LENGTH; i++) {
          let current = cursorHistoryRef.current[i];
          let next =
            cursorHistoryRef.current[i + 1] ||
            cursorHistoryRef.current[TAIL_LENGTH - 1];

          let xDiff = next.x - current.x;
          let yDiff = next.y - current.y;

          current.x += xDiff * 0.35;
          current.y += yDiff * 0.35;

          setGoos((oldgooes) =>
            oldgooes.map((goo) => {
              if (goo.gooId === i) {
                return {
                  ...goo,
                  x: current.x,
                  y: current.y,
                };
              } else {
                return goo;
              }
            })
          );
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(updateCursor);
    },
    [mousePos]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateCursor);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [updateCursor]);

  interface Props {
    gooId: number;
    x: number;
    y: number;
  }

  const Goo = (props: Props) => {
    return (
      <div
        className="cursor-circle"
        style={{
          transform: `translate(${props.x}px, ${props.y}px) scale(${
            Number(props.gooId) / TAIL_LENGTH
          })`,
        }}
      ></div>
    );
  };
  Goo.displayName = "Goo";

  return (
    <div id="cursor">
      {goos.map((goo, i) => (
        <Goo gooId={goo.gooId} key={i} x={goo.x} y={goo.y} />
      ))}
    </div>
  );
}
