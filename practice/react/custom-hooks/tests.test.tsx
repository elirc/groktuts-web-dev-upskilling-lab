import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import React from "react";
import { useCounter, useToggle } from "./solution";

function CounterHarness() {
  const c = useCounter(5);
  return <button onClick={c.inc} data-testid="c">{c.count}</button>;
}
function ToggleHarness() {
  const [v, tog] = useToggle(false);
  return <button onClick={tog} data-testid="t">{String(v)}</button>;
}

describe("React custom-hooks", () => {
  it("useCounter", () => {
    render(<CounterHarness />);
    const b = screen.getByTestId("c");
    expect(b.textContent).toBe("5");
    fireEvent.click(b);
    expect(b.textContent).toBe("6");
  });
  it("useToggle", () => {
    render(<ToggleHarness />);
    const b = screen.getByTestId("t");
    fireEvent.click(b);
    expect(b.textContent).toBe("true");
  });
});
