importScripts(
  "https://cdn.jsdelivr.net/npm/@live-codes/cherry-cljs-compiler@0.0.3/cherry.umd.js"
);

addEventListener("message", (event) => {
  const code = event.data;
  const js = CherryCljs.compileString(code);
  self.postMessage({
    worker: "UMD",
    compiled: js,
  });
});
