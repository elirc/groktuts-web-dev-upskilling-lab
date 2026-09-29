import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import * as Sol from "./solution";

describe("React forms", () => {
  it("TicketCreateForm validation", () => {
    const created: any[] = [];
    render(<Sol.TicketCreateForm onCreate={d => created.push(d)} />);
    const inp = screen.getByTestId("title");
    fireEvent.change(inp, {target:{value:"ab"}});
    fireEvent.click(screen.getByText("Create"));
    expect(created.length).toBe(0);
    fireEvent.change(inp, {target:{value:"abcd"}});
    fireEvent.click(screen.getByText("Create"));
    expect(created.length).toBe(1);
  });
});
