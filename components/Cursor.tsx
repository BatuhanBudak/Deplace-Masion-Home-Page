import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import range from "lodash/range";

export default function Cursor() {
  const TAIL_LENGTH = 20;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [goos, setGoos] = useState(initGoos);
  const cursorHistoryRef = useRef(Array(TAIL_LENGTH).fill({ x: 0, y: 0 }));
  const goosRef = useRef([]);
  goosRef.current = [];
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();

  const addToRefs: (el) => void = (el) => {
    if (el && !goosRef.current.includes(el)) {
      goosRef.current.push(el);
    }
  };

  const mouseMove = useCallback((e: { clientX; clientY }) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseMove]);

  function initGoos() {
    return range(0, TAIL_LENGTH).map((i) => {
      return { id: i, x: 0, y: 0, style: {} };
    });
  }

  const updateCursor = useCallback(
    (time) => {
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
              if (goo.id === i) {
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
    return () => cancelAnimationFrame(requestRef.current);
  }, [updateCursor]);

  const Goo = forwardRef(({ id, x, y }, ref) => {
    return (
      <div
        className="cursor-circle"
        id={id}
        style={{
          transform: `translate(${x}px, ${y}px) scale(${id / TAIL_LENGTH})`,
        }}
        ref={ref}
      ></div>
    );
  });
  Goo.displayName = "Goo";

  return (
    <div id="cursor">
      {goos.map((goo) => (
        <Goo id={goo.id} key={goo.id} x={goo.x} y={goo.y} ref={addToRefs} />
      ))}
    </div>
  );
}
