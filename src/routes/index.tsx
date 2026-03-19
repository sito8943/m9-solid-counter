import { createFileRoute } from "@tanstack/solid-router";
import { createSignal } from "solid-js";

export function Home() {
  const [counter, setCounter] = createSignal(0);

  return (
    <section class="flex flex-col h-screen items-center justify-center gap-10">
      <h1 class="text-6xl font-bold">Solid tanstack Counter</h1>
      <p>Use the buttons to control the counter</p>
      <div class="flex gap-4">
        <button
          class="bg-blue-600 text-white px-6 py-2 rounded-3xl"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          Increment
        </button>
        <button
          class="bg-red-600 text-white px-6 py-2 rounded-3xl"
          onClick={() => setCounter((prev) => prev - 1)}
        >
          Decrement
        </button>
        <button
          class="bg-gray-600 text-white px-6 py-2 rounded-3xl"
          onClick={() => setCounter(0)}
        >
          Clear
        </button>
      </div>
      <p>Counter: {counter()}</p>
    </section>
  );
}

export const Route = createFileRoute("/")({
  component: Home,
});
