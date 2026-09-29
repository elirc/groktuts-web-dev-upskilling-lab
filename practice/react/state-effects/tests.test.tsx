import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import * as Sol from "./solution";

describe("React state-effects", () => {
  it("Counter increments", () => {
    render(<Sol.Counter />);
    const b = screen.getByTestId("count");
    fireEvent.click(b);
    expect(b.textContent).toBe("1");
  });
  it("Toggle", () => {
    render(<Sol.Toggle />);
    const b = screen.getByTestId("toggle");
    fireEvent.click(b);
    expect(b.textContent).toBe("ON");
  });
});
