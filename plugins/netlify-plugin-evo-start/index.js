// index.js

module.exports = {
  onEnd: async ({ utils: { build, status, cache, run, git } }) => {
    await run.command("node dist/main");
  },
}
