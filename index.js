const mume = require("@shd101wyy/mume");
const glob = require("glob")

const path = __dirname + "/public"

async function parse(name) {
  await mume.init();

  const engine = new mume.MarkdownEngine({
    projectDirectoryPath: path,
    fileDirectoryPath: path,
    filePath: `public/${name}`,
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
}

(async ()=> {
  try {
    const files = glob.sync("./*.md", {cwd:path})
    await Promise.all(files.map((it) => parse(it)))
  } catch (e) {
    console.error(e)
  }
  return process.exit()
})()