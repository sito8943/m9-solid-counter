import { createFileRoute } from "@tanstack/solid-router";
import { createSignal } from "solid-js";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [counter, setCounter] = createSignal(0);

  return (
    <section class="flex flex-col h-screen items-center justify-center gap-10">
      <h1 class="text-6xl font-bold">Solid tanstack Counter</h1>
      <p>Click the button to increase the counter</p>
      <button
        class="bg-blue-600 text-white px-6 py-2 rounded-3xl"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Click me!!
      </button>
      <p>Counter: {counter()}</p>
    </section>
  );
}
