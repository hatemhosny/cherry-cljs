import { compileString } from "https://cdn.jsdelivr.net/npm/cherry-cljs@0.0.3/index.js";

addEventListener("message", (event) => {
  const code = event.data;
  const js = compileString(code);
  self.postMessage({
    worker: "ESM",
    compiled: js,
  });
});
