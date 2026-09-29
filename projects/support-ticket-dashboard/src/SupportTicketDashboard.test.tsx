import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { SupportTicketDashboard } from "./SupportTicketDashboard";

beforeEach(() => {
  localStorage.clear();
});

describe("SupportTicketDashboard", () => {
  it("renders header and stats", () => {
    render(<SupportTicketDashboard />);
    expect(screen.getByText(/Support Ticket Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
  });

  it("shows create form controls", () => {
    render(<SupportTicketDashboard />);
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Create Ticket/i).length).toBeGreaterThan(0);
  });

  it("shows filter select", () => {
    render(<SupportTicketDashboard />);
    const selects = screen.getAllByRole("combobox");
    expect(selects.length).toBeGreaterThan(0);
  });
});
