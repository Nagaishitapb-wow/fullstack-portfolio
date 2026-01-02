
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { describe, it, expect, vi } from "vitest";

describe("Button Component", () => {
    it("renders with the correct label", () => {
        render(<Button label="Click Me" />);
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("calls the onClick handler when clicked", () => {
        const handleClick = vi.fn();
        render(<Button label="Click Me" onClick={handleClick} />);

        const button = screen.getByText("Click Me");
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("applies the correct background color for primary type", () => {
        render(<Button label="Primary" type="primary" />);
        const button = screen.getByText("Primary");
        expect(button).toHaveStyle({ background: "#4f46e5" });
    });

    it("applies the correct background color for secondary type", () => {
        render(<Button label="Secondary" type="secondary" />);
        const button = screen.getByText("Secondary");
        expect(button).toHaveStyle({ background: "#6b7280" });
    });
});
