import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import * as Sol from "./solution";

describe("React components-props", () => {
  it("Greeting default", () => {
    render(<Sol.Greeting />);
    expect(screen.getByText(/Hello Guest/i)).toBeInTheDocument();
  });
  it("TicketRow and Stats and List", () => {
    const t = {id:5, title:"Crash"};
    render(<Sol.TicketRow ticket={t} />);
    expect(screen.getByTestId("row-5")).toBeInTheDocument();

    render(<Sol.Stats total={10} open={3} />);
    expect(screen.getByTestId("stats").textContent).toContain("10");

    render(<Sol.List items={[1,2]} render={(n:number)=> <span>{n}</span>} />);
    expect(screen.getAllByText(/1|2/).length).toBeGreaterThanOrEqual(2);

    render(<Sol.PriorityBadge priority="high" />);
    expect(screen.getByTestId("priority")).toBeInTheDocument();

    render(<Sol.StatsCard label="Open" value={12} />);
    expect(screen.getByTestId("stats-card")).toBeInTheDocument();

    render(<Sol.SearchInput value="" onChange={() => {}} />);
    expect(screen.getByTestId("search")).toBeInTheDocument();
  });
});
