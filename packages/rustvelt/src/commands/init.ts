import { flags } from "@oclif/command";
import Base from "../base";
var debug = require("debug")("rustvelt:init");
var { prompt } = require("enquirer");
const copy = require("copy-template-dir");
const path = require("path");

class Rustvelt extends Base {
  static description = "describe the command here";

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({char: "n"}),
    name: flags.string({
      char: "n",
      description: "name to print",
    }),
    force: flags.boolean({ char: "f" })
  };

static args = [{ name: "file" }];
  static strict = false;
  async run() {
    const { args, flags } = this.parse(Rustvelt);

    if (typeof flags.name === "undefined") {

      if (this.config && this.config.name) {
        flags.name = this.config.name;
      } else {
        flags.name = await prompt({
          type: "input",
          name: "name",
          message: "Whats is the folder name?"
        })
        .then(({name}: { name: string }) => name)
        .catch(console.error)
          .finally(() => {
            console.log("you can specify this with the --name flag in future")
          })
      }
    }
    const name = flags.name;

    const vars = { projectName: name };
    const inDir = path.resolve(__dirname, "../templates/ruStvelte");
    const outDir = path.join(process.cwd(), name);

    copy(inDir, outDir, vars, (err: Error, createdFiles: string[]) => {
      if (err) throw err;
      createdFiles.forEach(filePath => console.log(`Created ${filePath}`));
      console.log("done!")
    });
  }
}

export = Rustvelt;
