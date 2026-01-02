
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import { describe, it, expect, afterEach } from "vitest";

describe("TodoList Component", () => {
    afterEach(() => {
        window.localStorage.clear();
    });

    it("renders the input and add button", () => {
        render(<TodoList />);
        expect(screen.getByPlaceholderText("Enter a task...")).toBeInTheDocument();
        expect(screen.getByText("Add")).toBeInTheDocument();
    });

    it("adds a new task when the add button is clicked", () => {
        render(<TodoList />);

        const input = screen.getByPlaceholderText("Enter a task...");
        const addButton = screen.getByText("Add");

        fireEvent.change(input, { target: { value: "New Task" } });
        fireEvent.click(addButton);

        expect(screen.getByText("New Task")).toBeInTheDocument();
    });

    it("does not add an empty task", () => {
        render(<TodoList />);

        const addButton = screen.getByText("Add");
        fireEvent.click(addButton);

        const tasks = screen.queryByRole("listitem");
        expect(tasks).toBeNull(); // Or check specific list length if initial state differs
    });

    it("toggles task completion when clicked", () => {
        render(<TodoList />);

        const input = screen.getByPlaceholderText("Enter a task...");
        const addButton = screen.getByText("Add");

        // Add a task
        fireEvent.change(input, { target: { value: "Toggle Task" } });
        fireEvent.click(addButton);

        const taskText = screen.getByText("Toggle Task");

        // Click to toggle
        fireEvent.click(taskText);
        expect(taskText).toHaveClass("completed");

        // Click to un-toggle
        fireEvent.click(taskText);
        expect(taskText).not.toHaveClass("completed");
    });

    it("deletes a task when delete button is clicked", () => {
        render(<TodoList />);

        const input = screen.getByPlaceholderText("Enter a task...");
        const addButton = screen.getByText("Add");

        // Add a task
        fireEvent.change(input, { target: { value: "Delete Me" } });
        fireEvent.click(addButton);

        expect(screen.getByText("Delete Me")).toBeInTheDocument();

        const deleteButton = screen.getByText("Delete");
        fireEvent.click(deleteButton);

        expect(screen.queryByText("Delete Me")).not.toBeInTheDocument();
    });
});
