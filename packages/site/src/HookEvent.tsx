import React, { useEffect, useState } from "react";
import { useEmitter, useEvent } from "react-hook-event";

const useCounter = (): any => {
  const [counter, setCounter] = useState(0);

  useEvent("counterChange", ({ value }) => {
    setCounter(value);
  });

  return [counter];
};

const ComponentC = () => {
  const [counter, setCounter] = useState(0);

  const emit = useEmitter();

  const handleClick = () => {
    setCounter((c) => {
      return c + 1;
    });
  };

  useEffect(() => {
    emit("counterChange", { value: counter });
  }, [counter, emit]);

  return (
    <div>
      <div>
        <div>Component C: {counter}</div>
        <button
          style={{
            color: "black",
          }}
          onClick={handleClick}
        >
          C Click
        </button>
      </div>
    </div>
  );
};

const ComponentB = () => {
  const [counter] = useCounter();
  return (
    <div>
      <div>Component B: {counter}</div>
      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  const [counter] = useCounter();

  const emit = useEmitter();

  return (
    <div>
      <div>Component A: {counter}</div>
      <div>
        <button
          style={{
            color: "black",
          }}
          onClick={() => emit("counterChange", counter + 1)}
        >
          A click
        </button>
      </div>
      <ComponentB />
    </div>
  );
};

const HookEvent = () => {
  const [counter, setCounter] = useState(0);

  useEvent("counterChange", ({ value }) => {
    setCounter(value);
  });

  return (
    <div>
      <div>HookEvent: {counter}</div>
      <ComponentA />
    </div>
  );
};

export { HookEvent };
