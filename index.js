const mume = require("@shd101wyy/mume");
const fs = require("fs");

async function main() {
  await mume.init();

  const engine = new mume.MarkdownEngine({
    "projectDirectoryPath": __dirname,
    filePath: "./index.md",
    config: {
      previewTheme: "github-light.css",
      codeBlockTheme: "default.css",
      printBackground: true,
      enableScriptExecution: true, // <= for running code chunks
    },
  });

  // html export
  await engine.htmlExport({ 
      offline: false,
      runAllCodeChunks: true
    });

  return process.exit();
}

main();
