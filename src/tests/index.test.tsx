import { test, expect } from "vitest";
import { render, fireEvent } from "@solidjs/testing-library";
import { Home } from "../routes/index";

test("increments value", async () => {
  const { getByText } = render(() => <Home />);
  expect(getByText("Counter: 0")).toBeTruthy();
  fireEvent.click(getByText("Increment"));
  expect(getByText("Counter: 1")).toBeTruthy();
});

test("decrements value", async () => {
  const { getByText } = render(() => <Home />);
  expect(getByText("Counter: 0")).toBeTruthy();
  fireEvent.click(getByText("Decrement"));
  expect(getByText("Counter: -1")).toBeTruthy();
});

test("clears value", async () => {
  const { getByText } = render(() => <Home />);
  fireEvent.click(getByText("Increment"));
  fireEvent.click(getByText("Increment"));
  expect(getByText("Counter: 2")).toBeTruthy();
  fireEvent.click(getByText("Clear"));
  expect(getByText("Counter: 2")).toBeTruthy();
});

test("increment and decrement together", async () => {
  const { getByText } = render(() => <Home />);
  fireEvent.click(getByText("Increment"));
  fireEvent.click(getByText("Increment"));
  fireEvent.click(getByText("Increment"));
  fireEvent.click(getByText("Decrement"));
  expect(getByText("Counter: 2")).toBeTruthy();
});
